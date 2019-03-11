import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from 'actions';

class GamePage extends React.Component {
    componentDidMount() {
        this.props.fetchStreams(this.props.match.params.id);
    }

    renderStreams() {
        const {streams} = this.props;
        return streams.map(stream => {
                return (
                    <div>
                        <iframe
                            src={`https://player.twitch.tv/?channel=${stream.user_name}&muted=true&autoplay=false`}
                            height="300"
                            width="400"
                            frameborder="0"
                            scrolling="no"
                            allowfullscreen="true"
                             />
                    </div>
                );
        });
    }

    render() {
        if (!this.props.streams) {
            return <div>loading...</div>;
        }
        return (
            <div className='streams'>{this.renderStreams()}</div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.streams);
    return { streams: Object.values(state.streams)};
}

export default connect(mapStateToProps, { fetchStreams })(GamePage);