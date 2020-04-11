import React from "react";

const DupeEntry = ({ date, word }) => {
  return <>
    <hr></hr>
    <div>
      <p>
        <strong>{new Date(date).toLocaleTimeString()} >> </strong>
        Got another weird text. It said <strong>{word.toUpperCase()}</strong> again. I don't want to use a duplicate.</p>
    </div>
  </>
}

export default DupeEntry;