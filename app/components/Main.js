import React, { Component } from 'react'
import { fetchProjects, fetchAllFields } from '../utils/api'

import Logo from './Logo'
import FieldMenu from './FieldMenu'
import Loading from './Loading'
import ProjectGrid from './ProjectGrid'

class Main extends Component {
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

    fetchAllFields()
      .then((fields) => this.setState(() => ({ allFields: fields })))
  }

  updateField (field) {
    this.setState(() => ({
      selectedField: field,
      projects: null
    }))

    fetchProjects(field)
      .then((projects) => this.setState(() => ({ projects })))
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
          ? <Loading />
          : <ProjectGrid
              projects={projects}
              allFields={allFields}
            />
        }
      </div>
    )
  }
}

export default Main
