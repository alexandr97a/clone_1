import '../style/css/MainSec.css';
import jeju1 from '../img/jeju1.jpg';
import jeju2 from '../img/jeju2.jpg';
import { AiFillPhone, AiFillFacebook, AiFillInstagram,AiFillGoogleCircle } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { MdPlace } from 'react-icons/md';


function MainSec() {
  return ( 
    <>
      <section className="section1">
          <div className="sections_wrap">
            <p className="first_content">BUILD YOUR HOLIDAY TRIP WITH US</p>
            <p className="second_content">CREATE YOUR TOUR</p>
            <button className="reserve_btn">Reserve tour!</button>
          </div>
      </section>
      <section className="section2">
          <div className="first_sections">
            <h1 className="about_jeju">ABOUT JEJU</h1>
            <p className="first_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nunc tincidunt, porta felis et, semper nisi. Mauris hendrerit, urna rutrum congue consequat, lacus nisi ultricies massa, ut lacinia purus ipsum sed ante.</p>
            <p className="first_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nunc tincidunt, porta felis et, semper nisi. Mauris hendrerit, urna rutrum congue consequat, lacus nisi ultricies massa, ut lacinia purus ipsum sed ante.</p>
          </div>
          <div className="second_sections">
              <div className="photoContainer">
                  <div className="photo1"><img src={jeju2}/></div>
              </div>
          </div>
      </section>
      <footer className="footer">
          <div className="footer_wrap">
              <div className="footer1">
                    <h1 className="footerH color">CONTACT US</h1>
                    <p className="color"><AiFillPhone color="white" fontSize="1.4rem"/>+82 10-0000-0000</p>
                    <p className="color"><GrMail color="white" fontSize="1.4rem"/>asfasf@gmail.com</p>
                    <p className="color"><MdPlace color="white" fontSize="1.4rem"/>korea jeju-do</p>
                    <div className="sns color" >
                        <p className="icon"><AiFillFacebook color="white" fontSize="2rem"/></p>
                        <p className="icon"><AiFillInstagram color="white" fontSize="2rem"/></p>
                        <p className="icon"><AiFillGoogleCircle color="white" fontSize="2rem"/></p>
                    </div>
              </div>
          </div>
      </footer>
    </>
  );
}

export default MainSec;
