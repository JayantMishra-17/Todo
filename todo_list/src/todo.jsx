function Todo({ text, setText, display, handleClick, deleteTask, inputTask }) {
  return (
    <>
      <div className="w-full h-screen bg-cyan-900 flex justify-center items-center">
        <div className="w-72 h-auto bg-cyan-600 flex flex-col justify-center items-center rounded">
          <div className="w-full h-16 flex justify-center items-center px-2 rounded gap-2">
            <input
              className="px-2 rounded outline-none"
              type="text"
              value={text}
              ref={inputTask}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add Task"
            />
            <button
              className="px-4 bg-cyan-800 rounded text-[#ffffff] font-bold"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
          <div className="max-h-28 overflow-y-auto w-full ">
            <ul className="w-full px-4 text-[#ffffff]">
              {display.map((items, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className="flex justify-between mb-2 font-medium"
                    >
                      <span>{items.text}</span>
                      <button onClick={() => deleteTask(index)}> ❌</button>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
