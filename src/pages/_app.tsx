import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../utils/firebase/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "components/Header/loginObserver";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
