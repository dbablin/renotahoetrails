import React, { Component }  from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, Carousel, Media, Row, Col, Container } from 'reactstrap';

function TrailInfo({trail}) {
    return (
        <Card>
            <CardTitle className="container m-2">
                <h3 className="mb-0">{trail.name}</h3>
            </CardTitle>
            <CardBody>
                <CardText className="ml-1">
                    <p><b>Summary:</b> {trail.summary}</p>
                    <p><b>Distance and difficulty:</b> {trail.distanceAndDifficulty}</p>
                    <p><b>Sun exposure:</b> {trail.sunExposure}</p>
                    <p><b>Traffic:</b> {trail.traffic}</p>
                    <p><b>Good for bikes?:</b> {trail.bikes}</p>
                    <p><b>Best seasons:</b> {trail.seasons}</p>
                    <p><a href={trail.directions} target="_blank" rel="noopener noreferrer"><b>Google Maps Directions</b></a></p>
                    <p><b>Parking and entrance:</b> {trail.parkingEntrance}</p>
                    <p><b>Additional information:</b> {trail.additionalInfo}</p>
                </CardText>
            </CardBody>
        </Card>
    );
}

function TrailPhotos({trail}) {
    return (
        <Row>
            <div className="col-sm-6 col-xl-3 m-0 p-0">
                <Card>
                    <CardImg src={trail.photoRoll1} />
                </Card>
            </div>
            <div className="col-sm-6 col-xl-3 m-0 p-0">
                <Card>
                    <CardImg src={trail.photoRoll2} />
                </Card>
            </div>
            <div className="col-sm-6 col-xl-3 m-0 p-0">
                <Card>
                    <CardImg src={trail.photoRoll3} />
                </Card>
            </div>
            <div className="col-sm-6 col-xl-3 m-0 p-0">
                <Card>
                    <CardImg src={trail.photoRoll4} />
                </Card>
            </div>
        </Row>
    );
}

function TrailDescription({trail}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: trail.longDescription }} className="mr-2" />
    ); 
}

function RenderTrail(props) {
    if (props.trail) {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-4 p-0" >
                        <TrailInfo trail={props.trail} />
                    </div>
                    <div className="col-8">
                        <TrailPhotos trail={props.trail} />
                        <br />
                        <TrailDescription trail={props.trail} />
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
    return <div />;
}

export default RenderTrail;