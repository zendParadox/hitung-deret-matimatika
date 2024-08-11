import React, { useState } from "react";

function SequenceInput({ onSubmit }) {
  const [sequence, setSequence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numbers = sequence.split(",").map(Number);
    onSubmit(numbers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-2">
        <input
          type="text"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Masukkan deret angka, pisahkan dengan koma"
          className="w-full max-w-screen-sm border rounded-full ps-3 h-10"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="ms-4 px-8 py-2 bg-blue-400 rounded-full font-semibold text-slate-100 mt-3">
            Hitung
          </button>
        </div>
      </div>
    </form>
  );
}

export default SequenceInput;
