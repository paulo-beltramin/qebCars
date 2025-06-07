import { FiUpload } from "react-icons/fi";


import { Header2 } from "../../components/Header2"
import style from './style.module.scss'


export const NewCar = () => {


  return (
    <div>
      <Header2/>
      <section className={style.container}>
        <div className={style.container__upload}>
          <span>
           <FiUpload size={28}/>
          </span>
        </div>

        <form >
           <div className={style.forms}>
            <input type="text" placeholder="Nome do veículo" />
            <input type="text" placeholder="Modelo do veículo" />

            <div className={style.forms__inputAge}>
              <input type="number" placeholder="Ano do veículo" />
              <input type="text" placeholder="KM do veículo" />
            </div>

            <input type="text" placeholder="Valor do veículo" />
            <input type="text" placeholder="Cidade do veículo" />
            <input type="text" placeholder="Telefone de contato" />

            <textarea placeholder="Descrição"></textarea>
           </div>
        </form>
      </section>
    </div>
  )
}
