import React from "react";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
