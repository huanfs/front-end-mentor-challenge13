
import './App.css';
//images
import Logo from "./images/logo.svg";
import Banner from "./images/illustration-intro.png";
import Gadget from "./images/icon-access-anywhere.svg";
import Security from "./images/icon-security.svg";
import Collaboration from "./images/icon-collaboration.svg";
import Archieve from "./images/icon-any-file.svg";
import Productive from "./images/illustration-stay-productive.png";
import Person1 from "./images/profile-1.jpg";
import Person2 from "./images/profile-2.jpg";
import Person3 from "./images/profile-3.jpg";
import IconLocation from "./images/icon-location.svg";
import IconPhone from "./images/icon-phone.svg";

//components
import Navigation from "./components/Navigation";//nav tag with ul and link
import ActionButton from "./components/ActionButton";//button containing action
import Link from "./components/Link";
import Form from "./components/form";
function App() {
  return (
    <>
    <header>
    <img src={Logo}></img>
    <Navigation/>
    </header>
    {/*intruction section*/}
    <section className="presentation">
      <img src={Banner}></img>
      <h1>
        All your files in one secure location, accessible anywere.
      </h1>
      <p>
        Fyllo stores all you most important files 
        in one secure location. Access then wherever you need 
        share and collaborate with friends, family or co-workers
      </p>
    <ActionButton value="get started"/>
    </section>
    {/*end of intrduction section*/}
    {/*cards*/}
    <section className="cardsContainer">
      <article className="card">
        <img src={Gadget}></img>
        <h3>Access your files aniwere</h3>
        <p>
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        </p>
      </article>
      <article className="card">
      <img src={Security}></img>
        <h3>Security you can trust</h3>
        <p>
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        </p>
      </article>
      <article className="card">
      <img src={Collaboration}></img>
        <h3>Real time collaboration</h3>
        <p>
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        </p>
      </article>
      <article className="card">
      <img src={Archieve}></img>
        <h3>Store any type of file</h3>
        <p>
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        Lorem ipsum dollr sit a met
        </p>
      </article>
      {/*end of cards*/}
    </section>
    {/*subtitle*/}
    <section className="subtitle">
      <img className="banner" src={Productive}></img>
      <aside>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Lorem pisul dollor sit a met
          Lorem pisul dollor sit a met
          Lorem pisul dollor sit a met
        </p>
        <p>
          Lorem pisul dollor sit a met
          Lorem pisul dollor sit a met
          Lorem pisul dollor sit a met
        </p>
        <Link/>
      </aside>
    </section>
    {/*end subtitle*/}
    {/*comments*/}
    <section className="comments">
      <article className="comment">
        <p>
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks
        </p>
        <div className="person">
          <img src={Person1}></img>
          <h3>John Doe<span>Founder and CEO</span></h3>
        </div>
      </article>
      <article className="comment">
        <p>
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks
        </p>
        <div className="person">
          <img src={Person2}></img>
          <h3>Harley Summers<span>CEO</span></h3>
        </div>
      </article>
      <article className="comment">
        <p>
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks 
          Lorem pisum dollor sit a met clruaiks
        </p>
        <div className="person">
          <img src={Person3}></img>
          <h3>Annah Sparks <span>CO-Founder</span></h3>
        </div>
      </article>
    </section>
    {/*end comments*/}
    <footer>
      <Form />
      <img className="logo" src={Logo}></img>
      <div className="footerLists">
        <div className="footerText">
          <img src={IconLocation}></img>
          <p>
            Lorem pisum dollor sit a met crawlong
            Lorem pisum dollor sit a met crawlong
            Lorem pisum dollor sit a met crawlong
            Lorem pisum dollor sit a met crawlong
          </p>
        </div>

        <ul>
          <li><img src={IconPhone}></img> +55 79 940028922</li>
          <li>example.gmail.com</li>
        </ul>

        <ul>
          <li>about us</li>
          <li>jobs</li>
          <li>press</li>
          <li>blog</li>
        </ul>

        <ul>
          <li>about us</li>
          <li>jobs</li>
          <li>press</li>
        </ul>

        <ul>
          <li>facebook</li>
          <li>instatgram</li>
          <li>whatsapp</li>
        </ul>
      </div>
    </footer>
    </>
  );
}

export default App;
