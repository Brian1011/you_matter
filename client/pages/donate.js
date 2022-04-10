import Head from "next/head";
import DonateForm from "../components/donate_form";
import NavbarComponent from "../components/navbar";

function Donate() {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>DAPP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen px-12 bg-black">
        <NavbarComponent />
        <DonateForm />
      </div>
    </div>
  );
}

export default Donate;
