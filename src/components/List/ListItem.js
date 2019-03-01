import React from 'react';

const items = ["Wäsche machen" , "Task2", "Task3", "Test", "JavaScript lernen"]

const listItems = () => {
    return (
        items.map((item) =>  
        <li className='br3 grow shadow-5 list-item'>{item}</li>
        )             
    );
}

export default listItems;