import { Box } from "@mui/material";
import { useQuestionsData } from "../hooks/useQuestionsData";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  return (
    <footer>
      <Box mt={2} p={2}>
        <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      </Box>
    </footer>
  );
};
