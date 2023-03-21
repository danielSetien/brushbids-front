import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Router from "next/router";
import { act } from "react-dom/test-utils";
import CreateForm from "../../components/CreateForm/CreateForm";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const uploadedImage = new File(["hello"], "hello.png", {
  type: "image/png",
});

const createPaintingSpy = jest.fn();

jest.mock("../../hooks/usePaintings/usePaintings", () => () => ({
  createPainting: () => createPaintingSpy(),
}));

describe("Given a CreateForm component", () => {
  describe("When rendered", () => {
    test("Then it should show the label 'Author'", () => {
      const expectedLabel = "Author";

      renderWithProviders(<CreateForm />);

      const authorLabel = screen.getByLabelText(expectedLabel, {
        selector: "input",
      });

      expect(authorLabel).toBeInTheDocument();
    });

    test("Then it should show the button 'Add'", () => {
      const expectedButtonName = "Add";

      renderWithProviders(<CreateForm />);

      const addButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(addButton).toBeInTheDocument();
    });
  });

  describe("When the user inputs 'Jackson Pollock' as author", () => {
    test("Then the Author input value should be 'Jackson Pollock'", async () => {
      const paintingAuthor = "Jackson Pollock";

      renderWithProviders(<CreateForm />);

      const authorInput = screen.getByLabelText("Author");

      await act(async () => await userEvent.type(authorInput, paintingAuthor));

      expect(authorInput).toHaveValue(paintingAuthor);
    });
  });

  describe("When the user selects the Certificate field and sets it to 'yes'", () => {
    test("Then the Certificate input value should be 'true'", async () => {
      const selectedValue = "true";

      renderWithProviders(<CreateForm />);

      const certificateInput = screen.getByLabelText("Certificate");

      await act(
        async () =>
          await fireEvent.change(certificateInput, {
            target: { value: "true" },
          })
      );

      expect(certificateInput).toHaveValue(selectedValue);
    });
  });

  describe("When the user writes a description summary 'A rebellious exercise of freedom of expression'", () => {
    test("Then the text field should show the summary 'A rebellious exercise of freedom of expression'", async () => {
      const expectedText = "A rebellious exercise of freedom of expression";

      renderWithProviders(<CreateForm />);

      const textAreaInput = screen.getByLabelText("Summary");

      await act(async () => await userEvent.type(textAreaInput, expectedText));

      expect(textAreaInput).toHaveValue(expectedText);
    });
  });

  describe("When the user uploads a picture of a painting 'Mural'", () => {
    test("Then the image should be stored in the variable named 'image'", async () => {
      renderWithProviders(<CreateForm />);

      const imageInput = screen.getByLabelText("Image") as HTMLInputElement;

      fireEvent.change(imageInput, { target: { files: [uploadedImage] } });

      expect(imageInput.files![0]).toStrictEqual(uploadedImage);
    });
  });

  describe("When the user inserts a painting's author, name, year, price and image", () => {
    test("Then a request to create a painting should be sent", async () => {
      const author = "Jackson Pollock";
      const name = "Mural";
      const year = "1943";
      const price = "140000000";
      const expectedButtonName = "Add";

      const spyOnRouteChange = jest.fn();

      Router.events.on("routeChangeStart", () => {
        spyOnRouteChange();
      });

      renderWithProviders(<CreateForm />);

      const authorInput = screen.getByLabelText("Author");
      const nameInput = screen.getByLabelText("Name");
      const yearInput = screen.getByLabelText("Year of production");
      const priceInput = screen.getByLabelText("Minimum bid");
      const imageInput = screen.getByLabelText("Image") as HTMLInputElement;
      const addButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await act(async () => await userEvent.type(authorInput, author));
      await act(async () => await userEvent.type(nameInput, name));
      await act(async () => await userEvent.type(yearInput, year));
      await act(async () => await userEvent.type(priceInput, price));

      fireEvent.change(imageInput, { target: { files: [uploadedImage] } });

      await act(async () => await userEvent.click(addButton));

      expect(createPaintingSpy).toHaveBeenCalled();
    });
  });
});
