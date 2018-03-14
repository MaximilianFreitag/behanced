var React = require('react')
var PropTypes = require('prop-types')
var ProjectGridItem = require('./ProjectGridItem')

function ProjectGrid ({ projects }) {
  return (
    <ul className='project-grid'>
      {projects.map(function (project) {
        return (
          <ProjectGridItem
            project={project}
            key={project.id}
          />
        )
      })}
    </ul>
  )
}

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired
}

module.exports = ProjectGrid
