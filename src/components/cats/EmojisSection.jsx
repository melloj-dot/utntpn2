import React from 'react'
import './EmojisSection.css';

function EmojisSection() {
  return (
    <div className="row">
      <div className="col-md-4" >
        <p className='emojis'>🐱</p>
      </div>
      <div className="col-md-4">
       <p className='emojis'>🐈</p>
      </div>
      <div className="col-md-4">
       <p className='emojis'>😸</p>
      </div>
    </div>
  )
}

export default EmojisSection