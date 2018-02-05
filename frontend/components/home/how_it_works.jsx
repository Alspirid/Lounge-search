import React from 'react';

const HowItWorks = (props) => (
  <div>
    <div className='how-it-works-slogan'>
      <h1>How It Works</h1>
      <hr className='mod-white'/>
    </div>
    <div className='how-it-works'>
      <div className='how-it-works-item'>
        <img src='https://ht-assets.couchsurfing.com/assets/icons/discover-amazing-people-75ec5628b259a817d9389816d8b3b9c8369d87c524f0fc29f5fd81d7bdb462e5.png'
        alt='amazing people image'/>
      <h3>Discover Amazing People</h3>
      <hr className='mod-white-short' />
      <p>LoungeSearch open their homes and share their lives. Connect and be inspired.</p>
      </div>
      <div className='how-it-works-item'>
        <img src='https://ht-assets.couchsurfing.com/assets/icons/book-a-stay-64b707177c5c69aa958920761cdd560d7ced3edf3ca7c09c91155c2863f5bdc8.png'
        alt='host image'/>
        <h3>Find a Host</h3>
        <hr className='mod-white-short' />
        <p>Connect with hosts, and confirm your stay through the Couchsurfing platform. Your stay with hosts is free.</p>
      </div>
      <div className='how-it-works-item'>
        <img src='https://ht-assets.couchsurfing.com/assets/icons/join-events-23ca802d7e5993838f1122d360dc35b3ef00291507a9a960b435d116baf30979.png'
        alt='Events image'/>
        <h3>Join Events</h3>
        <hr className='mod-white-short' />
        <p>Meet travelers in other cities, or in your own city! There's always something new to join.</p>
      </div>
    </div>
    <div className='table-options'>
      <table>
        <tbody>
        <tr>
          <td></td>
          <td className='top-column'><h1>Free</h1></td>
          <td><h1>Verified Members</h1></td>
        </tr>
        <tr>
          <td>Find a Host</td>
          <td><i className="large material-icons">check</i></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
        <tr>
          <td>Host a Traveler</td>
          <td><i className="large material-icons">check</i></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
        <tr>
          <td>Attend Events</td>
          <td><i className="large material-icons">check</i></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
        <tr>
          <td>Send Unlimited Messages</td>
          <td></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
        <tr>
          <td>Ad Free Website & App</td>
          <td></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
        <tr>
          <td>Identity Verification</td>
          <td></td>
          <td><i className="large material-icons">check</i></td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
);

export default HowItWorks;
