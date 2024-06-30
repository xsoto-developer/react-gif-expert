import React, { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/GetGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => { 
       
    const { images, isLoading } = useFetchGifs(category);
    console.log({ images, isLoading })
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando ........</h2>
            }

            {/* <p>Hola mundo</p>
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}

            <div className='card-grid'>
                {/* sin desestructurar */}
                {/* {images.map(img => (
                    <li key={img.id}>{img.title}</li>
                ))} */}
                {/* los mismo pero desestructurado */}
                {/* {images.map(({id, title}) => (
                    <li key={id}>{title}</li>
                ))} */}
                {/* lo mismo pero con  otro  componete */}

                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}
