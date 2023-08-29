import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

export const Start = () => {
  const { fetchQuestions } = useQuestionsStore();

  const handleClick = () => {
    fetchQuestions(10);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      ¡Empezar!
    </Button>
  );
};
