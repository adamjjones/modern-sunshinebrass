import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = ['../images/b1a.png', '../images/b1b.png', '../images/b2a.png', '../images/b2b.png', '../images/b3a.png', '../images/b3b.png', '../images/b4a.png', '../images/b4b.png']

class Christmas extends Component {
  render() {
    return (
      <div className="content">
        <p>NOTE:</p>
        <p className="chip card-panel">CDs are available for sale for $15.00 USD each. They are available for purchase at
        <a href="https://www.etsy.com/shop/SunshineBrass"> our Etsy.com store</a>
          &nbsp; or at any of our Concerts.</p>

        <h3>Joy! - 2010</h3>
        <ul className='collection'>
          <li className="collection-item">On Christmas Day</li>
          <li className="collection-item">Fanfare Jubiloso</li>
          <li className="collection-item">In Dulci Jubilo</li>
          <li className="collection-item">Still, Still, Still</li>
          <li className="collection-item">Ding Dong! Merrily On High</li>
          <li className="collection-item">Jolly Ol' St. Nick</li>
          <li className="collection-item">Silent Night</li>
          <li className="collection-item">In the Bleak Midwinter</li>
          <li className="collection-item">Carol of the Bells</li>
          <li className="collection-item">The First Noel</li>
          <li className="collection-item">O Holy Night</li>
          <li className="collection-item">A Christmas Festival</li>
          <li className="collection-item">Sleigh Ride</li>
          <li className="collection-item">Christmas Joy</li>
        </ul>
        <Carousel interval={3000}
          centerMode={true}
          height="400px"
          width="400px"
          autoPlay={true}
          swipeable={true}
          showArrows={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          className="carousel">
          {
            images.map(i => {
              return (
                <div key={i}>
                  <img src={i} alt='' />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
}

export default Christmas;