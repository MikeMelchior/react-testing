import React, { useState } from "react";

const App = () => {
  const [header, setHeader] = useState('Tropical Tigers')

  const clickHandler = () => {
    setHeader('Wonderful Wombats')
  }

  return (
    <>
      <button
        type="button"
        onClick={clickHandler}
      >Click me!
      </button>
      <h1>{header}</h1>
    </>
  )
}

export default App;
