import Head from "next/head";
import Script from "next/script";

export default function Header() {
  return (
    <Head>
      <title>Hourly - Use Time Wisely!</title>
      <script
        data-goatcounter="https://hourly.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤑</text></svg>"
      ></link>
    </Head>
  );
}
