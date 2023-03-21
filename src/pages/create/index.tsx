import { ToastContainer } from "react-toastify";
import CreateForm from "../../components/CreateForm/CreateForm";
import CreateFormPageStyled from "../../styles/pages/CreateFormPageStyled";

const CreateFormPage = () => {
  return (
    <>
      <ToastContainer />
      <CreateFormPageStyled>
        <CreateForm />
      </CreateFormPageStyled>
    </>
  );
};

export default CreateFormPage;
