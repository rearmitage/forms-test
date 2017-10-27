import React, { Component } from 'react'
import Formsy from 'formsy-react'
import FormsyCheckbox from 'formsy-material-ui/lib/FormsyCheckbox'
import FormsyDate from 'formsy-material-ui/lib/FormsyDate'
import FormsyRadio from 'formsy-material-ui/lib/FormsyRadio'
import FormsyRadioGroup from 'formsy-material-ui/lib/FormsyRadioGroup'
import FormsySelect from 'formsy-material-ui/lib/FormsySelect'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import FormsyTime from 'formsy-material-ui/lib/FormsyTime'
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle'
import FormsyAutoComplete from 'formsy-material-ui/lib/FormsyAutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'

const styles = {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
}

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
}

class TestForm extends Component {

    state = {
        canSubmit: false
    }

    enableButton = () => {
        this.setState({
          canSubmit: true,
        })
      }
    
      disableButton = () => {
        this.setState({
          canSubmit: false,
        })
      }
    
      submitForm = (data) => {
        alert(JSON.stringify(data, null, 4));
      }
    
      notifyFormError = (data) => {
        console.error('Form error:', data);
      }
    
    render() {
        const { paperStyle, switchStyle, submitStyle } = styles
        const { wordsError, numericError, urlError } = errorMessages
        return(
            <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError}
            >
                <FormsyDate
                    name="date"
                    required
                    floatingLabelText="Date"
                    fullWidth
                />
                    <FormsyTime
                    name="time"
                    required
                    floatingLabelText="Time"
                    fullWidth
                />
                <FormsySelect
                    name="frequency"
                    required
                    floatingLabelText="How often do you?"
                    fullWidth
                >
                    <MenuItem value={'never'} primaryText="Never" />
                    <MenuItem value={'nightly'} primaryText="Every Night" />
                    <MenuItem value={'weeknights'} primaryText="Weeknights" />
                </FormsySelect>
                <FormsyAutoComplete
                    name="frequency-auto-complete"
                    required
                    floatingLabelText="How often do you?"
                    fullWidth
                    dataSource={[
                        'Never',
                        'Every Night',
                        'Weeknights',
                    ]}
                />
                <FormsyCheckbox
                    name="agree"
                    label="Do you agree to disagree?"
                    style={switchStyle}
                    fullWidth
                />
                <FormsyToggle
                    name="toggle"
                    label="Toggle"
                    style={switchStyle}
                />
                <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light" fullWidth>
                    <FormsyRadio
                        value="light"
                        label="prepare for light speed"
                        style={switchStyle}
                    />
                    <FormsyRadio
                        value="not_light"
                        label="light speed too slow"
                        style={switchStyle}
                    />
                    <FormsyRadio
                        value="ludicrous"
                        label="go to ludicrous speed"
                        style={switchStyle}
                        disabled={true}
                    />
                </FormsyRadioGroup>
                <FormsyText
                    name="name"
                    validations="isWords"
                    validationError={wordsError}
                    required
                    hintText="What is your name?"
                    floatingLabelText="Name"
                    fullWidth
                />
                <FormsyText
                    name="age"
                    validations="isNumeric"
                    validationError={numericError}
                    hintText="Are you a wrinkly?"
                    floatingLabelText="Age (optional)"
                    fullWidth
                />
                <FormsyText
                    name="url"
                    validations="isUrl"
                    validationError={urlError}
                    required
                    hintText="http://www.example.com"
                    floatingLabelText="URL"
                    updateImmediately
                    fullWidth
                />
                <RaisedButton
                    style={submitStyle}
                    type="submit"
                    label="Submit"
                    disabled={!this.state.canSubmit}
                />
            </Formsy.Form>
        )
    }
}

export default TestForm