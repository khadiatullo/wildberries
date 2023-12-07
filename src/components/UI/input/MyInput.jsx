import './MyInput.css'

function MyInput(props){
    return(
        <input type="text" placeholder={props.placeholder}/>
    )
}

export default MyInput