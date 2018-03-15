var React = require('react')
var api = require('../utils/api')
var Logo = require('./Logo')
var FieldMenu = require('./FieldMenu')
var ProjectGrid = require('./ProjectGrid')

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
        console.log('projects:', projects)

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
        <Logo />

        <FieldMenu
          selectedField={this.state.selectedField}
          onSelect={this.updateField} />

        {!this.state.projects
          ? <p>Loading...</p>
          : <ProjectGrid projects={this.state.projects} />}
      </div>
    )
  }
}

module.exports = Main
