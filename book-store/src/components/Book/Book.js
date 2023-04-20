import React from 'react'
import "./Book.css"
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import axios from 'axios';
const Book = (props) => {
    const{_id, name, author, description, price, image} = props.book;
    const history = useNavigate();
    const deleteHandler = async ()=>{
     await axios.delete(`http://localhost:5000/books/${_id}`)
     .then(res=> res.data)
     .then(() => history("/"))
     .then(() => history("/books"));
    }
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>${price}</h2>
        <Link to={`/books/${_id}`} LinkComponent={Button} sx={{ mt: "auto" }}>
          Update
        </Link>
        
        <button onClick={deleteHandler} sx={{mt:"auto"}}>Delete</button>
    </div>
  )
}

export default Book