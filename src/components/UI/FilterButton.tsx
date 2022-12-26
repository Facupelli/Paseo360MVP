import AdjustmentIcon from "../../Icons/Adjustment";
import XMark from "../../Icons/XMark";

type Props = {
  handleClick: () => void;
  text: string;
  color: string;
  icon?: boolean;
  reset?: boolean;
  handleReset?: () => void;
};

export default function FilterButton({
  handleClick,
  text,
  color,
  icon,
  reset,
  handleReset,
}: Props) {
  let className = "";
  if (color === "gray") {
    className =
      "bg-gray-800 text-white rounded-md border border-gray-500 p-2 hover:border-purple-900";
  }
  if (color === "white") {
    className = "bg-purple-800 text-white font-semibold py-2 px-4";
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`flex items-center gap-2  ${className}`}
    >
      {icon && <AdjustmentIcon />}
      {text}
      {reset && (
        <div
          onClick={handleReset}
          className="rounded-full p-px hover:bg-purple-800"
        >
          <XMark />
        </div>
      )}
    </button>
  );
}
