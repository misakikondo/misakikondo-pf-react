import React from "react";
import "./about.css";
import meimg from "../../images/me.png"

export default function About() {
  return (
    <div>
      <h1 className='sub-title'>about</h1>
      <div className='about-container'>
        <div className='my-image'>
          <img alt="" src={meimg} className='me-img'/>
        </div>
        <div className='explain'>
          <h2 className='explain-container'>近藤 未咲 1991年生まれ（29歳)<br/>
          愛知県 名古屋市出身 東京都在住<br/>
          龍谷大学 文学部 日本語日本文学科 2015年卒<br/>
          テックキャンプ 丸の内校 2020年卒<br/>
          <br/>
          スノーボードグッズの販売員と営業事務を経験してきた中で、<br/>
          自分のアイディアが活かし、成長し続けることができる仕事がしたい<br/>
          と思うようになり、テックキャンプでプログラミングを学ぶ。<br/>
          現在は転職活動をしながら自走力を活かし、JavaScript・React.jsを学習中。<br/>
          <br/>
          休日の過ごし方：アクセサリー作り・note執筆・動画編集・スケートボード・サーフィン<br/>
          <br/>
          </h2>
          <div className='icons'>
            <a href='https://github.com/misakikondo' target='_blank' rel='noopener noreferrer'>
              <i href='https://github.com/misakikondo' className='fab fa-github fa-2x iconcolor'></i>
            </a>
            <a href='https://www.instagram.com/misaki_creates_something/' target='_blank' rel='noopener noreferrer'>
              <i href='https://www.instagram.com/misaki_creates_something/' className='fab fa-instagram fa-2x iconcolor'></i>
            </a>
            <a href='https://www.youtube.com/channel/UCZ8ZHxoYV_AnWrKCC6456Tw/' target='_blank' rel='noopener noreferrer'>
              <i href='https://www.youtube.com/channel/UCZ8ZHxoYV_AnWrKCC6456Tw/' className='fab fa-youtube fa-2x iconcolor'></i>
            </a>
            <a href='https://note.com/misaki_kondo' target='_blank' rel='noopener noreferrer'>
              <i href='https://note.com/misaki_kondo' className='fas fa-blog fa-2x iconcolor'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}