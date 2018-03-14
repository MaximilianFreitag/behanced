var React = require('react')
var FieldMenu = require('./FieldMenu')

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedField: 'All'
    }

    this.updateField = this.updateField.bind(this)
  }

  updateField (field) {
    this.setState(function () {
      return {
        selectedField: field
      }
    })
  }

  render () {
    return (
      <div>
        <FieldMenu
          selectedField={this.state.selectedField}
          onSelect={this.updateField} />
      </div>
    )
  }
}

module.exports = Main
