import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);
    //console.log(data);
    //console.log(loading);


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <div className='card-grid'>
                {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    );
};

export default GifGrid;
