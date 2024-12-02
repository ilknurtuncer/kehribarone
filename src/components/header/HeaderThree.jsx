import React from "react";
import LogoWhite from "./LogoWhite";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import NiceSelect from "./NiceSelect";

import menuData from "../../data/menuData";

const HeaderThree = () => {
  const logo = "/assets/images/logo/logo-white.png"; // Logonun konumu
  const adress01 = "Fevziçakmak Mh., 10762 Sk. B-Blok No:8B Karatay/Konya"; // Örnek adres
  const email = "info@kehribar.com"; // Örnek e-posta
  const phone02 = "+90 555 555 5555"; // Örnek telefon

  return (
    <>
      <header className="main-header main-header-one clearfix">
        <div className="main-header-one__wrapper">
          {/* Üst Header */}
          <div className="main-header-one__top">
            <div className="container-fluid">
              <div className="main-header-one__top-inner">
                {/* Sol Taraf: Logo */}
                <div className="main-header-one__left">
                  <LogoWhite logo={logo} />
                </div>

                {/* Orta Kısım: İletişim Bilgileri */}
                <div className="main-header-one__middle">
                  <ul>
                    <li>
                      <NiceSelect />
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="text">
                        <span>Adres</span>
                        <p>{adress01}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p className="email">
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="text">
                        <span>Telefon</span>
                        <p className="number">
                          <a href={`tel:${phone02}`}>{phone02}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Sağ Taraf */}
                <div className="main-header-one__right"></div>
              </div>
            </div>
          </div>

          {/* Alt Header */}
          <div className="main-header-one__bottom">
            <div className="container-fluid">
              <div className="main-header-one__bottom-inner">
                {/* Sol: Menü */}
                <div className="main-header-one__bottom-left">
                  <nav className="main-menu main-menu--1">
                    <div className="main-menu__inner">
                      <MobileMenu />
                      <div className="stricky-one-logo">
                        <LogoWhite logo={logo} />
                      </div>
                      <Nav menu={menuData} />
                    </div>
                  </nav>
                </div>

                {/* Sağ: Boş */}
                <div className="main-header-one__bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
