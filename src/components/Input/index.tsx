import style from './style.module.scss'
export const InputSearch = () => {
  return (
    <div>
        <form className={style.forms}>
            <input type="text" placeholder="Digite o nome do veiculos"  required/>
         <button >Buscar</button>
        </form>
    </div>
  )
}
