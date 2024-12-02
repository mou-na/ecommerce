import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'

const Listarticlescard = () => {
    const[articles,setArticles]=useState([])

    const fetcharticles=async()=> {
        try{
            const res=await axios.get(`http://localhost:3001/api/articles`)
            setArticles(res.data)
          }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetcharticles()
      },[])

  return (
    <div className='container'>
        <h1>Liste Articles Card</h1>
        <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
            {
                articles.map((art,index)=>
                    <Cards article={art} key={index}/>
                )
            }
        </div>
    </div>
  )
}

export default Listarticlescard

