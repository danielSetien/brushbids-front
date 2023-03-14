import Link from "next/link";
import useToken from "../../hooks/useToken/useToken";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import LogButtonStyled from "./LogButtonStyled";

interface LogButtonProps {
  isLogged: boolean;
}

const LogButton = ({ isLogged }: LogButtonProps): JSX.Element => {
  const { removeTokenAndLogout } = useToken();

  return (
    <LogButtonStyled>
      <Link href={isLogged ? "" : frontRouteUtils.loginPage}>
        <button
          className={`button ${!isLogged && "button--secondary"}`}
          onClick={() => removeTokenAndLogout()}
        >
          {isLogged ? "Log out" : "Log in"}
        </button>
      </Link>
    </LogButtonStyled>
  );
};

export default LogButton;
