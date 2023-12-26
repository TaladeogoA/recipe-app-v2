import GeneralLayout from "@/components/layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  );
}
