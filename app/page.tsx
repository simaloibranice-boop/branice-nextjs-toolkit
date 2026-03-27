'use client';

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = async () => {
    try {
      const res = await fetch('/api/hello');
      const data = await res.json();

      setMessage(data.message);
      setShow(true);

      setTimeout(() => setShow(false), 3000);
    } catch (error) {
      setMessage("Something went wrong!");
      setShow(true);

      setTimeout(() => setShow(false), 3000);
    }
  };

  return (
    <div className="p-8 flex flex-col items-start gap-4">
      <h1 className="text-3xl font-bold">Hello, Next.js World!</h1>
      <p>Welcome to the minimal Next.js starter app.</p>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Test API
      </button>

      {/* Message Box */}
      {show && (
        <div
          className={`mt-4 px-4 py-2 rounded shadow ${
            message.includes("wrong")
              ? "bg-red-100 text-red-800 border border-red-300"
              : "bg-green-100 text-green-800 border border-green-300"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}