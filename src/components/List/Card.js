import React from 'react';
import AddItem from '../items/Add';
import './Card.css';
import AddList from './AddList';
import ListItem from './ListItem';



const List = () => {
    return (
        
        <div className='ba bg-light-green list shadow-5 br4'>
            <div className='cardHeader'>
                <p >List</p>
                <AddList className='newList'/>
            </div>
            <AddItem/>
            <ul className='center'>
                <ListItem/>
            </ul>
        </div>
        
      )
}

export default List;