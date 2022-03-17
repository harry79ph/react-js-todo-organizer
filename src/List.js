
const List = ({ candos, todos, setCandos, setTodos, deleteItem, onSwitch, group }) => {

    const handleClick = (item) => {
        if (item.className === 'cando') {
            setCandos((prev) => {
                return prev.map((cando) => cando.title === item.title ? cando.isActive === true ? 
                {...cando, isActive: false} : {...cando, isActive: true} : cando);
            });
        } else {
            setTodos((prev) => {
                return prev.map((todo) => todo.title === item.title ? todo.isActive === true ? 
                {...todo, isActive: false} : {...todo, isActive: true} : todo);
            });
        }
    }

    let [firstClass, secondClass, items] = [];
    if (group === 'candos') {
        [firstClass, secondClass, items] = ['item cando', 'fas fa-arrow-right', candos];
    } else if (group === 'todos') {
        [firstClass, secondClass, items] = ['item todo', 'fas fa-arrow-left', todos];
    }

    return items.map((item, key) => {
        return (
            <div className={firstClass} key={item.className + key}>
                <p className="bold">{item.title}</p>
                <div className="buttons">
                    <button onClick={() => onSwitch(item)}><i className={secondClass}><span className="tooltip">Move item</span></i></button>
                    <button onClick={() => handleClick(item)}><i className="fas fa-chevron-down"><span className="tooltip down">Expand item</span></i></button>
                    <button className="delete" onClick={() => deleteItem(item)}><i className="far fa-trash-alt"><span className="tooltip trash">Delete item</span></i></button>
                </div>
                <div id="explain" className={(item.isActive ? "active" : "")}>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    });
}
 
export default List;