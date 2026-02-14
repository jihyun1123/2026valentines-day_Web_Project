import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // React Router에서 제공하는 컴포넌트들을 import
import IntroPage from './pages/IntroPage';
import LetterPage from './pages/LetterPage';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {/*
        path="/letter" 
          -> URL 경로
        element={<LetterPage />} 
          -> 해당 경로로 이동했을 때 렌더링할 컴포넌트
        */ }
        <Route path="/" element={<IntroPage />} />
        <Route path="/letter" element={<LetterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
