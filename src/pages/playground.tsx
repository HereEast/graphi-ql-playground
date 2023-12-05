import { ReactElement } from "react";
import Head from "next/head";
import { Playground } from "../components/_pages/Playground";

export default function PlaygroundPage(): ReactElement {
  return (
    <>
      <Head>
        <title>GraphiQL Playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Playground />
    </>
  );
}
