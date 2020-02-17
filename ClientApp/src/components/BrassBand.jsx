import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = ['../images/a2.3.png', '../images/a1.2.png', '../images/a1.3.png', '../images/a2.1.png', '../images/a2.2.png', '../images/a1.1.png']

class BrassBand extends Component {
  render() {
    return (
      <div className="content">
        <p>NOTE:</p>
        <p className="chip card-panel">CDs are available for sale for $15.00 USD each. They are available for purchase at
        <a href="https://www.etsy.com/shop/SunshineBrass"> our Etsy.com store</a>
          &nbsp; or at any of our Concerts.</p>

        <h3>Sunshine And Brass - 2004</h3>
        <ul className='collection'>
          <li className="collection-item">Festival Fanfare and the Star Spangled Banner - Erik Leidzén</li>
          <li className="collection-item">Amazing Grace - arr. W. Himes</li>
          <li className="collection-item">March Bravura - W. Himes</li>
          <li className="collection-item">Chorale and Toccata - Stephen Bulla</li>
          <li className="collection-item">Shine as the Light - Peter Graham</li>
          <li className="collection-item">I Vow To Thee, My Country (Thaxted), Gustva Holst, arr. Ray Steadman-Allen</li>
          <li className="collection-item">Bugler's Holiday - Leroy Andreson </li>
          <li className="collection-item">The Music Of the Night - Andrew Lloyd Webber, arr. W. Himes    </li>
          <li className="collection-item">Wishing You Were Somehow Here Again, arr. Stephen Bulla    </li>
          <li className="collection-item">A Russian Fantasy - Gordon Langford</li>
          <li className="collection-item">March - Praise, W. Heaton</li>
        </ul>

        {
          images.map(i => {
            return (
              <div className="mapped-imgs">
                <img className="responsive-img" src={i} />
              </div>

            )
          })
        }
      </div>

    )
  }
}
export default BrassBand;
