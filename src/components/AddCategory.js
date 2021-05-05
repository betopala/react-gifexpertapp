import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    //console.log(typeof(setCategories));
    // console.log(AddCategory);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log(e.target.value);
        // console.log(inputValue);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        // console.log(inputValue);
        if ( inputValue.trim().length > 2 ) {
            setCategories( (c) => [ inputValue , ...c ] ); 
            setInputValue('');
        };

    }
    return (
        <form onSubmit={ handleSubmit }>
            {/* <h1>{inputValue}</h1> */}
            {/* <h2>Add Category</h2> */}

            <input
                type="text"
                value={ inputValue}
                onChange={ handleInputChange }
            />



        </form>
    )


};

AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired,
}