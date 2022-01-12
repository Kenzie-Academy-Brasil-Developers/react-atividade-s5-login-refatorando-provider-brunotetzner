import { useAuth } from "../../providers/Auth";
import { StyledButton } from "../../components/button/style";
import { Container } from "./style";
export const Dashboard = () => {
  const { Logout, authToken } = useAuth();
  console.log(authToken);
  return (
    <Container>
      <h1>dashboard:</h1>
      <label>Em breve...</label>

      <StyledButton onClick={Logout}>logout</StyledButton>
    </Container>
  );
};
