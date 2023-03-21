import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Image from "next/image";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import LoginPageStyled from "../../styles/pages/LoginPageStyled";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  const { loginUser } = useUser();
  const router = useRouter();

  const { isLogged } = useAppSelector((state) => state.user);

  if (isLogged) {
    router.push(frontRouteUtils.homePage);
  }

  return (
    <LoginPageStyled className="login-page">
      <ToastContainer />
      <Header />
      <section className="login-page__container">
        <Image
          src={"/img/brushbids-full-logo.webp"}
          alt="brushbids logo"
          width={200}
          height={200}
          priority
          className="logo"
        ></Image>
        <h2 className="login-page__title">
          {`Log in to collect art by the world's leading artists`}
        </h2>
        <LoginForm loginUser={loginUser} />
        <span className="login-page__register-text">
          Do you want an account? <span>Register here.</span>
        </span>
      </section>
    </LoginPageStyled>
  );
};

export default LoginPage;
