import React from 'react';

const AddItem = (props) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onUserSubmit(e.target[0].value, e.target[1].value);
        e.target.reset();
    }

    return (
        <div className="add">
            <h1>Todo Organizer</h1>
            <form onSubmit={onFormSubmit} className="adder">
                <div className="title">
                    <input type="text" name="title" maxLength="28" placeholder="Add Title" required/>
                </div>
                <div className="content">
                    <textarea name="content" rows="6" cols="20" placeholder="Add Content" maxLength="300" required></textarea>
                </div>
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddItem;
