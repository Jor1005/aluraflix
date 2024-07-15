import './index.css'
import Nav from '../../componentes/Nav'
import Banner from '../../componentes/Banner';
import Category from '../../componentes/Categories';
import GlobalStyles from '../../componentes/GlobalStyles';
import { useState, useContext, useEffect } from 'react';
import videos from '../../data/db.json'

// aca ira el formulario

const categories = [

  {
    title:"FRONTEND",
    color:"#6BD1FF"
  },
  {
    title:"BACKEND",
    color:"#00C86F"
  },
  {
    title:"INOVACIÓN Y GESTIÓN",
    color:"#FFBA05"
  },
]

  const [videos, setvideos] = useState([])

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Jor1005/aluraflix/videos")
    .then(Response=> Response.json())
    .then(data=>{
    setvideos(data)
  })
  },[])
  

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Nav/>
      <Banner/>
      <div>
       {
         categories.map((category) => <Category 
         data={category} 
         key={category.title}/>
         )
       }
      </div>
    </div>
  );
}

export default App;
