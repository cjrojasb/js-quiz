import { Box, Button } from "@mui/material";
import { reset } from "../store/questions";
import { useQuestionsData } from "../hooks/useQuestionsData";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();

  return (
    <footer>
      <Box mt={2} p={2}>
        <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
        <Box mt={3}>
          <Button onClick={() => reset()}>Reset Game</Button>
        </Box>
      </Box>
    </footer>
  );
};
