import React from 'react'
import clsx from 'clsx'

import styled from './PokeInfo.module.scss'
import pikachu from '../../assets/image/pikachu.gif'

function PokeInfo({ pokemon }) {
  return (
    <div className={styled.pokeInfo } >
      {
        (!pokemon) ? (
          <div className={ styled.noPoke }></div>
        ) : (
          <div className={ clsx(pokemon.types[0].type.name, styled.background )}></div>
        )
      }
      <div className={styled.container}>
        <div className={styled.image}>
          {
            (!pokemon) ? (
              <>
                <img src={ pikachu } />
                <p>Chưa chọn pokemon!!!</p>
              </>   
            ) : (
              <>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`pokemon ${pokemon.name}`} />
                <p>№ { pokemon.id } - {pokemon.name}</p>
              </>   
            )
          }
        </div>
        {
          (!pokemon) ? "" : (
            <div className={styled.info}>
              <div className={styled.abilities}> 
                <div className={ styled.left }>
                  <div className={styled.item}>ID</div>
                  <div className={styled.item}>Height</div>
                  <div className={styled.item}>Weight</div>
                  <div className={styled.item}>Abilities</div>
                  <div className={styled.item}>Type</div>
                </div>
                <div className={ styled.right }>
                  <div className={styled.item}>#{ pokemon.id }</div>
                  <div className={styled.item}>{ pokemon.height /10 } m</div>
                  <div className={styled.item}>{ pokemon.weight /10 } kg</div>
                  <div className={clsx(styled.ability, styled.item)}>
                    {
                      pokemon.abilities.map((item, index) => {
                        return (
                          <div className={styled.item} key={index}>
                            { item.ability.name }  
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className={clsx(styled.types, styled.item)}>
                    {
                      pokemon.types.map((item, index) => {
                        return (
                          <div className={styled.item} key={index}>
                            {item.type.name}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className={styled.stats}>
                <div className={ styled.left }>
                  {
                    pokemon.stats.map((item, index) => {
                      return (
                        <div className={styled.item} key={index}>
                          { item.stat.name }
                        </div>
                      )
                    })
                  }
                </div>
                <div className={ styled.right }>
                  {
                    pokemon.stats.map((item, index) => {
                      return (
                        <div className={styled.item} key={index}>
                          { item.base_stat }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PokeInfo