import React, { useEffect, useState } from "react";
import DetailsPanel from "./DetailsPanel";
import AddItem from "./AddItem";

const App = () => {
  
  const [candos, setCandos] = useState([]);
  const [todos, setTodos] = useState([]);

  const setNewItem = (className, titleValue, contentValue, isActive) => {
    // creates a new item
    setCandos(prev => [
      ...prev,
      { className, title: titleValue, content: contentValue, isActive }
    ]);
  };

  const deleteItem = ({ className, title }) => {
    // deletes item
    let stateSetter = null;
    className === "cando" ? (stateSetter = setCandos) : (stateSetter = setTodos);
    stateSetter(prev => prev.filter((item) => item.title !== title));
  };

  const switchItems = (item) => {
    // switches items between candos and todos
    if (item.className === 'cando') {
      setTodos(prev => [
        ...prev,
        { className: 'todo', title: item.title, content: item.content, isActive: false }
      ]);
      deleteItem(item);
    } else {
      setNewItem('cando', item.title, item.content, false);
      deleteItem(item);
    }
  };

  const retrieveItems = types => {
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
        stateSetter((prev) => [...prev, { className: type, title: title, content: content, isActive: false }]);
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
        setCandos={setCandos}
        setTodos={setTodos}
        deleteItem={deleteItem}
        onSwitch={switchItems}
      />
    </div>
  );
};

export default App;
