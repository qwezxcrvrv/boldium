import './home.scss';
import EmailForm from '../../components/emailForm/emailForm';
import Testimonials from '../../components/testimonials/testimonials';
import Principles from '../../components/principles/principles';

function Home() {
    return (
      <div className="home">
        <div className="heading_div">
          <div className="mainContainer">
            {/* <h1 className="heading">Boldium</h1> */}
            <img id="header_brand_img" alt='Boldium Architecture'></img>
            
            {/* <h3 className="heading"> Architecture</h3> */}
            <p className="heading-paragraph">Thinking about space, its feelings, and its joy is something we value.<br></br>
            Our designs aim to bring joy and inspiration to our clients, crafting spaces that perfectly match their needs and desires.
            </p>
            {/* With endless possibilities to explore, we're committed to creating environments that leave a lasting impact. */}
            {/* <p className="heading-paragraph">
              Spending time thinking about space, its feelings, and its joy is something we value.
            </p> */}
          </div>
        </div>
        <Principles />
        {/* <Testimonials /> */}
        <EmailForm />
      </div>
    );
  }
  
  export default Home;