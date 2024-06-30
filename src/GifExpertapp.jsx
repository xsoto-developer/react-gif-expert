import React, { useState } from 'react'
// import { AddCategory } from './Components/AddCategory';
// import { GifGrid } from './Components/GifGrid';
import { AddCategory, GifGrid } from './Components';
export const GifExpertapp = () => {
    const [categories, setCategories] = useState(['Categoria 1']);
    const onAddCategory = (newCategory) => {
        // Trim the newCategory to remove any leading or trailing whitespace
        const trimmedCategory = newCategory.trim();
    
        // Check if the trimmed category is not empty and not already in the categories array
        if (trimmedCategory && !categories.includes(trimmedCategory)) {
            // Add the new category to the beginning of the categories array
            setCategories([trimmedCategory, ...categories]);
        }
    };
    console.log('**********************************');
    console.log(categories);
    return (
        <>
            <h1>GifExpertapp</h1>
            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory
                //setCategories = {setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {categories.map(category => (
                // <div key={category}>
                //     <h3 > {category}</h3>
                //     <li > {category}</li>
                // </div>
                <GifGrid
                    key={category}
                    category={category}
                />
            )
            )}

        </>
    )
}
