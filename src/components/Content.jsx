import React from 'react';

/**
 * Import the desired form component in this class and display it inside the tapp content
 */
import TemplateForm  from './forms/TemplateForm.jsx';


export default class Content extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * This method calls the submit function of the form, which was provided as a prop.
     * It can be used as an alternative to the form button. Hide the form button with the prop hideButton set to true.
     */
    submitForm(){
        this.form.onSubmit();
    }

    /**
     * This function will be set as submit prop for the TemplateForm-element
     */
    onSubmit(supportObj) {
        console.log(supportObj)
        chayns.intercom.sendMessageToPage({
            text: 'The site \"' + supportObj.siteId + '\" asked for support.\nThe OS is ' + supportObj.system.name + '.\nContact the customer via phone: ' + supportObj.phone + ' .\nThe problem is described as follow: ' + supportObj.problem + '.\nThis changes were made after the installation: ' + supportObj.changes + '.\nThe problem occurs \"' + supportObj.radio + '\"\nNote: ' + supportObj.where + '.\nThe problem occurs in this Situation: ' + supportObj.when + '.'
        });
    }

    render() {
        return (
            <div className="tapp__content content">
                <TemplateForm ref={ref => {this.form = ref}} submit={res => { this.onSubmit(res)}} />
            </div>
        );
    }
}