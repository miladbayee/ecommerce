import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiMenuUnfoldLine,
  RiSearchLine,
  RiUser3Line,
  RiShoppingBag3Line,
  RiMenuFoldLine,
} from "react-icons/ri";

import useStateContext from "../../hooks/useStateContext";

const navMenus = [
  {
    id: "home",
    path: "/",
    display: "home",
  },
  {
    id: "catalog",
    path: "/catalog",
    display: "catalog",
  },
  {
    id: "contact",
    path: "/contact",
    display: "contact",
  },
  {
    id: "about-us",
    path: "/about",
    display: "about us",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeMenu = navMenus.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const tabletSizeMenuRef = useRef(null);

  const { state } = useStateContext();

  const cartItemsNumber = state.cart.productId.length;

  const handleToggleClick = () => {
    tabletSizeMenuRef.current.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <nav className="container">
        <div className="header__items">
          {/* left */}
          <div className="header__left">
            <div className="header__menu__left">
              <div
                className="header__menu__left__mobile--toggle"
                onClick={handleToggleClick}
              >
                <RiMenuUnfoldLine />
              </div>
              <ul className="header__menu__left__items" ref={tabletSizeMenuRef}>
                <div
                  className="header__menu__left__items__close"
                  onClick={handleToggleClick}
                >
                  <RiMenuFoldLine />
                </div>
                {navMenus.map((item, index) => (
                  <li
                    key={item.id}
                    onClick={handleToggleClick}
                    className={`header__menu__item header__menu__left__item ${
                      index === activeMenu ? "active" : ""
                    }`}
                  >
                    <Link to={item.path}>
                      <span>{item.display}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* center */}
          <div className="header__center">
            <div className="header__logo">
              <Link to="/">
                <img src="./assets/images/logo.png" alt="logo" />
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="header__right">
            <div className="header__menu__right">
              <div className="header__menu__item header__menu__right__item">
                <RiSearchLine />
              </div>
              <div className="header__menu__item header__menu__right__item">
                <RiUser3Line />
              </div>
              <div className="header__menu__item header__menu__right__item header__menu__right__item__bag">
                <Link to='/invoice'>
                  <RiShoppingBag3Line />
                  {cartItemsNumber > 0 && <span>{cartItemsNumber}</span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
