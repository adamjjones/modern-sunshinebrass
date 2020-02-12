import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import image1 from './images/b1a.png'
// import image2 from './images/b1b.png'
// import image3 from './images/b2a.png'
// import image4 from './images/b2b.png'
// import image5 from './images/b3a.png'
// import image6 from './images/b3b.png'
// import image7 from './images/b4a.png'
// import image8 from './images/b4b.png'

const images = ['../../images/b1a.png', '../images/b1b.png', '../images/b2a.png', '../images/b2b.png', '../images/b3a.png', '../images/b3b.png', '../images/b4a.png', '../images/b4b.png']

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

        {/* <Carousel>
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
        {/* {setInterval(() => {
          {
            images.map(i => {
              return (

                <img src={i} />

              )
              { i++ }
            })
          }
        }, 500)} */}
      </div>

    )
  }
}

export default Christmas;