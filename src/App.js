import React, { useState } from 'react';
import DetailsPanel from "./DetailsPanel";
import AddItem from "./AddItem";


const App = () => {

  const [candos, setCandos] = useState([]);
  const [todos, setTodos] = useState([]);
  const setNewItem = (titleValue, contentValue) => {// creates a new item
    setCandos(prev => [...prev, { 'title': titleValue, 'content': contentValue }]);
  }
  const deleteItem = (id, type) => {// deletes item
    let stateSetter = null;
    type === 'cando' ? stateSetter = setCandos : stateSetter = setTodos;
    stateSetter(prev => prev.filter((arg, i) => i !== parseInt(id)));
  }
  const switchItems = (id, type) => {// swithes items between candos and todos
    if (type.includes('fa-arrow-right')) {
      setTodos(prev => [...prev, { 'title': candos[id].title, 'content': candos[id].content }]);
      deleteItem(id, 'cando');
    } else if (type.includes('fa-arrow-left')) {
      const { title, content } = todos[id];
      setNewItem(title, content);
      deleteItem(id, 'todo');
    }
  }

  return (
    <div className="wrapper">
      <AddItem
        onUserSubmit={setNewItem}
      />
      <DetailsPanel
        candos={candos}
        todos={todos}
        deleteItem={deleteItem}
        onSwitch={switchItems}
      />
    </div>
  );
}

export default App;