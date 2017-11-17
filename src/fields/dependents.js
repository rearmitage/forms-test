import React, { Component } from 'react'
import RadioButton from 'formsy-material-ui/lib/FormsyRadio'
import TextField from 'formsy-material-ui/lib/FormsyText'
import RadioGroup from 'formsy-material-ui/lib/FormsyRadioGroup'

class Dependents extends Component {
    state = {
        hasDependents: false
    }

    handleChange = (e, value) => {
        const hasDependents = value ==='yes' ? true : false
        this.setState({hasDependents})
    }
    render() {
        const { hasDependents } = this.state
        return (
            <div>
                <h2>Dependents</h2>
                <RadioGroup
                    name='Testingdfs'
                    onChange={this.handleChange}
                >
                    <RadioButton
                        value="yes"
                        label="Yes"
                        name='yes'
                    />
                    <RadioButton
                        value="no"
                        label="No"
                        name='no'
                    />
                </RadioGroup>
                {hasDependents && (
                    <div>
                        <TextField
                            name='numberOfDependents'
                            floatingLabelText='Number of Dependents'
                            required
                        />
                        <TextField
                            name='ages'
                            floatingLabelText='Ages seperated by comma'
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Dependents