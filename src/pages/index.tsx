import { FC } from "react";

import { createClient } from "next-sanity";

type Section = {
  _id: string,
  header: string;
  subheader: string;
  mainText: any;
  image: string;
};

type PropTypes = {
  sections: Section[];
};

const Home: FC<PropTypes> = ({ sections }: PropTypes) => {
  return (
    <>
      {sections.length > 0 && (
        <ul>
          {sections.map((section) => (
            <li key={section._id}>{section?.header}</li>
          ))}
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
  const sections: any[] = await client.fetch(`*`);

  return {
    props: {
      sections,
    },
  };
}

export default Home;
