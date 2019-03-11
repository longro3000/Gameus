import React from 'react';
import { Link } from 'react-router-dom';
import dota2 from '../style/img/dota2.jpg';
import apex from '../style/img/apex.jpg';
import fortnite from '../style/img/fortnite.jpg';

class LandingPage extends React.Component {
    render() {
        return(
            <div className="section-games">
                <div className="row">
                    <h2>Explore your favorite games</h2>
                </div>
                <div className="row">
                    <div className="col span-1-of-3 box">
                    <Link to='/game/29595'><img src={dota2} alt="Dota 2" /></Link>
                    <p className="game-title">
                        Dota 2
                    </p>
                </div>
                <div className="col span-1-of-3 box">
                <Link to='/game/33214'>
                    <img src={fortnite} alt="Fortnite" />
                </Link>
                    <p className="game-title">
                        Fortnite
                    </p>
                </div>
                <div className="col span-1-of-3 box">
                <Link to='/game/511224'>
                    <img src={apex} alt="Apex" />
                </Link>
                    <p className="game-title">
                        Apex Legends
                    </p>

                </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
