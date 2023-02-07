import { useState } from "react"
import { Label } from "../labelWithCounter"
import { Task } from "../task"
import style from "./sectionTasks.module.css"

import imagem from "../../images/book.png"

export function SectionTask(props){
    
    const [taskCompleted, setTaskCompleted] = useState(0)

    function taskIsCompleted(valor){
        if(valor){
            setTaskCompleted((state) => state+1)
        }else{
            setTaskCompleted((state) => state-1)
        }
    }

    function removeTask(texto){
        props.tasksWithoutRemoveTask(props.tasks.filter(task => task !== texto))
    }

    return(
        <section className={style.sectionTask}>
            <div className={style.divLabels}>
                <Label text="Tarefas Criadas" CounterTasks={props.tasks.length}/>
                <Label text="Concluidas" CounterTasks={taskCompleted}/>
            </div>
            <div className={style.divContainerTasks}>
                {props.tasks.length > 0 ? 
                
                props.tasks.map(task => {
                    return <Task text={task} key={task} isCompleted={taskIsCompleted} removeTask={removeTask}/>
                }) 
                : 
                <div className={style.containerEmpty}>
                    <img src={imagem} alt="imagem de um caderno"/>
                    <h1>Você ainda não tem tarefas cadastradas.</h1>
                    <h2>Crie tarefas e organize seus itens a fazer</h2>
                    
                </div>
                }
            </div>
        </section>
    )
}