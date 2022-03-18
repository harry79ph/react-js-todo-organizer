
const List = ({ state, stateSetter, deleteItem, onSwitch }) => {

    const handleClick = (item) => {
        stateSetter((prevs) => {
            return prevs.map((prev) => prev.title === item.title ? prev.isActive === true ? 
            {...prev, isActive: false} : {...prev, isActive: true} : prev);
        });
    }

    return state.map((item, key) => {
        return (
            <div className={'item '+ item.className} key={item.className + key}>
                <p className="bold">{item.title}</p>
                <div className="buttons">
                    <button onClick={() => onSwitch(item)}><i className={item.className.includes('cando') ? 'fas fa-arrow-right' : 'fas fa-arrow-left'}><span className="tooltip">Move item</span></i></button>
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