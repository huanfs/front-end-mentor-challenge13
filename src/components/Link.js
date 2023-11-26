import style from "./Link.css";
import Arrow from "../images/icon-arrow.svg";
const Link = () => {
    return(
        <a className="link" href="#">see how fylo works<img src={Arrow}></img></a>
    )
}

export default Link;