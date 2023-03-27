import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { BsFillSearchHeartFill } from 'react-icons/bs';

import styled from './Header.module.scss'

import pokedex from '../../assets/image/pokedex.png'

function Header({ pokemon }) {
  const [str, setStr] = useState('')

  const handleChange = e => {
    setStr(e.target.value)
  }

  const search = async() => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${str}`)
      .then( res => {
        if(res.data.results || !res) {
          alert("Không tìm thấy pokemon!!!")
        }else {
          console.log(res)
          pokemon(res.data)
        }
      })
      .catch(error => {
        alert("Không tìm thấy pokemon!!!")
      })
  }

  return (
    <div className={styled.header}>
      <div className={styled.container}>
        <div className={styled.icon}>
          <img src={ pokedex } className={styled.image} alt="pokedex"/>
          <p className={styled.text}>Poké<span>DEX</span></p>
        </div>
        <div className={styled.search}>
          <button type="submit" className={styled.button} onClick={() => search() }><BsFillSearchHeartFill /></button>
          <input type="text" className={styled.input} placeholder="Nhập tên hoặc số ..." onChange={ handleChange }/>
        </div>
      </div>
    </div>
  )
}

export default Header