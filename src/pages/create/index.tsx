import { ToastContainer } from "react-toastify";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import CreateFormPageStyled from "../../styles/pages/CreateFormPageStyled";

const CreatePage = () => {
  return (
    <>
      <ToastContainer />
      <CreateFormPageStyled>
        <Header />
        <CreateForm />
      </CreateFormPageStyled>
    </>
  );
};

export default CreatePage;
