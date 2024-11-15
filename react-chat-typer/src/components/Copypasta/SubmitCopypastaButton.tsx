const SubmitMessageButton = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <button type="submit" className="submitButton" disabled={!isDisabled}>
      Submit message
    </button>
  );
};
export default SubmitMessageButton;
