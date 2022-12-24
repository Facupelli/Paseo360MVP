import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Nav({ children }: Props) {
  const router = useRouter();

  return (
    <nav className="fixed z-20 flex h-20 w-full border-b border-gray-600 bg-gray-900 px-4 py-6 align-baseline">
      <p
        onClick={() => router.push("/")}
        className="cursor-pointer text-lg font-bold"
      >
        PASEO.360
      </p>

      {children}

      <div className="ml-auto">
        <button type="button" className="text-sm">
          ENTRAR
        </button>
      </div>
    </nav>
  );
}
