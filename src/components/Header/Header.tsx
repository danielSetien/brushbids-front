import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../store/hooks";
import LogButton from "../LogButton/LogButton";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

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

      <Link className="navigation-link" href={"/"}>
        Home
      </Link>
      <span className="navigation-link">Add</span>

      <LogButton isLogged={isLogged} />
    </HeaderStyled>
  );
};

export default Header;
