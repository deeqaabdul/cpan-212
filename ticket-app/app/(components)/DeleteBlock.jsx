import React from "react";

const DeleteBlock = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
    >
      Delete Ticket
    </button>
  );
};

export default DeleteBlock;
