import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends Component {
	render() {
		return (
			<div slideshow>
		
			 <Carousel flex-carouselExampleIndicators >
				<div data-interval="5000">
					<img src="/slider/slide_1.png" />
					
				</div>
				<div data-interval="5000">
                <img src="/slider/slide_1.png"/>
                <p className="legend">Image 3</p> 

				</div>
				<div>
					<img src="/slider/slide_1.png" />
					{/* <p className="legend">Image 3</p> */}

				</div>
				<div>
					<img src="/slider/" alt="image4"/>
					{/* <p className="legend">Image 4</p> */}

				</div>
				<div>
					<img src="/slider/" alt="image5"/>
					
				</div>
			</Carousel>	
 	</div>
		);
	}
};
