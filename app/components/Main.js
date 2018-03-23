import React, { Component } from 'react'
import { fetchProjects, fetchAllFields } from '../utils/api'

import Logo from '../assets/logos/behanced-logo.svg'
import FieldMenu from './FieldMenu/FieldMenu'
import Loading from './Loading'
import ProjectGrid from './ProjectGrid'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedField: '',
      popularFields: [
        'Architecture',
        'Art Direction',
        'Branding',
        'Fashion',
        'Graphic Design',
        'Illustration',
        'Photography',
        'UI/UX',
        'Web Design'
      ],
      allFields: null,
      allOtherFields: null,
      projects: null
    }

    this.updateField = this.updateField.bind(this)
  }

  componentDidMount () {
    this.updateField(this.state.selectedField)

    fetchAllFields()
      .then((fields) => {
        const allOtherFields = fields.filter((field) => this.state.popularFields.indexOf(field.name) === -1)

        this.setState(() => ({
          allFields: fields,
          allOtherFields: allOtherFields
        }))
      })
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
    const { selectedField, popularFields, allFields, allOtherFields, projects } = this.state

    return (
      <div className='main'>
        <div className='logo'>
          <a href='/'>
            <Logo width={250} />
          </a>
        </div>
        <FieldMenu
          selectedField={selectedField}
          popularFields={popularFields}
          allOtherFields={allOtherFields}
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
