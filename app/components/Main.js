var React = require('react')
var FieldMenu = require('./FieldMenu')
var api = require('../utils/api')

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedField: '',
      projects: null
    }

    this.updateField = this.updateField.bind(this)
  }

  componentDidMount () {
    this.updateField(this.state.selectedField)
  }

  updateField (field) {
    this.setState(function () {
      return {
        selectedField: field,
        projects: null
      }
    })

    api.fetchProjects(field)
      .then(function (projects) {
        this.setState(function () {
          return {
            projects: projects
          }
        })
      }.bind(this))
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
