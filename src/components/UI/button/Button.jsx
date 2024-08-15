import "./button.css";

function Button(props) {
  return (
    <div className="conteiner_btn">
      <button typeof={props.type} style={props.styles} onClick={props.click} className="btn" type="button">{props.children}</button>
    </div>
  );
}

export default Button;
