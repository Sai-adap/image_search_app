import React from 'react'
import ImageSearch from './Imagessearch'
import "./style.css"
import { useState } from 'react'
const Image = () => {
  const[book,setBook]=useState("")
    const bookmark = async (e) => {
        e.preventDefault();
        setBook()
      };
  return (
    <div className="container">
        <h1 className="body">React Photo Search</h1>
        <span><button className='bookmark' onClick={bookmark} value={book}>Bookmark</button>
        </span>
        <ImageSearch/>
      </div>
  )
}

export default Image