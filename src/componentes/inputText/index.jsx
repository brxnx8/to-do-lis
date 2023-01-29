import style from "./input.module.css"

export function InputText(props){
    
    function addTask(event){

        event.preventDefault()
        props.addTask(event.target.firstChild.value)


    }


    return(
            <form action="" className={style.formAddTask} onSubmit={addTask}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button>Criar</button>
            </form>
    )

}