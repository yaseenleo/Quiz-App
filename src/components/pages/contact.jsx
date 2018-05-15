import React, { Component } from 'react';
import { Grid, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>

                <Jumbotron>
                    <h1>Contact Page</h1>
                    <p>
                        Welcome to the contact page of Quiz Application.
                    </p>
                    <p>
                        This is a simple Quiz Application, which purpose is to demonstrate a sample
                        question answer section of HTML, CSS and JavaScript.This App is developed by M.Yaseen
                        and Saad Hafiz, Faiq Hussain contributed their participation.
                    </p>
                    <p>
                        The following project code can be found by clicking the button below.
                    </p>
                    <Button bsStyle="primary" bsSize="large"    
                    
                    >
                        Github Link
                    </Button>
                    
                </Jumbotron>

                <Grid>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="portfolio/ys.jpg" circle className="profile-pic" />
                            <h3>M. Yaseen</h3>
                            <p>This is a animi character of japanese cartoon Naruto</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="portfolio/fq.jpeg" circle className="profile-pic" />
                            <h3>Faiq Hussain</h3>
                            <p>This is a animi character of japanese cartoon Naruto</p>
                        </Col>
                        <Col xs={12} sm={3} className="person-wrapper">
                            <Image src="portfolio/sd.jpeg" circle className="profile-pic" />
                            <h3>Saad Hafiz</h3>
                            <p>This is a animi character of japanese cartoon Naruto</p>
                        </Col>
                    </Row>

                </Grid>

            </div>
        )
    }
}