const feedbackUtils = {
  success: {
    deletionMessage: "Painting successfully deleted",
    creationMessage: "Painting successfully created",
  },
  paintings: {
    signature: {
      true: "Is signed by the author",
      false: "Is not signed",
    },
    certificate: {
      true: "Includes a Certificate of Authenticity",
      false: "Does not include a Certificate of Authenticity",
    },
    frame: {
      true: "Is framed",
      false: "Is not framed",
    },
  },
};

export default feedbackUtils;
