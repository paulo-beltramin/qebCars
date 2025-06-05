import { InputSearch } from "../../components/Input"
import car from '../../components/images/car.png'

import style from './style.module.scss'
export const Home = () => {
  return (
    <>
      <InputSearch />

      <div className={style.container}>
        <h1>Carros novos e usados em todo o brasil</h1>

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
    </>
  )
}
