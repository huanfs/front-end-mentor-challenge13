import style from "./Action.css";
const ActionButton = (props) => {
    return(
        <button className="action" type="button">{props.value}</button>
    )
}

export default ActionButton;