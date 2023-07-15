import { Provider } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import { store } from "@/app/store";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );

}
