import CreateForm from "../../components/CreateForm/CreateForm";
import CreateFormPageStyled from "../../styles/pages/CreateFormPageStyled";

const CreateFormPage = () => {
  return (
    <>
      <CreateFormPageStyled className="page">
        <CreateForm />
      </CreateFormPageStyled>
    </>
  );
};

export default CreateFormPage;
