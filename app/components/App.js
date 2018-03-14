var React = require('react')
var Main = require('./Main')

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Main />
      </div>
    )
  }
}

module.exports = App
