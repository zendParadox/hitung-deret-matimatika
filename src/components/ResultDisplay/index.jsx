import React from "react";

function ResultDisplay({ sequence, pattern, nextValue }) {
  return (
    <div>
      <h3>Deret yang Dimasukkan: {sequence.join(", ")}</h3>
      <h3>Pola Ditemukan: {pattern}</h3>
      {nextValue !== null && (
        <p className="font-semibold">Nilai Berikutnya: {nextValue}</p>
      )}
    </div>
  );
}

export default ResultDisplay;
