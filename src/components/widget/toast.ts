import React from "react";
import { toast } from "react-toastify";

const Toast = (message: string) =>
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
  });

export default Toast;
