import React from 'react'
import PropTypes from 'prop-types'

// Font Awesome icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'

// Numeral.js library to format stats
import numeral from 'numeral'

export default function ProjectGridItem ({ project, allFields }) {
  // Project variables
  const { id, name, owners, published_on, stats, url } = project
  const projectFields = project.fields

  // Grab project ID to create individual URL for each field tag
  const projectFieldsWithIds = projectFields.map((projectField) => {
    const fieldObj = {}
    allFields.forEach(({ id, name }) => {
      if (projectField === name) {
        fieldObj.id = id
        fieldObj.name = projectField
      }
    })
    return fieldObj
  })

  // Get stats in user-friendly format
  const formatStatCount = (count) => {
    return (count < 1000)
      ? numeral(count).format('0,0')
      : numeral(count).format('0.0a')
  }
  const appreciationCount = formatStatCount(stats.appreciations)
  const viewCount = formatStatCount(stats.views)
  const commentCount = formatStatCount(stats.comments)

  // Get published date
  const pubDate = new Date(published_on * 1000)
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
  const formattedPubDate = months[pubDate.getMonth()] + ' ' + pubDate.getDate() + ', ' + pubDate.getFullYear()

  return (
    <li className='project-card' key={id}>
      <div className='project-card__visual'>
        <a className='project-card__image-link' href={url}>
          <img
            className='project-card__image'
            src={project.covers['230']}
            alt={'Project cover for ' + name} />
          <div className='project-card__image-overlay'></div>
        </a>

        {projectFieldsWithIds.map(({ id, name }, index) => {
          return (
            <a className={'project-card__field' + (index + 1) + ' project-card__field'} href={'https://www.behance.net/search?field=' + id}>{name}</a>
          )
        })}
      </div>

      <div className='project-card__details'>
        <h3 className='project-card__title'><a href={url}>{name}</a></h3>

        <div className='project-card__owner'>
          <img
            className='project-card__owner-avatar'
            src={owners[0].images['50']}
            alt={'Avatar for ' + name} />
          <a href={owners[0].url}>{owners[0].display_name}</a>
        </div>
      </div>

      <div className='project-card__published-date'>
        <p>Published: {formattedPubDate}</p>
      </div>

      <div className='project-card__stats'>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faThumbsUp} />
          <a href={url}>{appreciationCount}</a>
        </div>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faEye} />
          <a href={url}>{viewCount}</a>
        </div>
        <div className='project-card__stats-item'>
          <FontAwesomeIcon icon={faComment} />
          <a href={url}>{commentCount}</a>
        </div>
      </div>

      <div className='project-card__highlight'></div>
    </li>
  )
}

ProjectGridItem.propTypes = {
  project: PropTypes.object.isRequired
}
