var React = require('react')
var PropTypes = require('prop-types')
var ProjectGridItem = require('./ProjectGridItem')

function ProjectGrid ({ projects, allFields }) {
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

module.exports = ProjectGrid
