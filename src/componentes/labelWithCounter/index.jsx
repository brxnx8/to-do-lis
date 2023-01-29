import style from "./labelCounter.module.css"

export function Label(){
    
    return(
        <div className={style.containerLabel}>
            <p>Tarefas Criadas</p>
            <span>0</span>
        </div>
    )

}