import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../store/hooks";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import { administratorUsername } from "../../utils/userUtils/userUtils";
import LogButton from "../LogButton/LogButton";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged, username } = useAppSelector((state) => state.user);

  return (
    <HeaderStyled>
      <Image
        src={"/favicon.ico"}
        alt="brushbids logo"
        width={50}
        height={50}
        priority
        className="logo"
      ></Image>

      <Link className="navigation-link" href={frontRouteUtils.homePage}>
        Home
      </Link>
      {username === administratorUsername && (
        <Link className="navigation-link" href={frontRouteUtils.createPage}>
          Add
        </Link>
      )}

      <LogButton isLogged={isLogged} />
    </HeaderStyled>
  );
};

export default Header;
