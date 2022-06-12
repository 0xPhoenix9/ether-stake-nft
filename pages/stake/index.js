// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Stake from "../../components/Stake/Stake";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Jacked | Stake</title>
        <link rel="shortcut icon" href="./images/Logos/E-Fill-White.png" />
      </Head>
      <Stake />
    </Fragment>
  );
};

export default index;
