import React from 'react'

import styled from './PokeList.module.scss'

function PokeList({ pokeData, next, prev, resetUrl, setPoke }) {
  const handleClick = (item) => {
    setPoke(item)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <div className={styled.pokeList}>
      <div className={styled.container}>
        <div className={styled.icons}>
          {
            pokeData.map((item) => {
              return (
                <div className={styled.icon} key={item.id}>
                  <div className={styled.image}>
                    <img src={item.sprites.other.dream_world.front_default} onClick={ () => handleClick(item) } />
                  </div>
                  <p className={styled.name}>#{item.id}<br />{item.name}</p>
                </div>
              )
            })
          }
        </div>
        <div className={styled.button}>
          {
            (!prev) ? (
              <button className={styled.prev} disabled >Trở lại</button>
            ) : (
              <button className={styled.prev} onClick={ () => resetUrl(prev) }>Trở lại</button>
            )
          }
          {
            (!next) ? (
              <button className={styled.next} disabled >Tiếp theo</button>
            ) : (
              <button className={styled.next} onClick={ () => resetUrl(next) }>Tiếp theo</button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PokeList