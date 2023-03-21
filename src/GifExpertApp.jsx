import { useState } from 'react';
import AddCategories from './components/AddCategories';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Pinocho']);
    const onAddCategory = () => {
        setCategories(['Valorant', ...categories]);
    }




    return (
        <>
            {/*título*/}
            <h1>Hola Gif</h1>
            {/*Input*/}
            <AddCategories />
            {/*listado de Gif*/}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>




            {/*Gif Item*/}

        </>
    )
}
