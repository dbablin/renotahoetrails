import React, { Component } from 'react';
import Header from './HeaderComponent';
import RenderMap from './MapComponent';
import Footer from './FooterComponent';
import Trails from './TrailsComponent';
import RenderTrail from './TrailInfoComponent';
import { TRAILS } from '../shared/trails';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: TRAILS
        }
    }
    render() {
        const HomePage = () => {
            return (
                <RenderMap 
                    trails={this.state.trails}
                /> 
            );
        }
        const TrailWithId = ({match}) => {
            return (
                <RenderTrail
                    trail={this.state.trails.filter(trail => trail.id === +match.params.trailId)[0]}
                />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/trails' render={() => <Trails trails={this.state.trails} />} />
                    <Route path='/trails/:trailId' component={TrailWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;