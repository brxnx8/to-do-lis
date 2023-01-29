import { useState } from "react"
import style from "./input.module.css"

export function InputText(props){
    
    const [newTaskText, setNewtaskText] = useState('')
    
    function addTask(event){

        event.preventDefault()
        props.addTask(newTaskText)
        setNewtaskText("")


    }


    return(
            <form action="" className={style.formAddTask} onSubmit={addTask}>
                <input type="text" onChange={(event) => setNewtaskText(event.target.value)} value={newTaskText} placeholder="Adicione uma nova tarefa"/>
                <button disabled={newTaskText === ''}>Criar</button>
            </form>
    )

}