import Navbar from './Components/Navbar'
import Quizz from './Components/Quizz'
import { useState } from 'react'
const App = () => {
  const [score, setScore] = useState(0)
  return (
    <div className='bg-[#FFC9B5] h-screen'>

      <Navbar score={score}/>
      <Quizz score={score} setScore={setScore}/>
    </div>
  )
}

export default App