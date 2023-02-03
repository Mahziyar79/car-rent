import Layout from "../containers/Layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
const progress = new ProgressBar({
  size: 4,
  color: "#3563E9",
  className:"z-50",
  delay: 100,
});

Router.events.on("routeChangeStart" , progress.start)
Router.events.on("routeChangeComplete" , progress.finish)
Router.events.on("routeChangeError" , progress.finish)

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
