import { useEffect, useState } from "react"
import { InputSearch } from "../../components/Input"




type carProps = {
  id: number,
  url: string,
  name: string,
  year: string,
  km: string,
  price: string,
  city: string
}

import style from './style.module.scss'
import { cars } from "../../api"
export const Home = () => {

  const [car, setCar] = useState<carProps[]>([])


  useEffect(() => {
    setCar(cars)
  }, [])


  return (
    <>
      <InputSearch />

      <div className={style.container}>
        <h1>Carros novos e usados em todo o brasil</h1>

        <ul className={style.list}>
          {car.map((item) => (
            <>
              <li>
                <div>
                  <img src={item.url} alt="imagem do veiculo" />
                  <p className={style.title}>
                    {item.name}
                  </p>

                  <p className={style.age}>
                    {item.year}- <span>{item.km}</span>
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
    </>
  )
}
