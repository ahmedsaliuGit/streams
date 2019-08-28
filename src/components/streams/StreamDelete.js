import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../store/actions';

class StreamDelete extends Component {
    componentDidMount() {
        const { fetchStream, match } = this.props;
        fetchStream(match.params.id);
    }

    renderActions = () => {
        const { deleteStream } = this.props;
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        const { stream } = this.props;
        if(!stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete this stream with title: ${stream.title}?`
    }

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const stateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(stateToProps, {fetchStream, deleteStream})(StreamDelete);