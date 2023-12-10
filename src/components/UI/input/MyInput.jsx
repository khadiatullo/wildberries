import { useState } from 'react'
import './MyInput.css'

function MyInput({placeholder}){

    const [value, setValue] = useState('Lets go!')

    return(
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder}/>
    )
}

export default MyInput