import React, { useRef } from 'react';

const AddItem = (props) => {

    const btnRef = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onUserSubmit(e.target[0].value, e.target[1].value);
        e.target.reset();
    }

    const addToLocale = (types) => {// adds condo and todo items to local strorage
        types.forEach(type => {
          function clearAll() {// clears local storage for cando and todo items
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key && key.startsWith(type)) localStorage.removeItem(key);
            }
          }
          clearAll();
          let type_of_state = null;
          type === 'cando' ? type_of_state = props.candos : type_of_state = props.todos;      
          if (type_of_state.length !== 0) {
            type_of_state.forEach((each, index) => {
              const key = type + index;
              const item = [each.title, each.content];
              localStorage[key] = JSON.stringify(item);
            });
            localStorage.setItem(type + '_length', type_of_state.length);
          } else {
            clearAll();
          }
        });
    }


    const handleSave = () => {
        addToLocale(['cando', 'todo']);
        btnRef.current.value = 'Updated..';
        setTimeout(() => {
            btnRef.current.value = 'Save';
        }, 1000);       
    }

    return (
        <div className="add">
            <h1>Todo Organizer</h1>
            <form onSubmit={onFormSubmit} className="adder">
                <div className="title">
                    <input type="text" name="title" maxLength="28" placeholder="Add Title" required />
                </div>
                <div className="content">
                    <textarea name="content" rows="6" cols="20" placeholder="Add Content" maxLength="300" required></textarea>
                </div>
                <div className="btn-wrapper">
                    <input className="btn" type="submit" value="Submit" />
                    <input className="btn" type="button" ref={btnRef} onClick={handleSave} value="Save" />
                </div>
            </form>
        </div>
    );
}

export default AddItem;