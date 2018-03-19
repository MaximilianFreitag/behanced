import React from 'react'
import PropTypes from 'prop-types'

import ProjectGridItem from './ProjectGridItem'

export default function ProjectGrid ({ projects, allFields }) {
  return (
    <ul className='project-grid'>
      {projects.map((project) => {
        return (
          <ProjectGridItem
            project={project}
            allFields={allFields}
            key={project.id}
          />
        )
      })}
    </ul>
  )
}

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired,
  allFields: PropTypes.array.isRequired
}
