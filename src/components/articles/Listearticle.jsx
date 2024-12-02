import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Listearticle = () => {
  const[articles,setArticles]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  const fetcharticles=async()=>{
    await axios.get("http://localhost:3001/api/articles")
    .then(res=>{
      setArticles(res.data)
      setIsLoading(false)
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetcharticles()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer l'article")){
    await axios.delete(`http://localhost:3001/api/articles/${id}`)
    .then(res=>{
      setArticles(articles.filter(cat=>cat._id!=id))
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }}

  if(isLoading){
    return <div>En cours de chargement</div>
  }

  return (
    <div>
      <Link to="/articles/add"><button className='btn btn-sm btn-success'><i class="fa-solid fa-circle-plus"></i>Ajouter</button></Link>
      <h1>Liste Articles</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Designation</th>
            <th>Image</th>
            <th>Marque</th>
            <th>Prix</th>
            <th>QteStock</th>
            <th>Reference</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((cat,index)=>
            <tr key={index}>
              <td>{cat.designation}</td>
              <td><img src={cat.imageart} width={200} height={100}/></td>
              <td>{cat.marque}</td>
              <td>{cat.prix}</td>
              <td>{cat.qtestock}</td>
              <td>{cat.reference}</td>
              <td><Link to={`/articles/edit/${cat._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i>Update</button></Link></td>
              <td><button className='btn btn-sm btn-danger'onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listearticle
