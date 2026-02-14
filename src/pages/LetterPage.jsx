import { useState } from 'react';
import '../style/LetterPage.css';

export default function LetterPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState([]);

  const heartTypes = [
    '💖','💘','💝','💗','💓','💞','💕',
    '❤️','🩷',
  ];

  const moveButtonRandomly = () => {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    setIsMoved(true);
    setPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    alert('빵@뎅이 잘 먹@을게!!🥵');

    const generatedHearts = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      symbol:
        heartTypes[Math.floor(Math.random() * heartTypes.length)],
      left: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      size: 20 + Math.random() * 20,
    }));

    setHearts(generatedHearts);
    setShowHearts(true);

    // 4초 후 하트 제거
    setTimeout(() => {
      setShowHearts(false);
      setHearts([]);
    }, 4000);
  };

  return (
    <>
      <div className="letter-header-container">
        <h1>💝🍫💘</h1>
        <p className="letter-sender">
          <span>제갈지현</span>님이
        </p>
        <p className="letter-send-alert">
          발렌타이 편지를 보냈어요! 💘
        </p>
      </div>

      <div className="letter-main-container">
        <p>💌메세지</p>
        <h2>
          🍫발렌타이인 기념으로, 너의 <span>빵@뎅이</span>를 나에게 줄래?🥺
        </h2>
      </div>

      <div className="button-container">
        <button
          className="yes-button"
          type="button"
          onClick={handleYesClick}
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

      {showHearts && (
        <div className="heart-rain">
          {hearts.map((heart) => (
            <span
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}%`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`,
              }}
            >
              {heart.symbol}
            </span>
          ))}
        </div>
      )}
    </>
  );
}