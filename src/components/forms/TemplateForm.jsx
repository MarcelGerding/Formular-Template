import React from 'react';

/**
 * Import the desired components
 */
import { Input } from 'tobit-chayns_components/react-chayns-input';
import { Checkbox } from 'tobit-chayns_components/react-chayns-checkbox'
import { SelectButton } from 'tobit-chayns_components/react-chayns-selectbutton';
import Textarea from 'tobit-chayns_components/react-chayns-textarea';

export default class TemplateForm extends React.Component {

    static propTypes = {
        submit: React.PropTypes.func.isRequired,
        hideButton: React.PropTypes.bool
    };

    constructor() {
        super();
        /**
         *  Set form properties as object.
         *  Use the component event handlers to update these properties.
         *  The properties will be validated by the components themselves.
         */
        this.form = {
            phone: null,
            siteId: null,
            problem: null,
            system: null,
            changes: null,
            where: null,
            when: null,
            radio: 'At some users'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.valueRadio = this.valueRadio.bind(this);
    }

    /**
     * This method will be called when the submit button gets clicked and checks whether all properties set in the state got a value.
     * You can add additional security checks here.
     * Remember that some elements (like inputs) have their own methods to highlight those errors (See their documentation for more information).
     * If yes, the method onValid will be called. If no, onInvalid will be called.
     */
    onSubmit() {
        chayns.dialog.alert('', 'Your message was send successfully. We do our best to help you as far as possible.');
        this._submit.classList.add('button--disabled');
        location.reload();
        if (this.isValid())
            this.props.submit ? this.props.submit(this.form) : null;

    }

    valueRadio() {
        if (this.refs.r1.checked) this.setValue('radio', this.refs.r1.value)
        else if (this.refs.r2.checked) this.setValue('radio', this.refs.r2.value)
        else if (this.refs.r3.checked) this.setValue('radio', this.refs.r3.value)
        else if (this.refs.r4.checked) this.setValue('radio', this.refs.r4.value)

    }

    /**
     * Checks whether all required properties are set.
     * ( Strings are secured via the regExp on the input elements )
     */
    isValid() {
        let valid = true;
        Object.keys(this.form).forEach((key) => {
            if (this.form[key] === null)
                valid = false;
        });
        return valid;
    }

    /**
     * Adds a value to the form object. If the form is valid the button will get enabled in case it is not hidden.
     */
    setValue(key, value) {
        this.form[key] = value;
        // if(key == 'system'){
        //   this.refs.selectbutton.setAttribute("label", value); 
        // }
        if (this.isValid())
            this._submit.classList.remove('button--disabled');
        // if(key == 'siteId'){
        //     if(this.form[key].length == 5){
        //         value = value + '-';
        //         console.log(value);
        //         console.log(this.inputsiteId)
        //         this.inputsiteId.value = value;
        //         this.inputsiteId.text = value;
        //         console.log(this.inputsiteId.value);
        //     }
        // }
    }

    render() {
        let osList = [
            {
                id: 1,
                name: 'Windows 7'
            },
            {
                id: 2,
                name: 'Windows 8'
            },
            {
                id: 3,
                name: 'Windows 8.1'
            },
            {
                id: 4,
                name: 'Windows 10'
            },
            {
                id: 5,
                name: 'Anderes'
            }
        ];

        return (
            <div className='content__card'>
                { /** here starts the custom form. add components and set the desired value to the form object*/}
                <div className='tapp__intro'>
                You can ask concrete questions directly to the Tobit.Software Premium Services. Free of cost. 
                Please understand that the processing can take up to 48 hours. The more precise the questions are ask, the faster your problem get solved.
                </div>
                <div className='tapp__content'>
                    <Input placeholder='Phonenumber' regExp='^[0-9|+]*$' onKeyUp={value => { this.setValue('phone', value) } } />
                    <div style={{ marginTop: '20px' }}>
                        <p>1. Please give us your SiteID of the product the problem is about. The SiteID includes <b>the 10 first characters</b> of your david® startlicence.</p>
                        <Input placeholder='SiteId (z.B 12345-67890)' ref={(ref) => { this.inputsiteId = ref; } } regExp='^[0-9]{5}-[0-9]{5}$' onKeyUp={value => { this.setValue('siteId', value) } } />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>2. Please describe your problem as precisely as possible. So we can help you fast an purposeful.</p>
                        <Textarea placeholder='Description' autogrow onKeyUp={value => { this.setValue('problem', value.target.value) } } />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>3. Since when does the problem occur? Do you change something at your Installation (z.B. new operating system, new hardware...)?</p>
                        <Textarea placeholder='Answer' autogrow onKeyUp={value => { this.setValue('changes', value.target.value) } } />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>4. Does the problem only occur at some PCs or Users, or does it occur everywhere</p>
                        <div className='table'>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r1' value='At some users' id='radio1w47653' onClick={() => { this.valueRadio() } } defaultChecked />
                                        <label htmlFor='radio1w47653'>
                                            <div className='input0'  >At some users
                    </div>
                                        </label>
                                    </span>
                                </div><div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r2' value='At some PCs' id='radio2w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio2w47653'>
                                            <div className='input1' name='fehler' >At some PCs
                    </div>
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r3' value='At the Server' id='radio3w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio3w47653'>
                                            <div className='input2'>At the Server
                    </div>
                                        </label>
                                    </span>
                                </div>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r4' value='Everywhere' id='radio4w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio4w47653'>
                                            <div className='input3' >Everywhere
                    </div></label></span></div></div></div>
                        <Textarea placeholder='Note' autogrow onKeyUp={value => { this.setValue('where', value.target.value) } } />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>5. Is there a special situation where the problem occur, for example a special action from the user or in connection with an other app (which)? Can this be repeated?</p>
                        <Textarea placeholder='Description' autogrow onKeyUp={value => { this.setValue('when', value.target.value) } } />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        Choose your operating system.
                        <div style={{ float: 'right' }}>
                            <SelectButton
                                className="choosebutton"
                                id="selectbutton"
                                label='Operating System'
                                list={osList}
                                onSelect={(value) => { this.setValue('system', value[0]) } }
                                listKey='id'
                                listValue='name'
                                />
                        </div>
                    </div>
                </div>

                { /** submit button calling the validate function */}
                <div style={{ width: '100%', textAlign: 'center', marginTop: '20px', display: this.props.hideButton ? 'none' : 'inherit' }}>
                    <div ref={ref => { this._submit = ref; } } className="button button--disabled" onClick={() => { this.onSubmit() } }>
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}