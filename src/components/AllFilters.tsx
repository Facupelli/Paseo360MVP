import { Dispatch, SetStateAction } from "react";

import XMark from "../Icons/XMark";

type Props = {
  setShowAllFilters: Dispatch<SetStateAction<boolean>>;
};

export default function AllFilters({ setShowAllFilters }: Props) {
  return (
    <aside className="absolute top-0 right-0 z-30 h-screen bg-gray-100 p-2">
      <button type="button" onClick={() => setShowAllFilters(false)}>
        <XMark black size={22} />
      </button>
      <form></form>
    </aside>
  );
}
