import './MyInput.css'

function MyInput({placeholder, value, setValue, keyDown}){

    return(
        <div className='my_input'>
            <input onKeyDown={keyDown} onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder={placeholder}/>
        </div>
    )
}

export default MyInput