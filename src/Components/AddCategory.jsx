// import React from 'react'

import { useState } from 'react'

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        console.log(target.value)
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        // console.log(inputValue)
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add Category"
                value={inputValue}
                // onChange={(e) => setinputValue(e.target.value)}
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>




    )
}
