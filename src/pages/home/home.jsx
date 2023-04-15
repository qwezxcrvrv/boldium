import './home.scss';
import EmailForm from '../../components/emailForm/emailForm';

function Home() {
    return (
      <div className="home">
        <div className="heading_div">
          <div className="mainContainer">
            <h1 className="heading">Boldium</h1>
            <h3 className="heading"> Architecture</h3>
            <p class="heading-paragraph">Non officia anim quis et irure excepteur aliqua ipsum adipisicing anim enim qui. Veniam aliquip eu nostrud adipisicing exercitation in. Cillum mollit aute ex culpa commodo laborum minim dolore occaecat eiusmod ut exercitation nisi do. Tempor qui officia laboris excepteur aliquip ut culpa anim ipsum labore minim qui.</p>
          </div>
        </div>
        <EmailForm />
      </div>
    );
  }
  
  export default Home;