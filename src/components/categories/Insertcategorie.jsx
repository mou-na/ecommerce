import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom'

const Insertcategorie = () => {
  const[categorie,setCategorie]=useState({})
  const navigate=useNavigate()

  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post(`http://localhost:3001/api/categories`,categorie)
    .then(res=>{
      navigate("/categories")
    })
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Insertion Categorie</h1>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nom Categorie</Form.Label>
        <Form.Control type="text"
        value={categorie.nomcategorie}
        onChange={(e)=>setCategorie({...categorie,nomcategorie:e.target.value})}/>

        <Form.Label>Image Categorie</Form.Label>
        <Form.Control type="text"
        value={categorie.imagecategorie}
        onChange={(e)=>setCategorie({...categorie,imagecategorie:e.target.value})}/>
      </Form.Group>
    </Form>
    <button className='btn btn-sm btn-success' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i>Enregister</button>
    <Link to="/categories"><button className='btn btn-sm btn-danger'><i class="fa-solid fa-right-from-bracket"></i>Annuler</button></Link>
    </div>
  )
}

export default Insertcategorie
