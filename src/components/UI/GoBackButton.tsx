import { useRouter } from "next/router";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleGoBack}>
      {"<-"}
    </button>
  );
}
