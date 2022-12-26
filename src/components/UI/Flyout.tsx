import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  top?: number;
  left?: number;
};

export default function Flyout({ children, top, left }: Props) {
  const styles = {
    top: top ? top + 10 : 0,
    left,
  };

  return (
    <div
      className="fixed z-10 rounded-sm bg-white py-4 px-6 shadow-md"
      style={styles}
    >
      {children}
    </div>
  );
}
