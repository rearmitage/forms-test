import React, { Component } from 'react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'

class MoneyField extends Component {

    state = {
        value: ''
    }
    
    handeleChange = (s, value) => {
        const t = value * 1
        // console.log(value)
        // console.log(isNaN(value))
        // if (isNaN(value)) {
        //     return
        // } else {
        //     this.setState({value})
        // }
        console.log(t)
        value = 'Test' + value
        this.setState({value})
    }

    render() {
        return (
            <FormsyText
                name="name"
                validations="isWords"
                value={this.state.value}
                onChange={this.handeleChange}
                required
                hintText="What is your name?"
                floatingLabelText="Money"
                fullWidth
            />
        )}
}

export default MoneyField