import { useState, type FormEvent, } from 'react'
import { FiUpload } from "react-icons/fi";


import { Header2 } from "../../components/Header2"
import style from './style.module.scss'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../components/Services/db';

export const NewCar = () => {


  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [age, setAge] = useState('')
  const [km, setKm] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [contact, setContact] = useState('')
  const [description, setDescription] = useState('')


  const handleRegisterCar = (e: FormEvent) => {
    e.preventDefault()

    const addcars = addDoc(collection(db, "cars"), {
      name: name,
      model: model,
      age: age,
      km: km,
      price: price,
      city: city,
      contact: contact,
      description: description,
      created: new Date()
    })

    console.log(addcars)
  }

  return (
    <div>
      <Header2 />
      <section className={style.container}>
        <div className={style.container__upload}>
          <button>
            <FiUpload size={28} />
            <input type="file" accept="image/*" max={3} />
          </button>

        </div>

        <form onSubmit={handleRegisterCar}>
          <div className={style.forms}>
            <input required type="text" placeholder="Nome do veículo"
              value={name} onChange={e => setName(e.target.value)} />
            <input required type="text" placeholder="Modelo do veículo"
              value={model} onChange={e => setModel(e.target.value)} />

            <div className={style.forms__inputAge}>
              <input required type="number" placeholder="Ano do veículo"
                value={age} onChange={e => setAge(e.target.value)} />
              <input required type="text" placeholder="KM do veículo"
                value={km} onChange={e => setKm(e.target.value)} />
            </div>

            <input required type="text" placeholder="Valor do veículo"
              value={price} onChange={e => setPrice(e.target.value)} />
            <input required type="text" placeholder="Cidade do veículo"
              value={city} onChange={e => setCity(e.target.value)} />
            <input required type="text" placeholder="Telefone de contato"
              value={contact} onChange={e => setContact(e.target.value)} />

            <textarea required placeholder="Descrição"
              value={description} onChange={e => setDescription(e.target.value)} >
            </textarea>
            <button>Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  )
}
