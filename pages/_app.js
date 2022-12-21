// import "../styles/globals.css";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <dev>
      <Component {...pageProps} />
    </dev>
  );
}
