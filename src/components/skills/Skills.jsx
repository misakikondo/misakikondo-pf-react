import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div>
      <h1 className='sub-title'>skills</h1>
      <div className='skills-container'>
        <div className='skills-list'>
          <div className='list' id='list1'>
            <h1>HTML</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              LPや複数のページもスクラッチからコーディングすることができます。<br/>
            </h2>
          </div>
          <div className='list' id='list2'>
          <h1>CSS</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              SCSSやメディアクエリでのレスポンシブデザインができます<br/>
            </h2>
          </div>

          <div className='list' id='list3'>
          <h1>JavaScript</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              複雑なコードをスクラッチから書くことはできませんが、<br/>
              リファレンスを参考にしながら記述することができます。<br/>
            </h2>
          </div>
        </div>
          
        <div className='skills-list'>
          <div className='list' id='list4'>
            <h1>Ruby</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              基本的なコードや、Railsを使いアプリケーションを作成することができます。<br/>
            </h2>
          </div>
          <div className='list' id='list5'>
            <h1>Ruby on Rails</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              1からアプリケーションを作成することができます。<br/>
            </h2>
          </div>
          <div className='list' id='list6'>
            <h1>React.js</h1>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <h2>
              コンポーネントを使い、簡単なサイトを構築できます。<br/>
            </h2>
          </div>
        </div>
        


      <div className='experienced'>
        Experienced<br/>
        jQuery/MySQL/Git/AWS(S3)/Heroku<br/>
      </div>

    </div>
  </div>
  );
}