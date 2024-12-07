const TicketForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-8">
      <h1 className="text-2xl text-white mb-6">Create Your Ticket</h1>
      <form className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 rounded bg-gray-600 text-white"
            placeholder="Enter ticket title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 rounded bg-gray-600 text-white"
            rows="3"
            placeholder="Enter ticket description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 rounded bg-gray-600 text-white"
          >
            <option value="hardware">Hardware Problem</option>
            <option value="software">Software Issue</option>
            <option value="network">Network Issue</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className="w-full p-2 rounded bg-gray-600 text-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="progress">
            Progress
          </label>
          <input
            type="range"
            id="progress"
            min="0"
            max="100"
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            className="w-full p-2 rounded bg-gray-600 text-white"
            placeholder="Not Started"
            readOnly
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
