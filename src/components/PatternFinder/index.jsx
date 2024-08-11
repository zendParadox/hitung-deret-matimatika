import React, { useEffect } from "react";

function PatternFinder({ sequence, setPattern, setNextValue }) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  const isOdd = (num) => num % 2 !== 0;
  const isEven = (num) => num % 2 === 0;

  const findNextPrime = (num) => {
    let nextNum = num + 1;
    while (!isPrime(nextNum)) {
      nextNum++;
    }
    return nextNum;
  };

  const isArithmetic = (seq) => {
    const diff = seq[1] - seq[0];
    for (let i = 2; i < seq.length; i++) {
      if (seq[i] - seq[i - 1] !== diff) return false;
    }
    return diff;
  };

  const isGeometric = (seq) => {
    const ratio = seq[1] / seq[0];
    for (let i = 2; i < seq.length; i++) {
      if (seq[i] / seq[i - 1] !== ratio) return false;
    }
    return ratio;
  };

  const isFibonacci = (seq) => {
    for (let i = 2; i < seq.length; i++) {
      if (seq[i] !== seq[i - 1] + seq[i - 2]) return false;
    }
    return true;
  };

  const isTriangleNumber = (num) => {
    let n = 1;
    while ((n * (n + 1)) / 2 < num) {
      n++;
    }
    return (n * (n + 1)) / 2 === num;
  };

  const isSquareNumber = (num) => {
    const root = Math.sqrt(num);
    return root % 1 === 0;
  };

  const isRectangleNumber = (num) => {
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0 && num / i !== i) return true;
    }
    return false;
  };

  const isPascalNumber = (num) => {
    let row = 0;
    while (true) {
      let value = 1;
      for (let i = 0; i <= row; i++) {
        if (i > 0) value = (value * (row - i + 1)) / i;
        if (value === num) return true;
      }
      if (value > num) return false;
      row++;
    }
  };

  useEffect(() => {
    const findPattern = () => {
      if (sequence.length < 2) {
        setPattern("Deret terlalu pendek.");
        return;
      }

      const diff = isArithmetic(sequence);
      if (diff !== false) {
        setPattern("Deret Aritmatika");
        setNextValue(sequence[sequence.length - 1] + diff);
        return;
      }

      const ratio = isGeometric(sequence);
      if (ratio !== false) {
        setPattern("Deret Geometri");
        setNextValue(sequence[sequence.length - 1] * ratio);
        return;
      }

      if (isFibonacci(sequence)) {
        setPattern("Deret Fibonacci");
        setNextValue(
          sequence[sequence.length - 1] + sequence[sequence.length - 2]
        );
        return;
      }

      if (sequence.every((num) => isOdd(num))) {
        setPattern("Deret Bilangan Ganjil");
        setNextValue(sequence[sequence.length - 1] + 2);
        return;
      }

      if (sequence.every((num) => isEven(num))) {
        setPattern("Deret Bilangan Genap");
        setNextValue(sequence[sequence.length - 1] + 2);
        return;
      }

      if (sequence.every((num) => isTriangleNumber(num))) {
        setPattern("Deret Bilangan Segitiga");
        setNextValue(
          sequence[sequence.length - 1] +
            (Math.sqrt(2 * sequence[sequence.length - 1] + 1) - 1) / 2 +
            1
        );
        return;
      }

      if (sequence.every((num) => isSquareNumber(num))) {
        setPattern("Deret Bilangan Persegi");
        setNextValue((Math.sqrt(sequence[sequence.length - 1]) + 1) ** 2);
        return;
      }

      if (sequence.every((num) => isRectangleNumber(num))) {
        setPattern("Deret Bilangan Persegi Panjang");
        setNextValue(sequence[sequence.length - 1] + 1);
        return;
      }

      if (sequence.every((num) => isPascalNumber(num))) {
        setPattern("Deret Bilangan Pascal");
        // Deteksi bilangan Pascal selanjutnya dalam baris yang sama
        let row = 0;
        while (true) {
          let value = 1;
          for (let i = 0; i <= row; i++) {
            if (value === sequence[sequence.length - 1]) {
              setNextValue((value * (row - i + 1)) / (i + 1));
              return;
            }
            value = (value * (row - i)) / (i + 1);
          }
          row++;
        }
      }

      setPattern("Tidak ada pola yang ditemukan.");
      setNextValue(null);
    };

    findPattern();
  }, [sequence, setPattern, setNextValue]);

  return null;
}

export default PatternFinder;
