// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <input type='email' id='emailid' placeholder='Enter yor e-mail...'/>
          <button> SUBSCRIBE</button>
        </div>
        <div className={styles.footerColumn}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <div className={styles.currLogo}>
         <img src="/images/currency.png"></img> 
         <p> + <b>USD</b></p>
         </div>
          <p1>Transactions will be completed in Euros and a currency and a refere is available on hover.</p1>
        </div>
      </div>
      <hr></hr>
      <div className={styles.footerContent1}>
      <div className={styles.footerColumn1}>
          <h3>metta muse</h3>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Stories</a></p>
          <p><a href="#">Artisans</a></p>
          <p><a href="#">Boutiques</a></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">EU Compliances Docs</a></p>
        </div>
        <div className={styles.footerColumn2}>
          <h3>QUICK LINKS</h3>
          <p><a href="#">Orders & Shipping</a></p>
          <p><a href="#">Join/Login as a Seller</a></p>
          <p><a href="#">Payment & Pricing</a></p>
          <p><a href="#">Return & Refunds</a></p>
          <p><a href="#">FAQs</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms & Conditions</a></p>
        </div>
        <div className={styles.footerColumn3}>
          <h3>FOLLOW US</h3>
          <div className={styles.footerColumnLogo}>
          <div className={styles.snaplogo}>
          <img src="/images/snap.png"></img>
          </div>
          <div className={styles.linkedinlogo}>
          <img src="/images/linkedin.png"></img>
          </div>
          </div>
          <br></br><br></br>
          <h3>metta muse ACCEPTS</h3>
        <div className={styles.footerlogo}>
        <div className={styles.gpaylogo}>
          <img src="/images/gpay.png"></img>
      </div>
      <div className={styles.masterlogo}>
          <img src="/images/master.png"></img>
      </div>
      <div className={styles.paypallogo}>
          <img src="/images/paypal.png"></img>
      </div>
      <div className={styles.amexlogo}>
          <img src="/images/amex.png"></img>
      </div>
      <div className={styles.applepaylogo}>
          <img src="/images/applepay.png"></img>
      </div>
      <div className={styles.paylogo}>
          <img src="/images/pay.png"></img>
      </div>
      </div>
      </div>
        </div>
        <br></br><br></br><br></br>
        <p2>Copyright © 2023 mettamuse. All rights reserved.</p2>
    </footer>
  );
};

export default Footer;