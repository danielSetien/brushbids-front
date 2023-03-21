import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import usePaintings from "../../hooks/usePaintings/usePaintings";
import {
  CreatePaintingFormFields,
  CreatePaintingSelectFields,
} from "../../types/paintingTypes";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const router = useRouter();
  const { createPainting } = usePaintings();
  const [image, setImage] = useState<File>();

  const [formFields, setFormFields] = useState<CreatePaintingFormFields>({
    author: "",
    name: "",
    year: "",
    gallery: "",
    technique: "",
    size: "",
    medium: "",
    materials: "",
    price: "",
  });

  const [selectFields, setSelectFields] = useState<CreatePaintingSelectFields>({
    unique: "",
    certificate: "",
    rarity: "",
    condition: "",
    signature: "",
    frame: "",
  });

  const [, setTextArea] = useState("");

  const handleFormFieldsChange = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({
      ...formFields,
      [id]: value,
    });
  };

  const handleFormSelectsChange = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectFields({
      ...selectFields,
      [id]: value,
    });
  };

  const handleTextAreaChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPaintingData = new FormData(event.currentTarget);

    if (image) {
      newPaintingData.append("image", image);
    }

    createPainting(newPaintingData);

    router.push(frontRouteUtils.homePage);
  };

  return (
    <CreateFormStyled
      action="/send-data-here"
      method="post"
      onSubmit={handleFormSubmit}
      name="Create painting form"
      encType="multipart/form-data"
    >
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        placeholder="Enter the author's full name"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter the artwork's name"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="year">Year of production</label>
      <input
        type="text"
        id="year"
        name="year"
        placeholder='Enter a year ("YYYY")'
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="gallery">Gallery</label>
      <input
        type="text"
        id="gallery"
        name="gallery"
        placeholder="Enter the name of the gallery"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="technique">Technique</label>
      <input
        type="text"
        id="technique"
        name="technique"
        placeholder="Enter the artwork's technique"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="size">Size</label>
      <input
        type="text"
        id="size"
        name="size"
        placeholder="Enter the artwork's size"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="medium">Medium</label>
      <input
        type="text"
        id="medium"
        name="medium"
        placeholder="Enter the artwork's medium"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />
      <label htmlFor="materials">Materials</label>
      <input
        type="text"
        id="materials"
        name="materials"
        placeholder="Enter the artwork's materials"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />

      <label htmlFor="price">Minimum bid</label>
      <input
        type="text"
        id="price"
        name="price"
        placeholder="Enter the artwork's minimum bid"
        autoComplete="off"
        onChange={handleFormFieldsChange}
        className="field"
      />

      <label htmlFor="unique">Unique</label>
      <select
        id="unique"
        name="unique"
        className="selector"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label htmlFor="certificate">Certificate</label>
      <select
        id="certificate"
        className="selector"
        name="certificate"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label htmlFor="rarity">Rarity</label>
      <select
        id="rarity"
        className="selector"
        name="rarity"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="unique">Unique</option>
        <option value="limited edition">Limited edition</option>
      </select>

      <label htmlFor="condition">Condition</label>
      <select
        id="condition"
        className="selector"
        name="condition"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
      </select>

      <label htmlFor="signature">Signature</label>
      <select
        id="signature"
        className="selector"
        name="signature"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label htmlFor="frame">Frame</label>
      <select
        id="frame"
        className="selector"
        name="frame"
        onChange={handleFormSelectsChange}
      >
        <option value="" hidden></option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label htmlFor="image">Image</label>
      <label htmlFor="image" className="field faux-placeholder">
        {image ? image.name : "Introduce an image"}
        <AiOutlineFolderAdd className="icon" />
      </label>
      <input
        accept="image/*"
        type="file"
        id="image"
        hidden
        onChange={handleImageChange}
      />

      <label htmlFor="summary">Summary</label>
      <textarea
        id="summary"
        placeholder="Enter the summary"
        autoComplete="off"
        className="summary"
        name="summary"
        onChange={handleTextAreaChange}
      />
      <button
        type="submit"
        className="form__button"
        disabled={
          !(
            Boolean(formFields.author.length) &&
            Boolean(formFields.name.length) &&
            Boolean(formFields.year.length) &&
            Boolean(formFields.price.length) &&
            Boolean(image)
          )
        }
      >
        Add
      </button>
    </CreateFormStyled>
  );
};

export default CreateForm;
