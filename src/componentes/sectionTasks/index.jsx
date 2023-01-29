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
                {props.tasks.length > 0 ? 
                
                props.tasks.map(task => {
                    return <Task text={task} key={task} isCompleted={taskIsCompleted} removeTask={removeTask}/>
                }) 
                : 
                <div className={style.containerEmpty}>
                    <img src="https://s3-alpha-sig.figma.com/img/85c0/2079/0f716dd0d95262635b558603544a0316?Expires=1675641600&Signature=fv44rlCR~N6zlaQC5rJo7gLhoCxpgbH7YjkXgHDw4U1GWJs2KtZc3WpY3WhjvGo-i8gh1xNXq~p~IOKINaNfa~d~ler92nJ-kN2~Ml2tM3j0oAFsf3vqz8Hl75v5QddC8U~5KYMlOeUBx7GnZNS5fCBB2zaUtBZ5GhH5RR2rCSFRc4OTe8Gj9XQrOz8sKhQAWNtme8o9Aw7g327T-cUbrnQw4GtUst47dx~~04pChpEjlZUXJt~jjbDX-Vo49Hevs7s0~4gfeDgdWlqzzGnzrkmf-OVJAnP9~KJtaTZ4nUU1cPB6qAA5iDV0xD~~grcWMrnDJ0Y-3ku5zn6iHtR8JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="imagem de um caderno"/>
                    <h1>Você ainda não tem tarefas cadastradas.</h1>
                    <h2>Crie tarefas e organize seus itens a fazer</h2>
                    
                </div>
                }
            </div>
        </section>
    )
}