import React, { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/GetGifs';

export const useFetchGifs = (category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async (category) => {
        console.log('*//////////////////////////////////////*******')
        console.log(category)
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
    }, [])
    return {
        images: images,
        isLoading: isLoading
    }
}
