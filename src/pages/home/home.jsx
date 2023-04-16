import './home.scss';
import EmailForm from '../../components/emailForm/emailForm';
import Testimonials from '../../components/testimonials/testimonials';

function Home() {
    return (
      <div className="home">
        <div className="heading_div">
          <div className="mainContainer">
            <h1 className="heading">Boldium</h1>
            <h3 className="heading"> Architecture</h3>
            <p className="heading-paragraph">Spending time thinking about space, its feelings, and its joy is something we value.</p>
          </div>
        </div>
        <Testimonials />
        <EmailForm />
      </div>
    );
  }
  
  export default Home;