import Head from "next/head";
import React from "react";

const Fallback = () => {
  return (
    <>
      <Head>
        <title>Sobrus MED</title>
      </Head>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </>
  );
};

export default Fallback;
