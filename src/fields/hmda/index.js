import React, { Component } from 'react'
import CheckboxList from './checkboxlist'
import Checkbox from 'formsy-material-ui/lib/FormsyCheckbox'

const styles = {
    checkbox: {
      marginBottom: 16,
    }
}

// const races = [
//     {
//         name: 'White',
//         subCatagories: ['Scottish', 'Irish']
//     },
//     {
//         name: 'Hispanic',
//         subCatagories: ['puertorican', 'hispanic', 'spanish', 'other']
//     },
//     {
//         name: 'NativeAmerican',
//         subCatagories: ['other']
//     }
// ]


class Hdma extends Component {
    render() {
        const { fields } = this.props
        return(
            <div>
                <h2>Races</h2>
                {fields.map((field, i) => (
                    <CheckboxList
                        key={i}
                        label={field.name}
                        style={styles.checkbox}
                        name={field.name}
                    >
                        {field.subCatagories.map((catagory, index) => (
                            <Checkbox
                                key={index}
                                label={catagory}
                                style={styles.checkbox}
                                name={catagory}
                            />
                        ))}
                    </CheckboxList>
                ))}
            </div>
        )
    }
}


export default Hdma