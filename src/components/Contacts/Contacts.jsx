import MyLocation from '../Google_Map/My_Location';
import React from 'react';
import FormFeedBackContact from '../Forms/Form_FeedBack_Contact';
import style from './Contacts.module.css';
import { useLanguage } from '../language/LanguageContext';
import { useParams } from 'react-router-dom';

const Contacts = () => {
  const { t } = useLanguage();
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <div className={style.section__gradient}>
        <div className={style.headline__wrapper}>
          <h1 className={style.headline__text}>{t('contacts.mainText')}</h1>
        </div>
      </div>
      <div className={style.section__down}>
        <div className={style.container}>
          <div className={style.down_list__wrapper}>
            <div className={style.down_list__left}>
              <div className={style.down__contact__wrapper}>
                <h2 className={style.down__contact__text}>
                  {t('contacts.leftText')}
                </h2>
                <p>{t('contacts.leftText_manufacturer')}</p>
                <p>{t('contacts.leftText_supplier')}</p>
                <p>{t('contacts.leftText_phone')}</p>
                <p>
                  Email: info@dezze.com.ua
                  <br />
                  Email: info@daypatron.com.ua"
                </p>
              </div>
              <div className={style.down__contact__map}>
                <MyLocation />
              </div>
            </div>
            <div className={style.down_list__right}>
              <div className={style.down__form__wrapper}>
                <div className={style.down__form__headline}>
                  <h2 className={style.down__form__headline__text}>
                    {t('contacts.rightText')}
                  </h2>
                </div>
                {success ? (
                  <div className={style.success}>
                    <h3 className={style.success__text}>
                      {t('contacts.successText')}
                    </h3>
                    <button
                      className={style.success__button}
                      onClick={() => setSuccess(false)}
                    >
                      {t('contacts.repeatText')}
                    </button>
                  </div>
                ) : (
                  <FormFeedBackContact
                    success={success}
                    setSuccess={setSuccess}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
