import React from "react";
import "./works.css";
import pfimg from "../../images/mypf.png"
import veganappimg from "../../images/veganapp.png"
import furimaimg from "../../images/furima.png"


export default function Works() {
  // const subTitle = document.querySelector('.sub-title');
  // const cb = function () {
  //   alert('hello');
  // }
  // const io = new IntersectionObserver(cb);
  // io.observe(subTitle);
  return (
    <div>
      <h1 className='sub-title'>private works</h1>

      <div className='works-container'>
        <div className='my-image'>
          <img alt="" src={pfimg} className='pf-img'/>
        </div>
        <div className='explain'>
          <h2 className='explain-container'>portfolio site (2020/11)<br/>
              <br/>
              個人の制作実績やスキルをまとまるために、ポートフォリオを作成しました。<br/>
              （2020/12）React.jsを使いリニューアルを行いました。<br/>
              <br/>
              開発言語: HTML/CSS/Javascript<br/>
              フレームワーク: React.js<br/>
          </h2>
        </div>
      </div>
      
      <div className='works-container'>
        <div className='my-image'>
          <img alt="" src={veganappimg} className='pf-img'/>
        </div>
        <div className='explain'>
          <h2 className='explain-container'>Vegan Beginner (2020/10)
            <a href = 'https://veganapp-0718.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-external-link-alt fa-1x iconcolor'></i>
            </a>
            <br/>
            ヴィーガンを生活に取り入れる活動を支援する、レシピ投稿サイト。<br/>
            レシピを検索したり、マイページでお気に入りのレシピを管理する事ができます。<br/>
            楽天商品検索APIを使用しているので、気になる調味料などのアイテムもすぐ購入可能。<br/>
            (レスポンシブデザイン対応）<br/>
            <br/>
            開発言語: HTML/CSS/Javascript/Ruby<br/>
            フレームワーク: Ruby on Rails<br/>
            <a href="https://github.com/misakikondo/vegan-app" target="_blank" rel="noopener noreferrer">README</a>
          </h2>
        </div>
      </div>
      
      <div className='works-container'>
        <div className='my-image'>
          <img alt="" src={furimaimg} className='pf-img'/>
        </div>
        <div className='explain'>
          <h2 className='explain-container'>Furima (2020/9)
            <a href = "https://furima-29688.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-external-link-alt fa-1x iconcolor'></i>
            </a>
            <br/>
            テックキャンプ 最終課題で作成したフリマアプリサイト。<br/>
            ログイン・出品・編集/削除・購入機能や、コメント機能が備わっています。<br/>
            AWS/S3を利用し、画像を保存しています。<br/>
            <br/>
            ※ベーシック認証を導入しています<br/>
            ID：misaki / PASS：1111<br/>
            <br/>
            開発言語: HTML/CSS/Javascript/Ruby<br/>
            フレームワーク: Ruby on Rails<br/>
            <a href="https://github.com/misakikondo/furima-29688" target="_blank" rel="noopener noreferrer">README</a>
          </h2>
        </div>
      </div>
    </div>
  );
}