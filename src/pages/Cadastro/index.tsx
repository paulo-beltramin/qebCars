import { Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../components/Services/db'

import logo from '../../components/images/logo.png'

import style from "./style.module.scss"
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'


export const Cadastro = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast(`Cadastrado com sucesso,bem vindo:${name.slice(0, 5)}`, {
          style: {
            backgroundColor: 'green',
            fontWeight: 'bold',
            color: 'white'
          }
        })
        navigate('/painel')

      }).catch((error) => {
        console.log(error)
      })
  }

  return (

    <div className={style.container}>
      <form onSubmit={handleRegister}>
        <div>
          <img src={logo} alt="Logo da pagina login" />
        </div>

        <div className={style.container__forms}>
          <input type="text" placeholder='Digite seu nome completo...'
            value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='Digite o email...'
            value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Digite a senha ...'
            value={password} onChange={e => setPassword(e.target.value)} />

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
