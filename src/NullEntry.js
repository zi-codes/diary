import React from "react";

const clues = [
  "elementary",
  "quirky",
  "strange",
  "particular",
  "charming",
  "topical",
  "downsized",
]

const NullEntry = ({ date, word }) => {
  return <>
    <hr></hr>
    <div>
      <p>
        <strong>{new Date(date).toLocaleTimeString()} >> </strong>
        Got another weird text. It said <strong>{word.toUpperCase()}</strong>. It doesn't fit the theme. I need something more ... <strong>{clues[date % clues.length]}</strong>.</p>
    </div>
  </>
}

export default NullEntry;