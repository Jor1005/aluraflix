import './index.css'
import Nav from '../../componentes'
import Banner from '../../componentes/Banner';
import Category from '../../componentes/Categories';
import GlobalStyles from '../../componentes/GlobalStyles';


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



function App() {
  return (
    <div>
      <GlobalStyles/>
      <Nav/>
      <Banner/>
      <div>
       {
         categories.map((category) => <Category data={category} key={category.title}/>
         )
       }
      </div>
    </div>
  );
}

export default App;
