
const Navbar = (props) => {
  return (
    <div className='flex justify-between px-4 py-2 '>
        <h1 className='text-2xl'>Quizz App</h1>
        <span className='text-2xl bg-green-400 px-4 py-1 rounded-3xl shadow-2xl align-center'>
            Score : {props.score}/20
        </span>
    </div>
  )
}

export default Navbar