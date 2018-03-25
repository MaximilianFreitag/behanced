import React, { Component } from 'react'
import { fetchProjects, fetchAllFields } from '../../utils/api'

import Logo from '../../assets/img/behanced-logo.svg'
import FieldNav from '../FieldNav/FieldNav'
import ProjectGrid from '../ProjectGrid/ProjectGrid'

function Loading () {
  return (
    <div className='spinner'>
      <div className='bounce1 bounce'></div>
      <div className='bounce2 bounce'></div>
      <div className='bounce3 bounce'></div>
    </div>
  )
}

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedField: '',
      allFields: null,
      projects: null
    }

    this.updateField = this.updateField.bind(this)
  }

  componentDidMount () {
    this.updateField(this.state.selectedField)

    fetchAllFields()
      .then((allFields) => this.setState(() => ({ allFields })))
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
    const { selectedField, allFields, projects } = this.state

    return (
      <div className='main'>
        <div className='logo'>
          <a href='/'>
            <Logo width={250} />
          </a>
        </div>
        <FieldNav
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
