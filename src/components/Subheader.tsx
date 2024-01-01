import { TypographyProps } from "../types";

export const Subheader = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-xs text-gray-700 uppercase font-medium ${className}`}>
      {children}
    </p>
  );
};
