import React from 'react';
import AddItem from '../items/Add'
import DeleteItem from '../items/Delete'
import './Card.css';



const items = ["Wäsche machen" , "Task2", "Task3"]

const listItems = 
    items.map((item) => 
        <li className='br3 grow shadow-5'>{item} <DeleteItem className='delete'/></li>
    )


const List = () => {
    return (
        <div className='ba bg-light-green list shadow-5 br4'>
            <p className='f3'>List</p>
            <AddItem/>
            <ul className='center'>
                {listItems} 
            </ul>
        </div>
        
      )
}

export default List;