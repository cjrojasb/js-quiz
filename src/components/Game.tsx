import { IconButton, Stack } from "@mui/material";
import { Question } from "./Question";
import { useQuestionsStore } from "../store/questions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Game = () => {
  const { questions, currentQuestion, goNextQuestion, goPreviousQuestion } =
    useQuestionsStore();
  const questionInfo = questions[currentQuestion];
  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion == 0}
        >
          <ArrowBackIcon />
        </IconButton>
        {currentQuestion + 1} de {questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
    </>
  );
};
