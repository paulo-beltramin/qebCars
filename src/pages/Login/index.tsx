import { Link } from 'react-router'
import logo from '../../components/images/logo.png'

import style from "./style.module.scss"


export const Login = () => {
  return (
    <div className={style.container}>
      <form >
        <div>
          <img src={logo} alt="Logo da pagina login" />
        </div>

        <div className={style.container__forms}>
          <input type="email" placeholder='Digite o email de cadastro...' />
          <input type="password" placeholder='Digite a senha de cadastro...' />
          <button>Acessar</button>
        </div>
      </form>

      <div>
        <p>
          Ainda não possue cadastro? <Link to={''}>Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}
