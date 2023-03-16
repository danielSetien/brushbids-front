import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { GrClose } from "react-icons/gr";
import Button from "../../components/Button/Button";

describe("Given a Button component", () => {
  describe("When rendered with the given an icon shaped as an 'X' sign", () => {
    test("It should show a button with an icon", () => {
      const buttonIconElement = <GrClose />;
      const buttonLabel = "close";

      const buttonIconClosingTag = "</svg>";

      render(
        <Button
          className=""
          ariaLabel={buttonLabel}
          icon={buttonIconElement}
          disabled={false}
          action={() => {}}
        />
      );

      const button = screen.getByRole("button", {
        name: buttonLabel,
      });

      expect(button).toContainHTML(buttonIconClosingTag);
    });
  });

  describe("When the user clicks on the button", () => {
    test("Then it should call the action given to it", async () => {
      const buttonIconElement = <GrClose />;
      const buttonLabel = "irrelevant";

      const spy = jest.fn();

      render(
        <Button
          className=""
          ariaLabel={buttonLabel}
          icon={buttonIconElement}
          disabled={false}
          action={() => spy()}
        />
      );

      const button = screen.getByRole("button", {
        name: buttonLabel,
      });

      await act(async () => await userEvent.click(button));

      expect(spy).toHaveBeenCalled();
    });
  });
});
