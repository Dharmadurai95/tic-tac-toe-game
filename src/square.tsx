import { useState } from "react"


const Square = ({ handleClick, value }: { handleClick: () => void, value: string }) => {

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

function calculateWinner(square: Array<string>): string {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8]
  ];
  for (const value of lines) {
    const [a, b, c] = value;
    if (square[a] && square[a] === square[b] && square[a] === square[c]) return square[a];
  }
  return '';
}

export default function Board() {
  const [value, setValue] = useState<Array<string>>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  function handleClick(index: number) {
    const copydata = value.slice()
    if (copydata[index]) return;
    copydata[index] = xIsNext ? "X" : "O";
    setValue(copydata)
    setXIsNext(!xIsNext)
  }
  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return <>
    <h1>{status}</h1>
    <div className="board-row">
      <Square handleClick={() => handleClick(0)} value={value[0]} />
      <Square handleClick={() => handleClick(1)} value={value[1]} />
      <Square handleClick={() => handleClick(2)} value={value[2]} />
    </div >
    <div className="board-row">
      <Square handleClick={() => handleClick(3)} value={value[3]} />
      <Square handleClick={() => handleClick(4)} value={value[4]} />
      <Square handleClick={() => handleClick(5)} value={value[5]} />
    </div >
    <div className="board-row">
      <Square handleClick={() => handleClick(6)} value={value[6]} />
      <Square handleClick={() => handleClick(7)} value={value[7]} />
      <Square handleClick={() => handleClick(8)} value={value[8]} />
    </div >

  </>
}