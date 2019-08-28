import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { createStream } from '../../store/actions/';


class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create Form</h3>
                <StreamForm onSubmit={this.onSubmit} actionText="Create Stream" />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);