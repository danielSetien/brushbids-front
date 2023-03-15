import { useRouter } from "next/router";
import useToken from "../../hooks/useToken/useToken";
import LogButtonStyled from "./LogButtonStyled";

interface LogButtonProps {
  isLogged: boolean;
}

const LogButton = ({ isLogged }: LogButtonProps): JSX.Element => {
  const { removeTokenAndLogout } = useToken();
  const router = useRouter();

  return (
    <LogButtonStyled>
      <button
        className={`button ${!isLogged && "button--secondary"}`}
        onClick={() => {
          isLogged ? removeTokenAndLogout() : router.push("/login");
        }}
      >
        {isLogged ? "Log out" : "Log in"}
      </button>
    </LogButtonStyled>
  );
};

export default LogButton;
