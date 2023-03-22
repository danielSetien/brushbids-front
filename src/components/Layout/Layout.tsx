import { useRouter } from "next/router";
import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/userUi/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const { isLoading } = useAppSelector((state) => state.ui);
  const { fetchTokenAndLogin } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchTokenAndLogin();

    const routeChangeStart = () => {
      dispatch(setIsLoadingActionCreator());
    };
    const routeChangeComplete = () => {
      dispatch(unsetIsLoadingActionCreator());
    };

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);
  }, [dispatch, fetchTokenAndLogin, router.events]);

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
