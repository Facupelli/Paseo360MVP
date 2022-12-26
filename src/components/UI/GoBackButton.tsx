import { useRouter } from "next/router";
import ArrowLeft from "../../Icons/ArrowLeft";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleGoBack}>
      <ArrowLeft size={30} />
    </button>
  );
}
