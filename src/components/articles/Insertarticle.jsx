import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';

const Insertarticle = () => {
  const[scat,setScat]=useState([])
  const[article,setArticle]=useState({})
const navigate=useNavigate()
  const loadscatgorie=async()=>{
    try {
      const res=await axios.get("http://localhost:3001/api/scategories")
      setScat(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadscatgorie()
  },[])
  const handleSave=async(e)=>{
    try {
      e.preventDefault()
      await axios.post("http://localhost:3001/api/articles",article)
      .then(res=>{
        navigate("/articles")
      })

      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h2>Insertion article</h2></center>
      <Form>
      <Row className="mb-2">

      <Form.Group as={Col} md="6" >
        <Form.Label>RÃ©fÃ©rence</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="RÃ©fÃ©rence" 
        value={article.reference}
        onChange={(e)=>setArticle({...article,reference:e.target.value})}
        />
      </Form.Group>

      <Form.Group as={Col} md="6" >
        <Form.Label>DÃ©signation</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="DÃ©signation" 
        value={article.designation}
        onChange={(e)=>setArticle({...article,designation:e.target.value})}
        />
      </Form.Group>
</Row>
<Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Marque</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Marque" 
        value={article.marque}
        onChange={(e)=>setArticle({...article,marque:e.target.value})}
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Prix</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Prix" 
        value={article.prix}
        onChange={(e)=>setArticle({...article,prix:e.target.value})}
        />
      </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Stock</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Stock" 
        value={article.qtestock}
        onChange={(e)=>setArticle({...article,qtestock:e.target.value})}
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Image" 
        value={article.imageart}
        onChange={(e)=>setArticle({...article,imageart:e.target.value})}
        />
      </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6">
        <Form.Label>Sous catÃ©gorie</Form.Label>
        <Form.Control 
        type="select"
        as="select" 
        placeholder="Sous catÃ©gorie" 
        value={article.scategorieID}
        onChange={(e)=>setArticle({...article,scategorieID:e.target.value})}
        >
          {
            scat.map((sc,index)=>
            <option value={sc._id}>{sc.nomscategorie}</option>
            
            )
          }
          </Form.Control>
      </Form.Group>
      </Row>

      <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}>Enregistrer</button>
      &nbsp;
     <Link to="/articles"> <button className='btn btn-danger btn-sm'>Annuler</button></Link>
    </Form>
    </div>
  )
}

export default Insertarticle

