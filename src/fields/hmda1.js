import React, { Component } from 'react'
import Checkbox from 'formsy-material-ui/lib/FormsyCheckbox'
import masker from "vanilla-masker/lib/vanilla-masker"

const styles = {
    checkbox: {
      marginBottom: 16,
    },
  };

class CheckboxList extends Component {

    state = {
        checked: false,
    }

    updateCheck = () => {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          }
        })
    }

    render() {
        const { children, ...rest } = this.props
        const { checked } = this.state
        return(
            <div>
                 <Checkbox
                    onChange={this.updateCheck}
                    {...rest}
                />
                <div style={{ marginLeft: 20 }}>
                    {checked && React.Children.map(children, (child, i) => child)}
                </div>
            </div>
        )
    }
}

export default CheckboxList