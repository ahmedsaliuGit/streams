import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends Component {
    renderError = ({error, touched}) => {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const errorClass = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={errorClass}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        const {handleSubmit, actionText} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">{actionText}</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a title';
    } 
    
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({ form: 'streamform', validate })(StreamForm);