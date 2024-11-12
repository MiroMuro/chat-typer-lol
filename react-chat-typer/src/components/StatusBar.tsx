interface StatusBarProps {
  status: string;
}

const StatusBar = ({ status }: StatusBarProps) => {
  return (
    <span className="statusBar">
      {!status && <p>No status yet</p>} : {status}
    </span>
  );
};

export default StatusBar;
