import React from 'react';
import { useParams } from 'react-router-dom';

const ChildTodo = () => {
    const {index} = useParams();
    return(
        <div className='listContainer container'>
            <h1>
            Child Todo{index}
            </h1>
        </div>
    );

}

export default ChildTodo;