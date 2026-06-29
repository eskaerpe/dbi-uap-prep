import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import ModuleView from './pages/ModuleView'
import QuizPage from './pages/QuizPage'
import PracticeQuizPage from './pages/PracticeQuizPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/practice" element={<PracticeQuizPage />} />
        <Route path="/:slug" element={<ModuleView />} />
      </Routes>
    </>
  )
}
