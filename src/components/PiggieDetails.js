import React from 'react'

function PiggieDetails({ hog }) {
  const { greased, weight, "highest medal achieved": medal } = hog
  return (
    <div>
      <b>{greased ? 'Greased' : 'Nongreased'}</b>
      <p>
        Highest medal achived: <b>{medal}</b>
      </p>
      <p>
       Weight: <b>{weight}</b>
      </p>
    </div>
  )
}

export default PiggieDetails