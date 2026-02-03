import React from 'react'

const ResultCard = ({title,src}) => {
  return (
    <div>
          <h1>{title}</h1>
          <div>
            <img src={src} alt="" />
            <div>
              <p>Aired : </p>
              <p>Rating:</p>
              <p>Rank :</p>
              <p>Score : </p>
          
            </div>
          </div>
    </div>
  )
}

export default ResultCard
