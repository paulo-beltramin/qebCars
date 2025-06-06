import { Link } from 'react-router'
import { useState, type FormEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import { auth } from '../../components/Services/db'
import logo from '../../components/images/logo.png'

import style from "./style.module.scss"


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Logado com sucesso', {
          style: {
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '8px 12px'
          }
        })

        navigate('/painel')
      }).catch(() => {
        toast.error('Erro: Verifique os dados digitados', {
          style: {
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '8px 12px'
          }
        })
      })
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleLogin} >
        <div>
          <img src={logo} alt="Logo da pagina login" />
        </div>

        <div className={style.container__forms}>
          <input type="email" placeholder='Digite o email de cadastro...'
            value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Digite a senha de cadastro...'
            value={password} onChange={e => setPassword(e.target.value)} />
          <button>Acessar</button>
        </div>
      </form>

      <div>
        <p>
          Ainda não possue cadastro? <Link to={'/cadastro'}>Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}
