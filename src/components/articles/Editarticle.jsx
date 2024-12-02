import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Editarticle = () => {
  const[article,setArticle]=useState({})
  const navigate=useNavigate()
  const[scat,setScat]=useState([])
  const {id}=useParams()
  const loadscategorie=async()=>{
    try{
      const res=await axios.get(`http://localhost:3001/api/scategories`)
      setScat(res.data)
    }catch(error){
      console.log(error)
    }
  }

  const handleUpdate=async(e)=>{
    try{
      e.preventDefault()
      await axios.put(`http://localhost:3001/api/articles/${id}`,article)
    .then(res=>{
      navigate("/articles")
    })
    } catch(error){
      console.log(error)
    }
  }

  const loadarticle=async(id)=>{
    try{
      const res=await axios.get(`http://localhost:3001/api/articles/${id}`)
      setArticle(res.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    loadscategorie()
    loadarticle(id)
  },[])
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Modifier Article</h1>
      <Form>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Reference</Form.Label>
        <Form.Control type="text"
        value={article.reference}
        onChange={(e)=>setArticle({...article,reference:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text"
        value={article.designation}
        onChange={(e)=>setArticle({...article,designation:e.target.value})}/>
      </Form.Group>
        </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Marque</Form.Label>
        <Form.Control type="text"
        value={article.marque}
        onChange={(e)=>setArticle({...article,marque:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="text"
        value={article.prix}
        onChange={(e)=>setArticle({...article,prix:e.target.value})}/>
      </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Quantite Stock</Form.Label>
        <Form.Control type="text"
        value={article.qtestock}
        onChange={(e)=>setArticle({...article,qtestock:e.target.value})}/>
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Image Article</Form.Label>
        <Form.Control type="text"
        value={article.imageart}
        onChange={(e)=>setArticle({...article,imageart:e.target.value})}/>
      </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>S/categorie ID</Form.Label>
        <Form.Control type="select" as="select"
        value={article.scategorieID}
        onChange={(e)=>setArticle({...article,scategorieID:e.target.value})}>
        {
          scat.map((sc,index)=>
          <option value={sc._id}>{sc.nomscategorie}</option>
        )
        }
        </Form.Control>
      </Form.Group>
      </Row>
    </Form>
    <button className='btn btn-sm btn-success' onClick={(e)=>handleUpdate(e)}><i class="fa-solid fa-floppy-disk"></i>Enregister</button>
    <Link to="/articles"><button className='btn btn-sm btn-danger'><i class="fa-solid fa-right-from-bracket"></i>Annuler</button></Link>
    
    </div>
  )
}

export default Editarticle
