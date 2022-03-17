import List from "./List";

const DetailsPanel = (props) => {
    
  const { candos, todos, setCandos, setTodos, deleteItem, onSwitch } = props;

  return (
    <div className="container">
      <div className="can-do">
        <h3>Candos</h3>
        <div className="box">
          <List
            candos={candos}
            todos={todos}
            setCandos={setCandos}
            setTodos={setTodos}
            deleteItem={deleteItem}
            onSwitch={onSwitch}
            group="candos"
          />
        </div>
      </div>
      <div className="to-do">
        <h3>Todos</h3>
        <div className="box">
          <List
            candos={candos}
            todos={todos}
            setCandos={setCandos}
            setTodos={setTodos}
            deleteItem={deleteItem}
            onSwitch={onSwitch}
            group="todos"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;