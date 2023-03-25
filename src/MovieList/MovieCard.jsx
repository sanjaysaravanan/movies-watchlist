import React from 'react';

const MovieCard = ({
  tech = '2D',
  title = '',
  lang = 'English',
  rating = 'U'
}) => {
  return (
    <div>
      Movie: {title}
      Tech: {tech}
      Language: {lang}
      Rating: {rating}
    </div>
  )
}

export default MovieCard;