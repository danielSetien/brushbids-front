import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const displaySuccessModal = (message: string) => {
  toast.success(message, {
    position: "top-center",
    closeOnClick: true,
    autoClose: false,
    className: "toast-success",
  });
};

export default displaySuccessModal;
