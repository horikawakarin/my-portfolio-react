import "./App.css";

import beach from "./assets/beach.jpg";
import animal from "./assets/animal.jpg";

import { useState } from "react";

function App() {
  const [altText, setAltText] = useState("");

  const handleMouseEnter = (alt) => {
    setAltText(alt);
  };

  const handleMouseLeave = () => {
    setAltText("");
  };

  return (
    <div>
      <header>
        <h1>Karin Horikawa</h1>
      </header>

      <div className="parent">
        <div className="container">
          <div className="item">名前</div>
          <div className="answer">堀</div>
          <div className="item">趣味</div>
          <div className="answer">ゲーム、ストレッチ、お湯</div>
          <div className="item">大学</div>
          <div className="answer">神戸大学国際人間科学部</div>
          <div className="item">専攻</div>
          <div className="answer">社会心理学</div>
        </div>
        <div className="container2">
          <img
            src={beach}
            alt="ビーチ"
            onMouseEnter={() =>
              handleMouseEnter(
                "オーストラリアのビーチ。季節的には春だったのであまり泳いでいる人はいなかった。"
              )
            }
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={animal}
            alt="動物"
            onMouseEnter={() =>
              handleMouseEnter(
                "クォッカというネズミの仲間。観光客からポテトを奪おうと元気に不法侵入していた"
              )
            }
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div className="altText">{altText && <p>{altText}</p>}</div>
    </div>
  );
}

export default App;
