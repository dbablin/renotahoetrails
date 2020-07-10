import React, { useState }  from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, Media, Row, Col, Container } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';

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
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={trail.photoRoll1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{trail.photoLabel1}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={trail.photoRoll2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{trail.photoLabel2}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={trail.photoRoll3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{trail.photoLabel3}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={trail.photoRoll4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{trail.photoLabel4}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
                    <div className="col-6">
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