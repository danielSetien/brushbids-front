import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../../store/hooks";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import LogButton from "../LogButton/LogButton";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged, administrator } = useAppSelector((state) => state.user);
  const router = useRouter();

  return (
    <HeaderStyled>
      <div className="navbar">
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
        {administrator && (
          <Link className="navigation-link" href={frontRouteUtils.createPage}>
            Add
          </Link>
        )}
        {!router.pathname.includes(frontRouteUtils.loginPage) && (
          <LogButton isLogged={isLogged} />
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
