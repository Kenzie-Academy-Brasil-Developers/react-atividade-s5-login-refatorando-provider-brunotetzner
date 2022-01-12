import React from "react";
import * as yup from "yup";
import { useAuth } from "../../providers/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledButton } from "../../components/button/style";
import { StyledForm } from "./style";
interface DadosData {
  email: string;
  password: string;
}
export const Login = () => {
  const { signIn } = useAuth();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Por favor, informe seu email")
      .email("Email invaĺido, tente novamente"),
    password: yup.string().required("Por favor, digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DadosData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: DadosData) => {
    signIn(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>
        kenzie<label>Form</label>
      </h1>
      <input placeholder="email" {...register("email")}></input>
      <span>{errors.email?.message}</span>
      <input placeholder="senha" {...register("password")}></input>
      <span>{errors.password?.message}</span>
      <StyledButton type="submit">enviar</StyledButton>
    </StyledForm>
  );
};
