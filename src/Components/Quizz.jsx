import { useState } from "react";
const Quizz = (props) => {
    const [currentquestion, setSCurrentquestion] = useState(0);
    const [selectedanswer, setSelectedanswer] = useState(null);
    const [quizzfinished, setQuizzfinished] = useState(false)
    const handleAnswer =(option) =>{
        setSelectedanswer(option);
        setTimeout(()=>{
            setSelectedanswer(null);
            if (currentquestion < questions.length -1){
                setSCurrentquestion((prev)=> prev+1)
            }
        },1000)
    }
  const questions = [
  {
    id: 1,
    question: "Which is the largest country in the world by area?",
    options: ["Canada", "China", "Russia", "United States"],
    answer: "Russia"
  },
  {
    id: 2,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars"
  },
  {
    id: 4,
    question: "Who was the first person to walk on the Moon?",
    options: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins"
    ],
    answer: "Neil Armstrong"
  },
  {
    id: 5,
    question: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    answer: "Pacific Ocean"
  },
  {
    id: 6,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Leo Tolstoy"
    ],
    answer: "William Shakespeare"
  },
  {
    id: 7,
    question: "Which is the longest river in the world according to the commonly accepted measurement?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: "Nile River"
  },
  {
    id: 8,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    answer: "Au"
  },
  {
    id: 9,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    answer: "Japan"
  },
  {
    id: 10,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    id: 11,
    question: "Who was the first President of India?",
    options: [
      "Jawaharlal Nehru",
      "Dr. Rajendra Prasad",
      "Sardar Patel",
      "Dr. S. Radhakrishnan"
    ],
    answer: "Dr. Rajendra Prasad"
  },
  {
    id: 12,
    question: "Which is the smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Neptune"],
    answer: "Mercury"
  },
  {
    id: 13,
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    answer: "Camel"
  },
  {
    id: 14,
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: ["Germany", "France", "Italy", "Spain"],
    answer: "France"
  },
  {
    id: 15,
    question: "How many players are there on a football (soccer) team on the field at one time?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    id: 16,
    question: "Which is the highest mountain in the world above sea level?",
    options: [
      "K2",
      "Mount Everest",
      "Kangchenjunga",
      "Mount Kilimanjaro"
    ],
    answer: "Mount Everest"
  },
  {
    id: 17,
    question: "Which gas do plants primarily absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    id: 18,
    question: "Which Indian city is known as the 'Pink City'?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    answer: "Jaipur"
  },
  {
    id: 19,
    question: "Which is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Tiger"],
    answer: "Cheetah"
  },
  {
    id: 20,
    question: "How many colors are traditionally found in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  }
];
if (quizzfinished) {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Quiz Complete!
        </h1>

        <p className="text-2xl mt-4">
          Your Score: {props.score}/20
        </p>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-6"
          onClick={()=>{
            setSCurrentquestion(0);
            setSelectedanswer(null);
            setQuizzfinished(false);
            props.setScore(0);

          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
} return (
    <div className="flex justify-center mt-12">
        <div className=' lg:w-7/12 w-11/12 px-3 py-2 flex flex-col gap-3'>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 w-full">
                    <span className="lg:text-2xl">{currentquestion+1}.</span>
                    <p className="lg:text-2xl leading-tight">{questions[currentquestion].question}</p>
                </div>
                <span className='lg:text-xl bg-cyan-600 px-3 py-1 rounded-2xl mr-1'>{currentquestion +1}/20</span>
            </div>
            <div className="flex flex-col gap-3 items-start">
                {questions[currentquestion].options.map((option,index)=>{
                   return  <button key={option}
                        className={` border-none shadow-2xl outline-none border-b px-4 py-2 w-full rounded-2xl flex lg:text-xl cursor-pointer
                            ${selectedanswer === option ? option === questions[currentquestion].answer ? "bg-green-500" :"bg-red-500":"bg-white"}`} onClick={()=>{
                            let answer = questions[currentquestion].answer;
                           handleAnswer(option);
                           if(option === answer){
                            props.setScore(prev => prev+1);
                            
                           }
                           if(currentquestion=== questions.length -1){
                            setTimeout(()=>{
                                setQuizzfinished(true);
                            },1000)
                           }
                        }}>
                        {String.fromCharCode(65+index)}: {option}
                    </button>
                })}
            </div>
            <div className="flex gap-10 justify-center">
                <button className="bg-amber-700 px-5 py-2 rounded-xl text-white lg:text-lg cursor-pointer" onClick={()=>{
                    if(currentquestion > 0){
                        setSCurrentquestion(currentquestion -1);
                    }
                }}>Prev</button>
                <button className="bg-amber-700 px-5 py-2 rounded-xl text-white lg:text-lg cursor-pointer" onClick={()=>{
                    if(currentquestion < questions.length -1){
                        setSCurrentquestion(currentquestion +1)
                    }
                }}>Next</button>
            </div>
        </div>
    </div>
) }
 

export default Quizz

