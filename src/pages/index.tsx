import { FC } from "react";

import { createClient } from "next-sanity";

import { Paragraph, Subheader, SectionHeader } from "../components";

type SectionsPropTypes = {
  header: string;
  _id: string;
  subheader?: string;
  mainText: any;
  image: any;
}[];

type HomePagePropTypes = {
  sections: SectionsPropTypes[];
};

const Home: FC<HomePagePropTypes> = ({ sections }: HomePagePropTypes) => {
  return (
    <>
      {sections.length > 0 && (
        <ul>
          {sections.map((section: any) => {
            return (
              <li key={section._id}>
                <SectionHeader>{section.header}</SectionHeader>
                {section.subheader && (
                  <Subheader>{section.subheader}</Subheader>
                )}
                {section.mainText && (
                  <Paragraph textObject={section.mainText} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const client = createClient({
  projectId: "y3l9spzf",
  dataset: "production",
  apiVersion: "2023-12-29",
  useCdn: false,
});

export async function getStaticProps() {
  const homePage: HomePagePropTypes =
    await client.fetch(`*[_type == "homePage"][0]{
    sections[]->{header, _id, subheader, mainText}
  }`);
  const sections = homePage.sections;

  return {
    props: {
      sections,
    },
  };
}

export default Home;
