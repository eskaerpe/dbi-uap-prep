import { practiceQuizQuestions, practiceQuizSections } from '../data/practice-quiz-data'
import QuizCard from '../components/interactive/QuizCard'
import QuizLayout from '../components/layout/QuizLayout'

export default function PracticeQuizPage() {
  return (
    <QuizLayout title="Kuis Praktik" sections={practiceQuizSections}>
      {practiceQuizSections.map((section) => {
        const questions = practiceQuizQuestions.slice(section.start, section.end + 1)
        return (
          <div key={section.id} className="quiz-section">
            <div className="quiz-section__header" data-section={section.id}>
              <div className="quiz-section__label">{section.name}</div>
              <div className="quiz-section__count">{questions.length} soal</div>
            </div>
            {questions.map((q, i) => (
              <QuizCard key={section.start + i} question={q} index={section.start + i + 1} />
            ))}
          </div>
        )
      })}
    </QuizLayout>
  )
}
