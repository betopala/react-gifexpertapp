
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//let i = 0

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch' ]);
    // console.log(categories, setCategories);
    // const series = [ 'Mortal Combat', 'Terminator', 'Matrix'];
    // series.push('Mortal');
    // console.log(series);
    
    // const handleAdd = (e) => {
        // categories.push('hunter');
        // setCategories( 'hunter' );
        // console.log(categories);
        
        //setCategories( (c) => ['hunter', ...c] );
        
        // if ( i < series.length) {setCategories([...categories, series[i]])};
        // i++;
        
        //return 1
        //return ()=> console.log('Hola Mundo'); //en la llamada de la funcion con '()' debo retornar otra funcion con return 

    //}
        //  console.log(setCategories);

    return (
        <>    
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {/* <button onClick = { function(e)  {console.log(+1)} }>Agregar</button> */}
            {/* arriba realizo la funcion en la misma linea */}
            {/* <button onClick = { (e) => {handleAdd(e)} }>Agregar</button> */} 
            {/* arriba paso un argumento en particular '(e)' a handler*/}
            {/* <button onClick={ handleAdd() }>Agregar</button> */}
            {/* arriba cuando llamo con '()' debe retornar otra funcion */}
            {/* <button onClick={ handleAdd }>Agregar</button>  */}
            {/* arriba hago referencia de la funcion ('sin ()') para que se dispre cuando se haga click */}
            
            <ol>
                {
                    categories.map( category =>(  
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                        // <li key={ category }> { category } </li>
                    ))
                }
            </ol>

        </>
    );
};


export default GifExpertApp;

// snipet para crear un funcional component rafc