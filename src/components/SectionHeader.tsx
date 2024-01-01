import { FC } from "react";
import { TypographyProps } from "../types";

const H2: FC<TypographyProps> = ({ children, className }: TypographyProps) => {
  return <h2 className={className}>{children}</h2>;
};

const H3: FC<TypographyProps> = ({ children, className }: TypographyProps) => {
  return <h3 className={className}>{children}</h3>;
};

export const SectionHeader: FC<TypographyProps> = ({
  children,
  className,
  as,
}: TypographyProps) => {
  const Component: FC<TypographyProps> = as === "h3" ? H3 : H2;

  return (
    <Component className={`font-bold text-lg ${className}`}>{children}</Component>
  );
};
