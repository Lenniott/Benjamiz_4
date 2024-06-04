import React, { useState } from "react";
import RadioInput from "../../components/ui/RadioInput";
import { Button } from "../../components/ui/button";
interface Option {
  value: string;
  label: string;
}

interface Question {
  text: string;
}

interface Response {
  [key: string]: string;
}

interface MatrixComponentProps {
  questions: Question[];
  answers: Option[];
}

const MatrixComponent: React.FC<MatrixComponentProps> = ({ questions, answers }) => {
  const [oneLabel, setOneLabel] = useState(false);
  const [responses, setResponses] = useState<Response>({});

  const handleSelectChange = (question: string, answer: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: answer,
    }));
  };

  const tableRowBackground = (questionIndex: number) => {
    return questionIndex % 2 === 0 ? "bg-white" : "bg-slate-100";
  };

  return (
    <div className="px-4 relative flex flex-col w-full">
      <Button
        variant={"secondary"}
        className="w-fit hidden md:block"
        onClick={() => setOneLabel(!oneLabel)}
      >
        {oneLabel ? "Show Individual Labels" : "Show Label Header"}
      </Button>
      {oneLabel && (
        <div className={`hidden md:sticky top-0 z-10 w-full md:grid md:grid-cols-3 md:gap-28 pr-4 mx-auto bg-white py-4`}>
          <span className="flex items-center" />
          <div className={`md:col-span-2 w-full gap-2 flex flex-col place-content-start md:flex-row `}>
            {answers.map((answer) => (
              <span key={answer.value} className="grow flex items-center place-content-center">
                {answer.label}
              </span>
            ))}
          </div>
        </div>
      )}
      {questions.map((question, questionIndex) => (
        <div key={questionIndex.toString()} className={`flex flex-col md:grid md:grid-cols-3 md:gap-16 px-4 py-8 ${tableRowBackground(questionIndex)}`}>
          <div className="font-bold flex items-center">{question.text}</div>
          <div className={`md:col-span-2 w-full gap-2 flex flex-col place-content-start md:flex-row mt-4 md:mt-0`}>
            {answers.map((answer, answerIndex) => (
              <label key={answer.value} className={`grow inline-flex items-center place-content-start md:place-content-center`}>
                <RadioInput
                  id={`${questionIndex}-${answerIndex}`}
                  checked={responses[question.text] === answer.value}
                  name={`${questionIndex}-${question.text}`} // Unique name per question
                  value={answer.value}
                  onChange={() => handleSelectChange(question.text, answer.value)}
                  showLabel={oneLabel}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatrixComponent;
