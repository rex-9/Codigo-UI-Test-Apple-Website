import './About.scss';
import apple from '../../assets/apple-brown.svg';
import {
  shopNLearn, services, account, appleStore, forBusiness, forEducation, forHealthcare, forGovernment, appleValues, aboutApple,
} from '../../data';

const About = () => (
  <>
    <div className="about">
      <div>
        * The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled.
        Restrictions and other terms apply.
        <br />
        <br />
        1, $4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you&apos;re part of a Family Sharing group, regardless of the number of devices you or
        your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible
        device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
        <br />
        <br />
        2. One subscription per Family Sharing group. Plan automatically renews until cancelled.
        <br />
        <br />
        3. Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription.
        Offer good for verified college students only and does not extend to a Family Sharing group.
      </div>
      <br />
      <br />
      <hr />
      <div className="breadcrumb">
        <img width={20} src={apple} alt="apple" />
        <span>&gt;</span>
        <span>Only on Apple</span>
        <span>&gt;</span>
        <span>Apple TV+</span>
      </div>
      <div className="more">
        <div>
          <span>Shop and Learn</span>
          {
            shopNLearn.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>Services</span>
          {
            services.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>Account</span>
          {
            account.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>Apple Store</span>
          {
            appleStore.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>For Business</span>
          {
            forBusiness.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>For Education</span>
          {
            forEducation.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>For Healthcare</span>
          {
            forHealthcare.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>For Government</span>
          {
            forGovernment.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>Apple Values</span>
          {
            appleValues.map((item) => <p key={item}>{item}</p>)
          }
        </div>
        <div>
          <span>About Apple</span>
          {
            aboutApple.map((item) => <p key={item}>{item}</p>)
          }
        </div>
      </div>
      <br />
      <p>
        More ways to shop :
        <a href="https://www.apple.com/retail/">Find an Apple Store</a>
        {' '}
        or
        <a href="https://locate.apple.com/"> other retailer </a>
        {' '}
        near you . Or call 1-800 - MY - APPLE .
      </p>
      <br />
      <hr />
      <br />
      <p className="cr">
        Copyright © 2022 Apple Inc. All rights reserved.
        <div className="us">
          <div>
            <div className="vl" />
            {' '}
            Privacy Policy
            {' '}
            <div className="vl" />
            {' '}
            Terms of Use
            {' '}
            <div className="vl" />
            {' '}
            Sales and Refunds
            {' '}
            <div className="vl" />
            {' '}
            Legal
            {' '}
            <div className="vl" />
            {' '}
            Site Map
            {' '}
          </div>
          <div>
            <p>United States</p>
          </div>
        </div>
      </p>
      <br />
    </div>
  </>
);

export default About;
