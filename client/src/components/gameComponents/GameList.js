import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from 'actions';

class GameList extends React.Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    renderGameList() {
        const {games} = this.props;
        return games.map(game => {
                return (
                    <div>
                    <li>
                        <div>
                            hello
                        </div>
                    </li>
                    </div>
                );
        })
    }

    render() {
        if (!this.props.games) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul>
                    {this.renderGameList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { games: Object.values(state.games) }
}

export default connect(mapStateToProps, { fetchGames })(GameList);