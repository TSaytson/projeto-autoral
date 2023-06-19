import Head from "next/head";
import React from "react";
import Header from "../Header";

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }:Props) {
  return (
    <>
      <Head>
        <title>Projeto Autoral "PersonaRate" Thiago Saytson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}
    </>
  )
}