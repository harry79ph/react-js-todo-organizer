import React, { useEffect, useState } from "react";
import DetailsPanel from "./DetailsPanel";
import AddItem from "./AddItem";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  
  const [candos, setCandos] = useState([]);
  const [todos, setTodos] = useState([]);
  const { retrieveFromLocal } = useLocalStorage();

  useEffect(() => {
    retrieveFromLocal(["cando", "todo"], setCandos, setTodos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewItem = (className, titleValue, contentValue, isActive) => {
    setCandos(prev => [
      ...prev,
      { className, title: titleValue, content: contentValue, isActive }
    ]);
  };

  const deleteItem = ({ className, title }) => {
    let stateSetter = null;
    className === "cando" ? (stateSetter = setCandos) : (stateSetter = setTodos);
    stateSetter(prev => prev.filter((item) => item.title !== title));
  };

  const switchItems = (item) => {
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
