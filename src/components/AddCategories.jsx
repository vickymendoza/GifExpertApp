import { useState } from 'react'
export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One Punch')
    const oninputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }



    return (

        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />

    )
}

export default AddCategories