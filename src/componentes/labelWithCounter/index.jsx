import style from "./labelCounter.module.css"

export function Label(props){
    
    return(
        <div className={style.containerLabel}>
            <p>{props.text}</p>
            <span>{props.CounterTasks}</span>
        </div>
    )

}