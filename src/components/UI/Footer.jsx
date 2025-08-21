import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import footercontact from "../../api/Footerapi.json"
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export const Footers = () => {
  const iconMappppp = {
    MdPlace: <MdPlace />,
   FaLinkedin : <FaLinkedin />,
    TbMailPlus: <TbMailPlus />
  }

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols" >
        {
          footercontact.map((curElem, index) => {
            const { icon, title, details } = curElem
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{iconMappppp[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            )
          })
        }
      </div>


      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p> Copyright &copy; 2025, All Right Reserved</p>
              <NavLink to="https://github.com/syed-yameen" target="blank"> Syed Yameen Ahmed</NavLink>

              <div className="footer-menu">
                <ul>
                  <li> <NavLink to="/">Home</NavLink></li>
                  <li> <NavLink to="https://github.com/syed-yameen"> My Github</NavLink></li>
                  <li> <NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer >
  );
};