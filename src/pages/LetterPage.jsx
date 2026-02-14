import { useState } from 'react';
import '../style/LetterPage.css';

export default function LetterPage(){
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);

  const moveButtonRandomly = () => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    setIsMoved(true); // 이제부터 absolute 적용
    setPosition({ x: randomX, y: randomY });
  };

  return(
    <>
      <div className="letter-header-container">
        <h1>💝🍫💘</h1>
        <p className="letter-sender"><span>제갈지현</span>님이 </p>
        <p className="letter-send-alret">발렌타이 편지를 보냈어요! 💘</p>
      </div>

      <div className="letter-main-container ">
        <p>💌메세지</p>
        <h2>🍫발렌타이인 기념으로, 너의 <span>빵@뎅이</span>를 나에게 줄래?🥺</h2>
      </div>

      <div className='button-container'>
        <button
        className="yes-button"
        type="button"
        onClick={() => alert('빵@뎅이 받았다!🥵')}
      >
        Yes, 빵@뎅이 줄게! 🥰
      </button>

      <button
        className="no-button"
        type="button"
        onMouseEnter={moveButtonRandomly}
        style={
          isMoved
            ? {
                position: 'absolute',
                left: `${position.x}%`,
                top: `${position.y}%`,
              }
            : {}
        }
      >
        No, 싫어 😰
      </button>
      </div>
    </>
  );
}