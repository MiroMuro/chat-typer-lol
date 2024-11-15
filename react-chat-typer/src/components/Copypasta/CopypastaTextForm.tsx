import { useState } from "react";
import useCopyPasta from "../../hooks/useCopyPasta";
import SubmitCopyPastaButton from "./SubmitCopypastaButton";
import CopyPastaStatus from "./CopyPastaStatus";
const CopyPastaTextForm = () => {
  const [copyPasta, setCopyPasta] = useState<string>("");
  const { submitCopyPasta } = useCopyPasta();
  return (
    <form
      className="formArea"
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
      <CopyPastaStatus />
      <SubmitCopyPastaButton isDisabled={copyPasta.length > 0 ? true : false} />
    </form>
  );
};

export default CopyPastaTextForm;
