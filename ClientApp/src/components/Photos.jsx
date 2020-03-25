import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer'

const photos = ["../images/file3.jpeg",
  "../images/file4.jpeg",
  "../images/file5.jpeg",
  "../images/file6.jpeg",
  "../images/file7.jpeg",
  "../images/nabbatrophy04.jpg",
  "../images/palladium.jpg",
  "../images/sunshinebrass.jpg",]

class Pictures extends Component {
  render() {
    return (
      <div>
        <Carousel
          interval={3000}
          centerMode={true}
          height="700px"
          width="750px"
          autoPlay={true}
          swipeable={true}
          showArrows={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          className="carousel">
          {photos.map(p => {
            return (
              <div key={p}>
                <img src={p} alt='' />
              </div>
            )
          })
          }
        </Carousel>
        <Footer />
      </div>
    );
  }
}

export default Pictures;