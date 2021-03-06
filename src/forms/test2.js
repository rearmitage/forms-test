import React, { Component } from 'react'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import RaisedButton from 'material-ui/RaisedButton'
import MoneyField from '../fields/moneyField'
import Hmda from '../fields/hmda'
import Select from '../fields/select'
import Dependents from '../fields/dependents'


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

const races = [
    {
        name: 'White',
        subCatagories: ['Scottish', 'Irish']
    },
    {
        name: 'Hispanic',
        subCatagories: ['puertorican', 'hispanic', 'spanish', 'other']
    },
    {
        name: 'NativeAmerican',
        subCatagories: ['other']
    }
]

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    // urlError: "Please provide a valid URL",
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
        alert(JSON.stringify(data, null, 4))
      }
    
      notifyFormError = (data) => {
        console.error('Form error:', data)
      }
    
    render() {
        const { submitStyle } = styles
        const { wordsError, numericError } = errorMessages
        return(
            <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError}
            >
                <FormsyText
                    name="name"
                    validations="isWords"
                    validationError={wordsError}
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
                <MoneyField 
                    name="money"
                    hintText="How much is this?"
                    floatingLabelText="Money"
                    value={'1000'}
                    fullWidth
                />
                <Select />
                <Hmda
                    fields={races}
                />
                <Dependents />
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