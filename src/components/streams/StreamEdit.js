import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../store/actions';
import StreamForm from './StreamForm';


class StreamEdit extends Component {
    componentDidMount() {
        const { fetchStream, match } = this.props;
        fetchStream(match.params.id);
    }

    onSubmit = (formValues) => {
        const { editStream, match } = this.props;
        editStream(match.params.id, formValues);
    }

    render(){
        const { stream } = this.props;
        if(!stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    initialValues={_.pick(stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                    actionText="Edit Stream"
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);