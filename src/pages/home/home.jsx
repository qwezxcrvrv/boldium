import './home.scss';
import ContactUs from '../../components/contactus/contactus';
import Testimonials from '../../components/testimonials/testimonials';
import Principles from '../../components/principles/principles';
// Done -> 투명배경에 contact 박스 -> 검정 border에 검정글씨 
// 이메일 보내고 나서 확인 메세지. 양쪽으로 나눈뒤 왼쪽에 추가 정보넣기
// favicon -> BA -> Cerebri 폰트로 
function Home() {
    return (
      <div className="home">
        <div className="heading_div">
          <div className="mainContainer">
            <img id="header_brand_img" alt="Boldium Architecture" />
            {/* <h1 className="heading">B oldium <span class="phoneticAlphabet">/bəʊldiəm/</span></h1>
            <span className="adjsuffix">adjective&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; suffix</span> */}
            {/* <img id="header_brand_img" alt='Boldium Architecture'></img> */}            
            {/* <h3 className="heading"> Architecture</h3> */}

            <br></br>
            <div className="heading-paragraphDiv">
              {/* <p className="heading-paragraph">"Bold" generally refers to being daring, confident, and courageous in one's actions or decisions. It can also refer to being audacious, innovative, or unconventional.
              The term is often associated with a willingness to take risks and try new things, even in the face of uncertainty or potential criticism.<br></br><br></br>
              In architecture, "Bold" can refer to a design or style that is characterized by a strong and confident use of form, material, and space.
              </p> */}
              <p className="heading-paragraph">Architectural brilliance in bold strokes. Experience the extraordinary.
              </p>
            </div>
            
            {/* <p className="heading-paragraph">Thinking about space, its feelings, and its joy is something we value.<br></br>
            Our designs aim to bring joy and inspiration to our clients, crafting spaces that perfectly match their needs and desires.
            </p> */}
            {/* With endless possibilities to explore, we're committed to creating environments that leave a lasting impact. */}
            {/* <p className="heading-paragraph">
              Spending time thinking about space, its feelings, and its joy is something we value.
            </p> */}
          </div>
        </div>
        <Principles />
        <Testimonials />
        <ContactUs />
      </div>
    );
  }
  
  export default Home;