import List from "./List";

const DetailsPanel = (props) => {

  const { candos, todos, setCandos, setTodos, deleteItem, onSwitch } = props;
  const groups = ["candos", "todos"];

  return (
    <div className="container">
      {groups.map((group, i) => {
        return (
          <div key={'container' + i}>
            <h3>{group}</h3>
            <div className="box">
              <List
                candos={candos}
                todos={todos}
                setCandos={setCandos}
                setTodos={setTodos}
                deleteItem={deleteItem}
                onSwitch={onSwitch}
                group={group}
              />
            </div>
          </div>);
      })}
    </div>
  );
};

export default DetailsPanel;