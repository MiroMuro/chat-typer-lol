const useCopyPasta = () => {
  const submitCopyPasta = (copyPasta: string) => {
    if (copyPasta.length > 0) {
      window.ipcRenderer.sendCopypasta(copyPasta);
      return;
    }
    return;
  };
  return { submitCopyPasta };
};

export default useCopyPasta;
