var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')

function ProjectGridItem ({ project, allFields }) {
  var projectFields = project.fields
  var timestamp = project.published_on

  // Grab ID to create individual URL for each field tag
  var projectFieldsWithIds = projectFields.map(function (projectField) {
    var fieldObj = {}
    allFields.forEach(function (field) {
      if (projectField === field.name) {
        fieldObj['id'] = field.id
        fieldObj['name'] = projectField
      }
    })
    return fieldObj
  })

  // Published date
  var pubDate = new Date(timestamp * 1000)
  var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  var formattedPubDate = months[pubDate.getMonth()] + ' '
  + pubDate.getDate() + ', ' + pubDate.getFullYear()

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

        {projectFieldsWithIds.map(function (field, index) {
          return (
            <a className={'project-card__field' + (index + 1) + ' project-card__field'} href={'https://www.behance.net/search?field=' + field.id}>{field.name}</a>
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

      <div className='project-card__published-date'>
        <p>Published: {formattedPubDate}</p>
      </div>

      <div className='project-card__highlight'></div>
    </li>
  )
}

ProjectGridItem.propTypes = {
  project: PropTypes.object.isRequired
}

module.exports = ProjectGridItem
