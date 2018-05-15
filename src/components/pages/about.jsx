import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './about.css';
import CarouselPage from '../carousel/carousel';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
// import CardItem from '../../components/card';

export default class About extends Component {
    render() {
        return (
            <div className="main-container">

                <CarouselPage />

                <Jumbotron>
                    <h2>Welcome to Quiz App</h2>
                    <p>In this application you are able to give online test sitting anywhere</p>
                    <Link to="./about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>

                <Grid>
                    <Row>
                        <Col>
                            <div className="main-card">
                                <div className="card-section">
                                    <div className="cardImages"><img className="card-img" src="logo/html-logo.png" alt="" /></div>
                                    <div className="card-textArea">
                                        <h2>HTML 5</h2>
                                        <p>
                                            HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5.
                                        </p>
                                    </div>
                                </div>
                        
                                <div className="card-section">
                                    <div className="cardImages"><img className="card-img" src="logo/css-logo.png" alt="" /></div>
                                    <div className="card-textArea">
                                        <h2>CSS 3</h2>
                                        <p>
                                            CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.
                                        </p>
                                    </div>
                                </div>

                                <div className="card-section">
                                    <div className="cardImages"><img className="card-img" src="logo/javascript-logo.png" alt="" /></div>
                                    <div className="card-textArea">
                                        <h2>JavaScript</h2>
                                        <p>
                                        JavaScript (JS) is a lightweight, interpreted or JIT compiled programming language with first-class functions. Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB. JS is a prototype-based, multi-paradigm, dynamic scripting language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}