import React from 'react';

const DetailsPanel = (props) => {

    const { candos, todos, deleteItem, onSwitch } = props;

    const handleClick = (e) => {
        const item = e.target.parentNode.parentNode.parentNode;
        const id = item.id;
        const toggleContent = () => {
            const items = item.parentNode.childNodes;
            items.forEach((each, i) => {
                if (i === parseInt(id)) {
                    if (each.children[2].className !== 'explain active') {
                        each.children[2].className = 'explain active';
                    } else {
                        each.children[2].className = 'explain';
                    }
                } else {
                    each.children[2].className = 'explain';
                }
            });
        }
        if (e.target.className === 'fas fa-arrow-left' || e.target.className === 'fas fa-arrow-right') {
            if (item.children[2].className === 'explain active') {
                item.children[2].className = 'explain';
            }
            onSwitch(item.id, e.target.className);
        } else if (e.target.className === 'fas fa-chevron-down') {
            toggleContent(e);
        } else if (e.target.className === 'far fa-trash-alt') {
            const bool = item.className.includes('cando');
            bool ? deleteItem(id, 'cando') : deleteItem(id, 'todo');
        }
    }

    const lister = (group) => {
        let [firstClass, secondClass, items] = [];
        if (group === 'candos') {
            [firstClass, secondClass, items] = ['item cando', 'fas fa-arrow-right', candos];
        } else if (group === 'todos') {
            [firstClass, secondClass, items] = ['item todo', 'fas fa-arrow-left', todos];
        }
        return items.map((item, key) => {
            return (
                <div id={key} className={firstClass} key={key}>
                    <p className="bold">{item.title}</p>
                    <div onClick={handleClick} className="buttons">
                        <button><i className={secondClass}><span className="tooltip">Move item</span></i></button>
                        <button><i className="fas fa-chevron-down"><span className="tooltip down">Expand item</span></i></button>
                        <button className="delete"><i className="far fa-trash-alt"><span className="tooltip trash">Delete item</span></i></button>
                    </div>
                    <div className="explain">
                        <p>{item.content}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="container">
            <div className="can-do">
                <h3>Candos</h3>
                <div className="box">
                    {lister('candos')}
                </div>
            </div>
            <div className="to-do">
                <h3>Todos</h3>
                <div className="box">
                    {lister('todos')}
                </div>
            </div>
        </div>
    );

}

export default DetailsPanel;