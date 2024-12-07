import React from "react";

const StatusDisplay = ({ status }) => {
  return (
    <div className={`text-${status === "Completed" ? "green" : "red"}-400`}>
      Status: {status}
    </div>
  );
};

export default StatusDisplay;
