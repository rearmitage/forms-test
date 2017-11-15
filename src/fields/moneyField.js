import React, { Component } from 'react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import masker from "vanilla-masker/lib/vanilla-masker"

class MoneyField extends Component {

    state = {
        value: ''
    }
    
    componentWillMount() {
        let { value } = this.props
        value = value * 100
        value = masker.toMoney(value, {
            separator: '.',
            delimiter: ',',
            unit: '$',
        })
        this.setState({ value })
    }

    handeleChange = (e, value) => {
        if (value === '') {
            this.setState({ value: '' })
        }
        const opts = {
            separator: '.',
            delimiter: ',',
            unit: '$',
        }
        value = masker.toMoney(value, opts)
        // value = parseFloat(displayValue.split(' ')[1].split(',').join(''))
        this.setState({ value })
    }

    render() {
        return (
            <FormsyText
                {...this.props}
                value={this.state.value}
                onChange={this.handeleChange}
            />
        )}
}

export default MoneyField