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
          自分のアイディアが活かせ、成長し続けることができる仕事がしたい<br/>
          と思うようになり、テックキャンプでプログラミングを学ぶ。<br/>
          現在は転職活動をしながら自走力を活かし、JavaScript・React.jsを学習中。<br/>
          <br/>
          趣味：英会話・サーフィン・スノーボード・アクセサリー作り・動画編集<br/>
          <br/>
          関連リンク
          <a href="https://www.wantedly.com/users/143261148?profile_v1=true" target="_blank" rel="noopener noreferrer">Wantedly</a>/
          <a href="https://github.com/misakikondo" target="_blank" rel="noopener noreferrer">Github</a>
          </h2>
        </div>
      </div>
    </div>
  );
}