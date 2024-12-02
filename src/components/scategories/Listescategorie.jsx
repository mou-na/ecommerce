import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Listescategorie = () => {
  const[scategories,setScategories]=useState([])
  const[isLoading,setIsLoading]=useState(true)

  const fetchscategories=async()=>{
    await axios.get("http://localhost:3001/api/scategories")
    .then(res=>{
      setScategories(res.data)
      setIsLoading(false)
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchscategories()
  },[])

  const handleDelete=async(id)=>{
    if(window.confirm("etes vous sure de vouloir supprimer la S/categorie")){
    await axios.delete(`http://localhost:3001/api/scategories/${id}`)
    .then(res=>{
      setScategories(scategories.filter(cat=>cat._id!=id))
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
      <Link to="/scategorie/add"><button className='btn btn-sm btn-success'><i class="fa-solid fa-circle-plus"></i>Ajouter</button></Link>
      <h1>Liste Sous Categories</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom S/categorie</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scategories.map((scat,index)=>
            <tr key={index}>
              <td>{scat.nomscategorie}</td>
              <td><img src={scat.imagescategorie} width={200} height={100}/></td>
              <td><Link to={`/scategorie/edit/${scat._id}`}><button className='btn btn-sm btn-warning'><i class="fa-regular fa-pen-to-square"></i>Update</button></Link></td>
              <td><button className='btn btn-sm btn-danger'onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Listescategorie

