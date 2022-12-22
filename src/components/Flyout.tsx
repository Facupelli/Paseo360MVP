import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  top?: number;
  left?: number;
};

export default function Flyout({ children, top, left }: Props) {
  return (
    <div
      className="fixed bg-white p-4 shadow-md"
      style={{ top: top ? top + 10 : 0, left }}
    >
      {children}
    </div>
  );
}
