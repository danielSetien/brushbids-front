import { useState } from "react";
import { setButtonIsLoadingActionCreator } from "../../store/features/userUi/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { LoginFormFields, UserCredentials } from "../../types/userTypes";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const LoginForm = ({ loginUser }: LoginFormProps): JSX.Element => {
  const [formFields, setFormFields] = useState<LoginFormFields>({
    email: "",
    password: "",
  });

  const { buttonIsLoading } = useAppSelector((state) => state.ui);

  const handleFormFieldsChange = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [id]: value,
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser({ ...formFields });
  };

  return (
    <LoginFormStyled
      action="/send-data-here"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email address"
        autoComplete="off"
        minLength={8}
        className="field"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        required
        minLength={8}
        maxLength={32}
        className="field"
        onChange={handleFormFieldsChange}
      />
      <button
        type="submit"
        className={`form__button ${buttonIsLoading && " button--loading"}`}
        disabled={
          !(
            Boolean(formFields.email.length) &&
            Boolean(formFields.password.length)
          )
        }
      >
        <div className={`button__content${buttonIsLoading && "--loading"}`}>
          {buttonIsLoading ? "/" : "Log in"}
        </div>
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
