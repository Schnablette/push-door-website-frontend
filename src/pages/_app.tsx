import { FC } from "react";
import "../styles/global.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: FC;
  pageProps: {};
}) {
  return <Component {...pageProps} />;
}
