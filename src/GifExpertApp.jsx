import { useState } from 'react';
import AddCategories from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push(newCategory)
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/*título*/}
            <h1>Hola Gif</h1>

            {/*Input*/}

            <AddCategories
                /*setCategories={setCategories} */
                onNewCategory={(value) => onAddCategory(value)}
            />
            {/*listado de Gif*/}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />

                ))

            }





            {/*Gif Item*/}

        </>
    )
}
