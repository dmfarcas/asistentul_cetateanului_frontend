/* TODO actiune pt butonul de inregistrare */

import React, { Component } from 'react';
import { Col, Jumbotron, Button } from 'react-bootstrap';


const paragraf = `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.`;

export default class HomeJumbotron extends Component {

    render() {
        return (
            <Jumbotron className="home-jumbotron">

                <Col md={6}>
                    <img
                        src="http://placehold.it/400x300"
                        alt="placeholder"
                        className="img-responsive">
                    </img>
                </Col>

                <Col md={6}>
                    <h1>Descrierea produsului in linii mari</h1>
                    <p>{paragraf}</p>
                    <p>
                        <Button
                            bsStyle="primary"
                            className="primary btn-lg pull-right">
                                Inregistreaza-te
                        </Button>
                    </p>
                </Col>

            </Jumbotron>
        );
    }
}