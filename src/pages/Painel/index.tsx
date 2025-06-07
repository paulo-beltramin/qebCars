import { Header2 } from "../../components/Header2"
import car from '../../components/images/car.png'
import style from './style.module.scss'

export const Painel = () => {
  return (
    <div>
      <Header2 />

      <div className={style.container}>
        <ul className={style.list}>
          <li>
            <div>
              <img src={car} alt="imagem do veiculo" />
              <p className={style.title}>
                Jaguar ss
              </p>

              <p className={style.age}>
                2016/2017 - <span>25000 KM </span>
              </p>

              <p className={style.price}>
                R$ 250.222
              </p>

              <p className={style.state}>
                São paulo - Sp
              </p>
            </div>
          </li>

          <li>
            <div>
              <img src={car} alt="imagem do veiculo" />
              <p className={style.title}>
                Jaguar ss
              </p>

              <p className={style.age}>
                2016/2017 - <span>25000 KM </span>
              </p>

              <p className={style.price}>
                R$ 250.222
              </p>

              <p className={style.state}>
                São paulo - Sp
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
