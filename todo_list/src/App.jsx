import { useState, useEffect, useRef } from "react";
import Todo from "./todo";

function App() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);
  const inputTask = useRef(null);

  useEffect(() => {
    inputTask.current.focus();
  });

  function handleClick() {
    if (text.trim() === "") return;
    setDisplay([...display, { text }]);
    setText("");
  }
  function deleteTask(index) {
    setDisplay(display.filter((_, i) => i !== index));
  }

  return (
    <>
      <Todo
        text={text}
        setText={setText}
        display={display}
        handleClick={handleClick}
        deleteTask={deleteTask}
        inputTask={inputTask}
      />
    </>
  );
}
export default App;
