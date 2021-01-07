import {data} from './data'
import {useState} from 'react' 
import Menu from './menu' 
import Buttons from './buttons'
const buttonNames = ['all', ...new Set(data.map(item=>{
  return item.category
}))]
 

const App = ()=>{
  const [menu, setMenu ] = useState(data)
  const [button,setButton] = useState(buttonNames)
  const change=(category)=>{
    if(category ==='all'){
      setMenu(data)
      return
    }
    const otherButtons = data.filter(item=>{
      if(category===item.category){
return item.category
      }
   
    })
       setMenu(otherButtons)
  }
  return(
<main>
<div className="title">
<h1>our menu</h1>
<div className="underline"></div>
</div>
<div className="buttons">
<Buttons button ={button} change={change}/>
</div>
<div className="main-content">
<Menu menu={menu} />
</div>
</main>
  )
}


export default App