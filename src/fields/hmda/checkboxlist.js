import React, { Component } from 'react'
import Checkbox from 'formsy-material-ui/lib/FormsyCheckbox'
import TextField from 'formsy-material-ui/lib/FormsyText'
// import TextField from 'material-ui/TextField'

// const styles = {
//     checkbox: {
//       marginBottom: 16,
//     },
// }

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
                    {checked && React.Children.map(children, (child, i) => {
                        console.log(child.props.name)
                        if (child.props.name === 'other') {
                            return (
                                <div>
                                    {child}
                                    <TextField
                                        hintText="Your choice"
                                        name='otherMother'
                                    />
                                </div>
                            )
                        }
                        return child
                    })}
                </div>
            </div>
        )
    }
}

export default CheckboxList