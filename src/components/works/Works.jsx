import React from "react";
import "./works.css";
import pfimg from "../../images/mypf.jpg"
import veganappimg from "../../images/veganapp.jpg"
import furimaimg from "../../images/furima.jpg"
import photolink from "../../images/photolink.png"
import comingsoonlink from "../../images/comingsoon.gif"
import { SRLWrapper } from "simple-react-lightbox";

export default function Works() {

  return (
    <div>
      <SRLWrapper>
        <h1 className='sub-title'>private web works</h1>
        <div className="works-big-container">
          <div className='works-container'>
            <div className='my-image'>
              <img 
                alt="個人の制作実績やスキルをまとまるために、ポートフォリオを作成しました。
                （2020/12）React.jsを使いリニューアルを行いました。"
                src={pfimg} className='pf-img'/>
            </div>
            <div className='explain'>
              <h2 className='w-explain-container'>portfolio site (2020/11)<br/>
                  <br/>
                  開発言語: HTML/CSS/Javascript<br/>
                  フレームワーク: React.js<br/>
              </h2>
            </div>
          </div>
          
          <div className='works-container'>
            <div className='my-image'>
              <img alt="ヴィーガンを生活に取り入れる活動を支援する、レシピ投稿サイト。
                レシピを検索したり、マイページでお気に入りのレシピを管理する事ができます。
                楽天商品検索APIを使用しているので、気になる調味料などのアイテムもすぐ購入可能。
                (レスポンシブデザイン対応）"
                src={veganappimg} className='pf-img'/>
            </div>
            <div className='explain'>
              <h2 className='w-explain-container'>Vegan Beginner (2020/10)
                <a href = 'https://veganapp-0718.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <i className='fas fa-external-link-alt fa-1x iconcolor'></i>
                </a>
                <br/>
                開発言語: HTML/CSS/Javascript/Ruby<br/>
                フレームワーク: Ruby on Rails<br/>
                <a href="https://github.com/misakikondo/vegan-app" target="_blank" rel="noopener noreferrer">README</a>
              </h2>
            </div>
          </div>
          
          <div className='works-container'>
            <div className='my-image'>
              <img alt="テックキャンプ 最終課題で作成したフリマアプリサイト。
                ログイン・出品・編集/削除・購入機能や、コメント機能が備わっています。
                AWS/S3を利用し、画像を保存しています。
                ※ベーシック認証を導入しています▶︎
                ID：misaki / PASS：1111" 
                src={furimaimg} className='pf-img'/>
            </div>
            <div className='explain'>
              <h2 className='w-explain-container'>Furima (2020/9)
                <a href = "https://furima-29688.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
                  <i className='fas fa-external-link-alt fa-1x iconcolor'></i>
                </a>
                <br/>
                開発言語: HTML/CSS/Javascript/Ruby<br/>
                フレームワーク: Ruby on Rails<br/>
                <a href="https://github.com/misakikondo/furima-29688" target="_blank" rel="noopener noreferrer">README</a>
              </h2>
            </div>
          </div>
        </div>
      </SRLWrapper>

      <h1 className='sub-title'>other works</h1>
        <div className='other-works-container'>
          <div className='photo-container'>
            <h2 className='photo-works-title'>photography</h2>
            <a href='https://misakikondo.vercel.app/' target="_blank" rel="noopener noreferrer">
              <i><img alt='' src={photolink} className='photo-link-pic'/></i>
            </a>
          </div>

          <div className='illust-container'>
            <h2 className='illustration-works-title'>illustration</h2>
            <a href='blank' target="_blank" rel="noopener noreferrer">
              <i><img alt='' src={comingsoonlink} className='illustration-link-pic'/></i>
            </a>
          </div>
        </div>
    </div>
  );
}