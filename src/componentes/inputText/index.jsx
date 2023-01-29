import style from "./input.module.css"

export function InputText(){
    
    return(
            <form action="" className={style.formAddTask}>
                <input type="text" />
                <button>Criar</button>
            </form>
    )

}