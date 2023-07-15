import React from "react";
import Head from "next/head";

type PropsType = {
  title: string;
  description: string;
};

const HeadTags = ({ title, description }: PropsType) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} key="desc" />
    </Head>
  </div>
);

export default HeadTags;
