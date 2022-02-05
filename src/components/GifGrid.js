import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);


    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {

        const apiKey = 'PlJKw63cBLxFKbKPjpZ2PGigpPfa0rcx';

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=PlJKw63cBLxFKbKPjpZ2PGigpPfa0rcx';
        const response = await fetch(url);
        const { data } = await response.json();


        //console.log(data[0]);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //console.log(gifs);
        setImages(gifs);

    }

    //getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

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
