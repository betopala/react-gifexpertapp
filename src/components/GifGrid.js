// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         // .then( imgs => setImages( imgs ) )
    //         .then( setImages );
    // }, [ category ] )

 

    // getGifs();
    return (
        // <>
        // <h3> { category } </h3>
        // { loading ? 'Cargando...' : 'Data cargada' }
        // </>
        
        <>
        {loading ? <p className= "card animate__animated animate__flash">Loading</p> : <h3 className= "card animate__animated animate__fadeInDown animate__delay-1s" > { category } </h3>}
        {/* <h3 className= "card animate__animated animate__fadeIn" > { category } </h3> */}
        {loading && <p className= "card animate__animated animate__flash">Loading</p>  }
        <div className="card-grid ">

                { 
                    images.map ( (img) => (

                        <GifGridItem 
                            key={img.id }
                            { ...img } 
                        />

                        // <li key={id}>{title}</li>
                    ))
                } 

            {/* <h3> { count } </h3>
            <button onClick={ () => setCount(count + 1) } > </button> */}
            
        </div>
        
        </>
    )
}
