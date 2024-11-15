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
      <header style={{ display: "inline" }}>Copypasta staus: </header>
      {copyPastaStatus ? (
        <p style={{ display: "flex", margin: "0" }}>
          Copypasta set successfully
        </p>
      ) : (
        <p style={{ display: "flex", margin: "0" }}>No copypasta defined</p>
      )}
    </div>
  );
};
export default CopyPastaStatus;
