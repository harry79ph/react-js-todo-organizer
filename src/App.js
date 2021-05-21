import React, { useEffect, useState } from "react";
import DetailsPanel from "./DetailsPanel";
import AddItem from "./AddItem";

const App = () => {
  
  const [candos, setCandos] = useState([]);
  const [todos, setTodos] = useState([]);

  const setNewItem = (titleValue, contentValue) => {
    // creates a new item
    setCandos((prev) => [
      ...prev,
      { title: titleValue, content: contentValue },
    ]);
  };
  const deleteItem = (id, type) => {
    // deletes item
    let stateSetter = null;
    type === "cando" ? (stateSetter = setCandos) : (stateSetter = setTodos);
    stateSetter((prev) => prev.filter((arg, i) => i !== parseInt(id)));
  };
  const switchItems = (id, type) => {
    // swithes items between candos and todos
    if (type.includes("fa-arrow-right")) {
      setTodos((prev) => [
        ...prev,
        { title: candos[id].title, content: candos[id].content },
      ]);
      deleteItem(id, "cando");
    } else if (type.includes("fa-arrow-left")) {
      const { title, content } = todos[id];
      setNewItem(title, content);
      deleteItem(id, "todo");
    }
  };

  const retrieveItems = (types) => {
    // retrieves cando and todo items from local storage
    types.forEach((type) => {
      let stateSetter = null;
      type === "cando" ? (stateSetter = setCandos) : (stateSetter = setTodos);
      const loc_string = localStorage.getItem(type + "_length");
      const loc_number = parseInt(loc_string);
      for (let i = 0; i < loc_number; i++) {
        const json = localStorage.getItem(type + i);
        const arr = JSON.parse(json);
        const [title, content] = [arr[0], arr[1]];
        console.log(title, content);
        stateSetter((prev) => [...prev, { title: title, content: content }]);
      }
    });
  };

  useEffect(() => {
    retrieveItems(["cando", "todo"]);
  }, []);

  return (
    <div className="wrapper">
      <AddItem candos={candos} todos={todos} onUserSubmit={setNewItem} />
      <DetailsPanel
        candos={candos}
        todos={todos}
        deleteItem={deleteItem}
        onSwitch={switchItems}
      />
    </div>
  );
};

export default App;
