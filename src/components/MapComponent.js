import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 39.316089,
          lng: -119.904114
        },
        zoom: 10.5
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
          };

        const Marker = (props) => <>
            <div style={{
                color: 'white', 
                background: 'rgba(255,115,0,0.5)',
                padding: '5px 1px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Link to={`${props.url}`} style={{color: 'black'}}>{props.text}</Link>
            </div>
        </>;
        return (
            // Important! Always set the container height explicitly
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBewL1YbnY2S1AMDB2ztPb7FddM_Bd-YCU' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <Marker 
                    lat={39.3125063}
                    lng={-119.9058444}
                    text="Mount Rose"
                    url="/trails/0"
                />
                <Marker 
                    lat={39.377925}
                    lng={-119.847967}
                    text="Whites Creek"
                    url="/trails/1"
                />
            </GoogleMapReact>
        );
    }
}

function RenderMap(props) {
    return (
            <div className="row">
                <div 
                    className="col-12" 
                    style={{ height: "92vh", width: "100%"  }}
                >
                    <Map />
                </div>
            </div>
    );
};

export default RenderMap;