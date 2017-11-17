import React, {Component} from 'react'
// import SelectField from 'material-ui/SelectField'
import SelectField from 'formsy-material-ui/lib/FormsySelect'
import MenuItem from 'material-ui/MenuItem'

const persons = [
  {value: 0, name: 'Oliver Hansen'},
  {value: 1, name: 'Van Henry'},
  {value: 2, name: 'April Tucker'},
  {value: 3, name: 'Ralph Hubbard'},
  {value: 4, name: 'Omar Alexander'},
  {value: 5, name: 'Carlos Abbott'},
  {value: 6, name: 'Miriam Wagner'},
  {value: 7, name: 'Bradley Wilkerson'},
  {value: 8, name: 'Virginia Andrews'},
  {value: 9, name: 'Kelly Snyder'},
]

export default class SelectFieldExample extends Component {
  state = {
    // values: [],
  }

  handleChange = (e, values) => this.setState({ values })

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return ''
      case 1:
        return values[0].name
      default:
        return `${values.length} names selected`
    }
  }

  menuItems(persons) {
    // const { values } = this.state
    return persons.map((person, i) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        value={person}
        primaryText={person.name}
      />
    ))
  }

  render() {
    return (
      <SelectField
        name='people'
        multiple={true}
        hintText="Select a name"
        value={this.state.values}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
        style={{marginTop: 14}}
        fullWidth
      >
        {this.menuItems(persons)}
      </SelectField>
    )
  }
}

// checked={values[i] ? values[i].value.indexOf(person.value) > -1 : false}

