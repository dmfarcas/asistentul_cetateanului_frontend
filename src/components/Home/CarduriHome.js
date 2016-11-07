import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';


const carduri = [
    "Alerte personalizate",
    "Alerte de interes general",
    "Notificare prin SMS, email sau push notifications"
];

export default class CarduriHome extends Component {

    render() {
        return (
            <Row>
                {carduri.map((card, index) => {
                    return (
                        <Col
                            key={index}
                            md={4}
                            className="carduri-home">
                            <p className="text-center">{card}</p>
                        </Col>
                    );
                })}
            </Row>
        );
    }
}