import { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="bg-gray-700 fixed bottom-0 w-full py-10">
      <form onSubmit={handleSubmit} className="containerWrapper px-2 flex">
        <input
          type="text"
          className="input w-full focus:outline-none bg-gray-500 rounded-r-none"
          value={value}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-auto btn-primary text-white rounded-r-lg px-5 text-sm transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
