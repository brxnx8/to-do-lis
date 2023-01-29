import "./style.css"

import { Header } from "./componentes/header";
import { InputText } from "./componentes/inputText";
import { SectionTask } from "./componentes/sectionTasks";
import { useState } from "react";


function App() {
  
  const [tasks, setTasks] = useState([])
  const addTask = (valor) => 
  {
    if(!(tasks.includes(valor))){
      setTasks([...tasks, valor])
    }else{
      alert("Esta task ja existe")
    }
  }
  return (
    <div className="App" >
      <Header />
      <main className="section-main">
        <InputText addTask={addTask}/>
        <SectionTask tasks={tasks} tasksWithoutRemoveTask={tasks => setTasks(tasks)}/>
      </main>
    </div>
  );
}

export default App;
