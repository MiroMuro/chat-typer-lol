const useCopyPasta = () => {
  const submitCopyPasta = (copyPasta: string) => {
    console.log("submitCopyPasta");
    console.log("submitCopyPasta");
    if (copyPasta.length > 0) {
      window.ipcRenderer.sendCopyPasta(copyPasta);
      return;
    }
    return;
  };
  return { submitCopyPasta };
};

export default useCopyPasta;
