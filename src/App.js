import React, { useState } from "react";
import SequenceInput from "./components/SequenceInput";
import PatternFinder from "./components/PatternFinder";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [sequence, setSequence] = useState([]);
  const [pattern, setPattern] = useState("");
  const [nextValue, setNextValue] = useState(null);

  const handleSequenceSubmit = (numbers) => {
    setSequence(numbers);
  };

  return (
    <div className="container w-full h-full">
      <div className="h-screen flex items-center justify-center">
        <div className="border shadow-xl w-full rounded-2xl py-14 mx-3 md:max-w-xl">
          <h1 className="text-center text-xl tracking-wider font-semibold mb-3 md:mb-10">
            Kalkulator Deret Angka
          </h1>
          <SequenceInput onSubmit={handleSequenceSubmit} />
          {sequence.length > 0 && (
            <div className="mx-3 mt-5">
              <PatternFinder
                sequence={sequence}
                setPattern={setPattern}
                setNextValue={setNextValue}
              />
              <ResultDisplay
                sequence={sequence}
                pattern={pattern}
                nextValue={nextValue}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
