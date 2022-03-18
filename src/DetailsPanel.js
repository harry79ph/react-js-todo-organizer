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
                state={group === 'candos' ? candos : todos}
                stateSetter={group === 'candos' ? setCandos : setTodos}
                deleteItem={deleteItem}
                onSwitch={onSwitch}
              />
            </div>
          </div>);
      })}
    </div>
  );
};

export default DetailsPanel;