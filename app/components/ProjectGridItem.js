var React = require('react')
var PropTypes = require('prop-types')

function ProjectGridItem ({ project }) {
  var fieldList = project.fields.join(', ')

  return (
    <li className='project-card' key={project.id}>
      <img
        className='project-card__image'
        src={project.covers['230']}
        alt={'Project cover for ' + project.name} />

      <div className='project-card__details'>
        <h3 className='project-card__title'><a href={project.url}>{project.name}</a></h3>
        <p className='project-card__owner'>By: <a href={project.owners[0].url}>{project.owners[0].first_name} {project.owners[0].last_name}</a></p>
        <p>Field(s): {fieldList}</p>

        <ul className='project-card__stats'>
          <li>{project.stats.appreciations} appreciations</li>
          <li>{project.stats.views} views</li>
          <li>{project.stats.comments} comments</li>
        </ul>
      </div>
    </li>
  )
}

ProjectGridItem.propTypes = {
  project: PropTypes.object.isRequired
}

module.exports = ProjectGridItem
