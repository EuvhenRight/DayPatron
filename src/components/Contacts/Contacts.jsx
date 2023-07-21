import React from 'react';
import style from './Contacts.module.css';

const Contacts = () => {
  return (
    <div>
      <div className={style.section__gradient}>
        <div className={style.headline__wrapper}>
          <h1 className={style.headline__text}>CONTACTS</h1>
        </div>
      </div>
      <div className={style.section__middle}>
        <div className={style.container}>
          <div className={style.middle__wrapper}>
            <div className={style.middle__left}>
              <h2 className={style.middle__left__text}>
                <strong>
                  Challenges? Accepted! Ausgewählte Wow-Projekte von DMS von
                  Retail Analytics über Smart Digital Signage bis hin zu
                </strong>
                <br />
                Live-Shopping.
              </h2>
            </div>
            <div className={style.middle__right}>
              <p className={style.middle__right__text}>
                Challenges? Accepted! Ausgewählte Wow-Projekte von DMS von
                Retail Analytics über Smart Digital Signage bis hin zu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.section__down}>
        <div className={style.container}>
          <div className={style.down_list__wrapper}>
            <div className={style.down_list__left}>
              <div className={style.down__contact__wrapper}>
                <h2 className={style.down__contact__text}>
                  DayPatron LTD Ukraine
                </h2>
                <p>
                  Manufacturer: LLC "Ekokemika Trading,"
                  <br />
                  Address: Predslavynska Street, 34B, Kyiv, 03150, Ukraine
                  Production facility: Electrotekhnichna Street, 47, Kyiv,
                  Ukraine
                  <br />
                  Supplier and company for claims: LLC "Motorsport" Ltd.
                  <br />
                  Address: M. Solovtsova Street, 3, Kyiv, 01014, Ukraine
                  <br />
                  phone: +38(044)3347700
                  <br />
                  email: office@motorsport.com.ua
                  <br />
                  www.motorsport.com.ua
                </p>
              </div>
              <div className={style.down__contact__map}>
                <div>MAP</div>
              </div>
            </div>
            <div className={style.down_list__right}>
              <div className={style.down__form__wrapper}>
                <div className={style.down__form__headline}>
                  <h2 className={style.down__form__headline__text}>
                    CONTACT FEEDBACK
                  </h2>
                </div>
                <form className={style.contact__form}>
                  <input
                    className={style.contact__form__name}
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className={style.contact__form__email}
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className={style.contact__form__phone}
                    type="text"
                    placeholder="Phone"
                  />
                  <textarea
                    className={style.contact__form__message}
                    type="text"
                    placeholder="Message"
                  ></textarea>
                  <button>SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
