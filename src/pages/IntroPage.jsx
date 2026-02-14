import { useEffect } from 'react';
// 페이지 이동을 위해 useNavigate를 import
import { useNavigate } from 'react-router-dom';

import '../style/IntroPage.css';

export default function IntroPage(){
  const navigate = useNavigate();

  // 렌더링 후에 사이드 이펙트를 작동시키는 useEffect 훅을 사용하여 2초 후에 '/letter' 경로로 이동하도록 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/letter') // 2초 후에 '/letter' 경로로 이동
    }, 2000);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리하여 메모리 누수 방지
  }, [navigate]); // navigate를 의존성 배열에 추가하여 navigate가 변경될 때마다 useEffect가 실행되도록 함
    // 실질적으로 navigate는 변경되지 않지만, React의 규칙에 따라 의존성 배열에 포함시키는 것이 권장됨


  return(
    <div className="intro-page">
      <h1 className="intro-title">💌</h1>
    </div>
  );
}

// useNavigate ?
// React Router에서 제공하는 Hook, 페이지 이동시 사용한다
// useNavigate() -> 함수를 반환 (navigate) -> navigate('/path') 형태로 사용하여 페이지 이동