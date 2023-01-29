import { useState } from "react"
import { Label } from "../labelWithCounter"
import { Task } from "../task"
import style from "./sectionTasks.module.css"

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
                {props.tasks.map(task => {
                    return <Task text={task} key={task} isCompleted={taskIsCompleted} removeTask={removeTask}/>
                })}
                
            </div>
        </section>
    )
}