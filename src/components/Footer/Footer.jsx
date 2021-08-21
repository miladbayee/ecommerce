import { Link } from "react-router-dom";
import Grid from "../Grid";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const aboutMenu = [
  { id: "about", display: "about us", path: "/about" },
  { id: "contact", display: "contact us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={3} mdCol={1} smCol={1} gap={10}>
          {/* social */}
          <div>
            <div className="footer__social">
              <div className="footer__title">
                <p>follow us</p>
              </div>
              <div className="footer__social__icons">
                <div className="footer__social__icons__item">
                  <Link to="/">
                    <AiOutlineInstagram />
                  </Link>
                </div>
                <div className="footer__social__icons__item">
                  <Link to="/">
                    <AiOutlineTwitter />
                  </Link>
                </div>
                <div className="footer__social__icons__item">
                  <Link to="/">
                    <AiFillFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* menu */}
          <div>
            <div className="footer__menu">
              <div className="footer__title">
                <p>about</p>
              </div>
              <ul className="footer__menu__items">
                {aboutMenu.map((item) => (
                  <Link key={item.id} to={item.path}>
                    <li className="footer__menu__item" >{item.display}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* logo */}
          <div>
            <div className="footer__logo">
              <div className="footer__logo__img">
                <img src="assets/images/logo.png" alt="logo" />
              </div>
              <div className="footer__logo__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  consectetur possimus ex numquam mollitia, voluptatem enim ad
                  vitae quaerat necessitatibus ipsam ipsum quod perferendis
                  ullam deserunt pariatur!
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
