import React from 'react'
import "./Book.css"
const Book = (props) => {
    const{ name, author, description, price, image} = props.book;
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>${price}</h2>
        <button sx={{mt:"auto"}}>Update</button>
        <button sx={{mt:"auto"}}>Delete</button>
    </div>
  )
}

export default Book