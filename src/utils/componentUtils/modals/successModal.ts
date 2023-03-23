import "react-toastify/dist/ReactToastify.css";
import { Flip, toast } from "react-toastify";

const displaySuccessModal = (message: string) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
    autoClose: false,
    className: "toast-success",
    transition: Flip,
  });
};

export default displaySuccessModal;
