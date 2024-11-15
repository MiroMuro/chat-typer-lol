import { useState } from "react";
import useCopyPasta from "../../hooks/useCopyPasta";
import SubmitCopyPastaButton from "./SubmitCopypastaButton";
const CopyPastaTextForm = () => {
  const [copyPasta, setCopyPasta] = useState<string>("");
  const { submitCopyPasta } = useCopyPasta();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitCopyPasta(copyPasta);
      }}
    >
      <textarea
        className="text-area"
        value={copyPasta}
        placeholder="Type a message"
        onChange={(e) => {
          setCopyPasta(e.target.value);
        }}
      />
      <SubmitCopyPastaButton />
    </form>
  );
};

export default CopyPastaTextForm;
