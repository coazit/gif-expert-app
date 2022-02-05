import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(['One Punch']);

    return <div>
        <h2>Gif APP</h2>
        < AddCategory setCategories = {setCategories} />
        <hr></hr>
        <ol>
            {
                categories.map( category => 
                    <GifGrid 
                        key = {category}
                        category={category} 
                    />
                )
            }
        </ol>

    </div>;
};


export default GifExpertApp;