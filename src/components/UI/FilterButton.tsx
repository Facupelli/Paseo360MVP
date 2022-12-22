type Props = {
  handleClick: () => void;
  text: string;
  color: string;
};

export default function FilterButton({ handleClick, text, color }: Props) {
  let className = "";
  if (color === "gray") {
    className = "bg-gray-800 text-white rounded-md border border-gray-500 p-2";
  }
  if (color === "white") {
    className = "bg-purple-800 text-white font-semibold py-2 px-4";
  }

  return (
    <button onClick={handleClick} type="button" className={`   ${className}`}>
      {text}
    </button>
  );
}
