import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory); // set the value, but not render the DOM

        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ onAddCategory }
                // setCategories={ setCategories }
            />
            {/* Listado de GIF */}
                {
                    categories.map( ( category ) => (
                        <GifGrid key={category} category= {category}/>
                    ))
                }

            {/* Gif Item */}

        </>
    )
}