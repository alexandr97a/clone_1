import '../style/css/MainCont.css';
import jeju1 from '../img/jeju1.jpg';
import jeju2 from '../img/jeju2.jpg';

function MainCont() {
  return ( 
    <>
      <section className="MainCont">
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

export default MainCont;
