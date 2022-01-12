import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
interface LoginProps {
  children: ReactNode;
}
interface data {
  email: string;
  password: string;
}
interface AuthContextData {
  signIn: (userData: data) => void;
  Logout: () => void;
  authToken: string;
  error: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: LoginProps) => {
  const history = useHistory();

  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [error, setError] = useState("");

  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.token);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.token);
        // redirecionamos para a página logado
        history.push("/dashboard");
      })
      .catch((err) => setError("algo deu errado, tente novamente"));
  };
  // Função para deslogar da aplicação
  const Logout = () => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    setError("");
    // redirecionando para login
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
