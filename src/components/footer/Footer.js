import React from 'react'
import clsx from 'clsx';

import styled from './Footer.module.scss'
import { AiOutlineCopyrightCircle, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';

function Footer() {
  return (
    <div className={ styled.footer }>
      <div className={ styled.container }>
        <div className={ styled.info }>
          <p><AiOutlineCopyrightCircle /><a href="#" target="_blank" className={ styled.author }>2023 - PHUNG HUU LOC</a></p>
          <p>Dữ liệu api pokemon lấy từ <a href="https://pokeapi.co/docs/v2" target="_blank" className={ styled.api }>PokéApi</a></p>
        </div>
        <div className={ styled.social }>
          <div className={clsx(styled.item, styled.facebook)}> 
            <AiOutlineFacebook />
          </div>
          <div className={clsx(styled.item, styled.instagrarm)}> 
            <AiOutlineInstagram />
          </div>
          <div className={clsx(styled.item, styled.zalo)}> 
            <SiZalo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer