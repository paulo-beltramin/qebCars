import { Link } from 'react-router'
import logo from '../../components/images/logo.png'

import style from "./style.module.scss"


export const Cadastro = () => {
  return (
    <div className={style.container}>
      <form >
        <div>
          <img src={logo} alt="Logo da pagina login" />
        </div>

        <div className={style.container__forms}>
          <input type="text" placeholder='Digite seu nome completo...' />
          <input type="email" placeholder='Digite o email...' />
          <input type="password" placeholder='Digite a senha ...' />
          <button>Cadastrar</button>
        </div>
      </form>

      <div>
        <p>
          Já possue uma conta?<Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  )
}
