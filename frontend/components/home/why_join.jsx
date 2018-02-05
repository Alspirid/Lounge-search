import React from 'react';

const WhyJoin = (props) => (
  <div>
  <div className='why-join-slogan'>
    <h1>Why Join?<hr className='mod-white'/></h1>
    
  </div>
  <div className='why-join'>
    <div className='why-join-item'>
      <img alt="Family at home hosting a surfer" 
        src="https://ht-cdn.couchsurfing.com/assets/home/H2yepUC.png" />
        <h3>On Surfing</h3>
        <hr className='mod-white-short'/>
        <p>Lounge Search has given me the opportunity to live very 
        valuable and beautiful experiences. It's filled my journey 
        with stories, people, and friends. It's given life to the 
        places I visited, 
        and I know that anywhere in the world I visit, 
        I'll possibly have a good friend waiting for me!</p>
        <p> - Andrea</p>
        <p>(Traveling in South America)</p>
    </div>
    <div className='why-join-item'>
      <img src="https://ht-cdn.couchsurfing.com/assets/home/pkjx9zk.png" />
      <h3>On Community</h3>
      <hr className='mod-white-short'/>
      <p>We recommend LoungeSearch highly enough. 
        It's a great way to experience places from a unique insider 
        perspective, and you'll undoubtedly make great friends along the way. 
        Travel is more about the people you meet than the places you see, 
        and LoungeSearch reinforced the fact that people are inherently good.</p>
      <p>- Matt and Sara</p>
      <p>(Traveling In Asia)</p>
    </div>
    <div className='why-join-item'>
    <img src="https://ht-cdn.couchsurfing.com/assets/home/uzEQcHe.png" />
    <h3>On Hosting</h3>
    <hr className='mod-white-short'/>
    <p>We wanted to show our children that people from all over the world 
      are good, no matter what culture, skin color, or language. 
      We had no money to travel the world with our four kids, 
      and decided to let the world come to us. We opened our house, 
      our hearts, and our lives to strangers. A lot of them became friends 
      for life!</p>
    <p>- Lieke, Peter, and Kids</p>
    <p>(Hosting in Belgium)</p>
    </div>
  </div>
  </div>
);

export default WhyJoin;
