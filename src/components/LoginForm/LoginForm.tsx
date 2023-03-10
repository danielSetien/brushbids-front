import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { LoginFormFields } from "../../types/types";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [formFields, setFormFields] = useState<LoginFormFields>({
    email: "",
    password: "",
  });

  const handleFormFieldsChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [name]: value,
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
        name="email"
        placeholder="Enter your email address"
        autoComplete="off"
        minLength={8}
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        minLength={8}
        maxLength={32}
        onChange={handleFormFieldsChange}
      />
      <button type="submit" className="form__button">
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
