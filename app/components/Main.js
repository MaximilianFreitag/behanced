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
      projects: null,
      allFields: null
    }

    this.updateField = this.updateField.bind(this)
  }

  componentDidMount () {
    this.updateField(this.state.selectedField)
    this.fetchAllFields()
  }

  updateField (field) {
    this.setState(() => ({
      selectedField: field,
      projects: null
    }))

    api.fetchProjects(field)
      .then((projects) => this.setState(() => ({ projects })))
  }

  fetchAllFields () {
    api.fetchAllFields()
      .then((fields) => this.setState(() => ({ allFields: fields })))
  }

  render () {
    const { selectedField, projects, allFields } = this.state

    return (
      <div>
        <Logo />
        <FieldMenu
          selectedField={selectedField}
          onSelect={this.updateField} />

        {
          !projects
          ? <p>Loading...</p>
          : <ProjectGrid
              projects={projects}
              allFields={allFields}
            />
        }
      </div>
    )
  }
}

module.exports = Main
