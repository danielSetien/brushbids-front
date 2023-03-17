import { useState } from "react";
import { CreatePaintingFormFields } from "../../types/paintingTypes";

const CreateForm = (): JSX.Element => {
  const [formFields, setFormFields] = useState<CreatePaintingFormFields>({
    author: "",
    name: "",
    year: "",
    gallery: "",
    technique: "",
    size: "",
    medium: "",
    materials: "",
    unique: "",
    certificate: "",
    rarity: "",
    condition: "",
    signature: "",
    price: "",
    frame: "",
    highlightOrder: "",
    summary: "",
  });

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
  };

  return (
    <form action="/send-data-here" method="post" onSubmit={handleFormSubmit}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        placeholder="Enter the author's full name"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter the artwork's name"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="year">Year of production</label>
      <input
        type="text"
        id="year"
        placeholder='Enter a year ("YYYY")'
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="collection">Collection</label>
      <input
        type="text"
        id="collection"
        placeholder="Enter the name of the collection"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="technique">Technique</label>
      <input
        type="text"
        id="technique"
        placeholder="Enter the artwork's technique"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="size">Size</label>
      <input
        type="text"
        id="size"
        placeholder="Enter the artwork's size"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="medium">Medium</label>
      <input
        type="text"
        id="medium"
        placeholder="Enter the artwork's medium"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
      <label htmlFor="materials">Materials</label>
      <input
        type="text"
        id="materials"
        placeholder="Enter the artwork's materials"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />

      <label htmlFor="price">Minimum bid</label>
      <input
        type="text"
        id="price"
        placeholder="Enter the artwork's minimum bid"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />

      <label htmlFor="unique">Unique</label>
      <select id="unique" value={"true | false"}></select>

      <label htmlFor="certificate">Certificate</label>
      <select id="certificate" value={"true | false"}></select>

      <label htmlFor="rarity">Rarity</label>
      <select id="rarity" value={"unique | limited units"}></select>

      <label htmlFor="condition">condition</label>
      <select id="condition" value={"pristine | good"}></select>

      <label htmlFor="signature">Signature</label>
      <select id="signature" value={"true | false"}></select>

      <label htmlFor="frame">Frame</label>
      <select id="frame" value={"true | false"}></select>

      <label htmlFor="summary">Summary</label>
      <input
        type="text"
        id="summary"
        placeholder="Enter the summary"
        autoComplete="off"
        onChange={handleFormFieldsChange}
      />
    </form>
  );
};

export default CreateForm;
