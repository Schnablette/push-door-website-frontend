import { FC } from "react";

import {
  PortableText,
  PortableTextComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

const components: PortableTextComponents = {
  marks: {
    em: ({ children }: PortableTextMarkComponentProps) => (
      <em className="italic">{children}</em>
    ),
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className={"my-2"}>{children}</p>
    ),
  },
};

type Props = {
  textObject: any;
  className?: string;
};

export const Paragraph: FC<Props> = ({ textObject, className }: Props) => {
  return (
    <div className={className}>
      <PortableText value={textObject} components={components} />
    </div>
  );
};
