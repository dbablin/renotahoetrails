import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle  } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({trail}) {
    return (
        <Card>
            <Link to={`/trails/${trail.id}`}>
                <CardImg width="100%" src={trail.image} alt={trail.name} />
                <CardImgOverlay>
                    <CardTitle>
                        <h5>{trail.name}</h5>
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Trails(props) {
    const directory = props.trails.map(trail => {
        return (
            <div key={trail.id} className="col-sm-3 m-1">
                <RenderDirectoryItem trail={trail} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <br />
                    <h2>Trail Directory</h2>
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
            <br />
        </div>
    );
}

export default Trails;