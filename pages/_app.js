import Layout from "../containers/Layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
