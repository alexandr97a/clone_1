import '../style/css/MainSec.css';
import jeju1 from '../img/jeju1.jpg';
import jeju2 from '../img/jeju2.jpg';

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
    </>
  );
}

export default MainSec;
