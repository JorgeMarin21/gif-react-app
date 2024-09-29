import { useState } from "react";

// export const AddCategory = ({categories, setCategories}) => { //setCategories has already categories using arrow functions
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        // setCategories([inputValue,...categories]);
        // setCategories((cats) => [inputValue, ...cats]);
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    return (
        <form onSubmit= {onSubmit}>
            <input
                type="text"
                placeholder="Look for GIF"
                value = {inputValue}
                // onChange={ (event) => {onInputChange(event)}}
                onChange={ onInputChange }
                
            />
        </form>
    );
}
