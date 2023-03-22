import { ToastContainer } from "react-toastify";
import CreateForm from "../../components/CreateForm/CreateForm";
import CreateFormPageStyled from "../../styles/pages/CreateFormPageStyled";

const CreateFormPage = () => {
  return (
    <>
      <CreateFormPageStyled className="page">
        <ToastContainer />
        <CreateForm />
      </CreateFormPageStyled>
    </>
  );
};

export default CreateFormPage;
