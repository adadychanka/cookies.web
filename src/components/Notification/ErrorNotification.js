import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const toastConfig = {
  hideProgressBar: true,
  autoClose: 2000,
};

const ErrorNotification = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message, toastConfig);
    }
  }, [message]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default ErrorNotification;
