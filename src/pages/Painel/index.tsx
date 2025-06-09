import { Header2 } from "../../components/Header2"
import style from './style.module.scss'
import { cars } from '../../api'

export const Painel = () => {


  return (
    <div>
      <Header2 />

      <div className={style.container}>
        <ul className={style.list}>
          {cars.map((item) => (
            <>
              <li key={item.id}>
                <div>
                  <img src={item.url} alt="imagem do veiculo" />
                  <p className={style.title}>
                    {item.name}
                  </p>

                  <p className={style.age}>
                    {item.year} <span>{item.km} </span>
                  </p>

                  <p className={style.price}>
                    {item.price}
                  </p>

                  <p className={style.state}>
                    {item.city}
                  </p>
                </div>
              </li>
            </>
          ))}


        </ul>
      </div>
    </div>
  )
}
