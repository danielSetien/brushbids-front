const waitPromise = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  });
};

export default waitPromise;
