import ActionButton from "./ActionButton";
import style from "./Form.css";
const Form = () => {
    return(
        <div className="formAction">
            <h1>Get early access today</h1>
            <p>
            lorem ipsum dollor sit a met
            lorem ipsum dollor sit a met
            lorem ipsum dollor sit a met
            lorem ipsum dollor sit a met
            lorem ipsum dollor sit a met
            lorem ipsum dollor sit a met
            </p>
            <form>
                <input type="text" placeholder="example@gmail.com"></input>
                <ActionButton value="get started for free" />
            </form>
        </div>
    )
}

export default Form;