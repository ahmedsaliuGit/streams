import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../store/actions'


class StreamShow extends Component{
    componentDidMount() {
        const { fetchStream, match } = this.props;
        fetchStream(match.params.id);
    }

    render() {
        const { stream } = this.props;
        if(!stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{stream.title}</h2>
                <h5>{stream.description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);