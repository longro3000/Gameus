import React from 'react';
import { connect } from 'react-redux';

import { GetGame } from 'actions';


class StreamList extends React.Component {
    render() {
        return (
            <div> saiyfdsaidasd </div>
        );
    }
}

const mapStateToProps = ({ state }) => {
    return { streamList: state.gameList };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);