var React = require('react')
var PropTypes = require('prop-types')

function ProjectGridItem ({ project }) {
  var fields = project.fields

  return (
    <li className='project-card' key={project.id}>
      <div className='project-card__visual'>
        <a className='project-card__image-link' href={project.url}>
          <img
            className='project-card__image'
            src={project.covers['230']}
            alt={'Project cover for ' + project.name} />
          <div className='project-card__image-overlay'></div>
        </a>

        {fields.map(function (field, index) {
          return (
            <a className={'project-card__field' + (index + 1) + ' project-card__field'} href={project.url}>{field}</a>
          )
        })}
      </div>

      <div className='project-card__details'>
        <h3 className='project-card__title'><a href={project.url}>{project.name}</a></h3>
        <p className='project-card__owner'>By: <a href={project.owners[0].url}>{project.owners[0].first_name} {project.owners[0].last_name}</a></p>

        <ul className='project-card__stats'>
          <li>{project.stats.appreciations} appreciations</li>
          <li>{project.stats.views} views</li>
          <li>{project.stats.comments} comments</li>
        </ul>
      </div>

      <div className='project-card__highlight'></div>
    </li>
  )
}

ProjectGridItem.propTypes = {
  project: PropTypes.object.isRequired
}

module.exports = ProjectGridItem
