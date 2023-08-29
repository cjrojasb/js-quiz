import { IconButton, Stack } from "@mui/material";
import { Question } from "./Question";
import { useQuestionsStore } from "../store/questions";

export const Game = () => {
  const { questions, currentQuestion } = useQuestionsStore();
  const questionInfo = questions[currentQuestion];
  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};
