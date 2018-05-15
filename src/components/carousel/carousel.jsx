import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import './carousel.css'

export default class CarouselPage extends Component {

    render() {

        return (
            <Carousel>
                <Carousel.Item>
                    <img className="images" width={1000} height={400} alt="1000x400" src="assets/code.jpg" />
                    <Carousel.Caption>
                        <h3>Programmer Symbol</h3>
                        <p>A symbol in computer programming is a primitive datatype whose instances have a unique human-readable form.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1000} height={400} alt="1000x400" src="assets/html5.jpg" />
                    <Carousel.Caption>
                        <h3>HTML 5</h3>
                        <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1000} height={400} alt="1000x400" src="/assets/css3.jpg" />
                    <Carousel.Caption>
                        <h3>CSS 3</h3>
                        <p>(CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1000} height={400} alt="1000x400" src="assets/js.jpg" />
                    <Carousel.Caption>
                        <h3>Forth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}