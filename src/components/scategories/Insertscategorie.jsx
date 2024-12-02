import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom'

const Insertscategorie = () => {

  const[scategorie,setScategorie]=useState({})
  const navigate=useNavigate()

  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post(`http://localhost:3001/api/scategories`,scategorie)
    .then(res=>{
      navigate("/scategorie")
    })
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Insertion Sous Categorie</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nom S/Categorie</Form.Label>
        <Form.Control type="text"
        value={scategorie.nomcategorie}
        onChange={(e)=>setScategorie({...scategorie,nomscategorie:e.target.value})}/>

        <Form.Label>Image S/Categorie</Form.Label>
        <Form.Control type="text"
        value={scategorie.imagecategorie}
        onChange={(e)=>setScategorie({...scategorie,imagescategorie:e.target.value})}/>
      </Form.Group>
    </Form>
    <button className='btn btn-sm btn-success' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i>Enregister</button>
    <Link to="/scategorie"><button className='btn btn-sm btn-danger'><i class="fa-solid fa-right-from-bracket"></i>Annuler</button></Link>
    </div>
  )
}

export default Insertscategorie
