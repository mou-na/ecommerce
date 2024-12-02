import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Listcategorie = () => {
  const[categories,setCategories]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  const fetchcategories=async()=>{
    await axios.get("http://localhost:3001/api/categories")
    .then(res=>{
      setCategories(res.data)
      setIsLoading(false)
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchcategories()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer la categorie")){
    await axios.delete(`http://localhost:3001/api/categories/${id}`)
    .then(res=>{
      setCategories(categories.filter(cat=>cat._id!=id))
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
      <Link to="/categorie/add"><button className='btn btn-sm btn-success'><i class="fa-solid fa-circle-plus"></i>Ajouter</button></Link>
      <h1>Liste Categories</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom categorie</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat,index)=>
            <tr key={index}>
              <td>{cat.nomcategorie}</td>
              <td><img src={cat.imagecategorie} width={200} height={100}/></td>
              <td><Link to={`/categorie/edit/${cat._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i>Update</button></Link></td>
              <td><button className='btn btn-sm btn-danger'onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listcategorie
