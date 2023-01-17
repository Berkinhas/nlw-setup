import { Habit } from "./components/Habit"


//O app é uma função que trás todo o html
function App() {  
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={18}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
    </div>
    
  )
}

export default App

//componente: reaproveitar / isolar
//propriedade: uma informação enviada para modificar um componente visual ou comportamentalmente
