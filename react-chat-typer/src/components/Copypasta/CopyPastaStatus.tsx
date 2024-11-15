import { useEffect, useState } from "react";

const CopyPastaStatus = () => {
  const [copyPastaStatus, setCopyPastaStatus] = useState<boolean>(false);

  useEffect(() => {
    window.ipcRenderer.receiveCopyPasta(
      "copy-pasta",
      ({ status }: { status: boolean }) => {
        setCopyPastaStatus(status);
      }
    );
  }, []);

  return (
    <div className="copyPastaStatusBar">
      <header style={{ display: "inline", padding: "5px" }}>
        Copypasta status:{" "}
      </header>
      {copyPastaStatus ? (
        <p style={{ display: "flex", margin: "0", flex: 1 }}>
          Copypasta set successfully
        </p>
      ) : (
        <p style={{ display: "flex", margin: "0", flex: 1 }}>
          No copypasta defined
        </p>
      )}
    </div>
  );
};
export default CopyPastaStatus;
