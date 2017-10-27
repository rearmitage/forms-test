import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Test from './forms/test2'

injectTapEventPlugin()

const styles = {
  margin: 50,
  padding: 50
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper zDepth={1} style={styles}>
          <Test />
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App
