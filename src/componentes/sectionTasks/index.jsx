import { Label } from "../labelWithCounter"
import { Task } from "../task"
import style from "./sectionTasks.module.css"

export function SectionTask(){
    return(
        <section className={style.sectionTask}>
            <div className={style.divLabels}>
                <Label />
                <Label/>
            </div>
            <div className={style.divContainerTasks}>
                <Task/>
                <Task />
            </div>
        </section>
    )
}