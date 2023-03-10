import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import { UserCredentials } from "../../types/types";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginFormStyled component", () => {
  describe("When renderWithProvidersed", () => {
    test("Then it should show the label 'Email", () => {
      const expectedLabel = "Email";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const emailLabel = screen.getByLabelText(expectedLabel, {
        selector: "input",
      });

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Email'", () => {
      const expectedInput = "Email";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const emailLabel = screen.getByLabelText(expectedInput);

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the label 'Password'", () => {
      const expecetedLabel = "Password";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const passwordLabel = screen.getByLabelText(expecetedLabel, {
        selector: "input",
      });

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Password'", () => {
      const expectedInput = "Password";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const passwordLabel = screen.getByLabelText(expectedInput);

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the button 'Log in'", () => {
      const expectedButtonName = "Log in";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the user inputs 'mail@address.com' as email", () => {
    test("Then the Email input value should be 'mail@address.com'", async () => {
      const userEmail = "mail@address.com";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const emailInput = screen.getByLabelText("Email");

      await act(async () => await userEvent.type(emailInput, userEmail));

      expect(emailInput).toHaveValue(userEmail);
    });
  });

  describe("When the user inputs 'username1234' as password", () => {
    test("Then the Password input value should be 'username1234'", async () => {
      const userPassword = "username1234";

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const passwordInput = screen.getByLabelText("Password");

      await act(async () => await userEvent.type(passwordInput, userPassword));

      expect(passwordInput).toHaveValue(userPassword);
    });
  });

  describe("When the user fills the Form with enough information and then submits it", () => {
    test("Then the loginUser function should be called with the information the user provided", async () => {
      const mockUserCredentials: UserCredentials = {
        email: "admin@user.com",
        password: "adminUser1234",
      };

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");

      const loginButton = screen.getByRole("button", {
        name: "Log in",
      });

      await act(
        async () => await userEvent.type(emailInput, mockUserCredentials.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInput, mockUserCredentials.password)
      );

      await act(async () => await userEvent.click(loginButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUserCredentials);
    });
  });

  describe("When the user fills the Form with too little information", () => {
    test("Then the Log in button should be disabled", async () => {
      const mockUserCredentials: UserCredentials = {
        email: "admin@user.com",
        password: "short",
      };

      renderWithProviders(<LoginForm loginUser={mockLoginUser} />);

      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");

      const loginButton = screen.getByRole("button", {
        name: "Log in",
      });

      await act(
        async () => await userEvent.type(emailInput, mockUserCredentials.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInput, mockUserCredentials.password)
      );

      expect(loginButton).toHaveAttribute("disabled");
    });
  });
});
