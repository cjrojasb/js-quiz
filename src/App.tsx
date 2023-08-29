import "./App.css";
import { Container, Typography, Stack } from "@mui/material";
import { Game } from "./components/Game";
import { JavaScriptLogo } from "./components/shared/JavascriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";

function App() {
  const { questions } = useQuestionsStore();

  const renderGame = () => {
    return questions.length > 0 ? <Game /> : <Start />;
  };

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <JavaScriptLogo />
          <Typography variant="h3" component="h2">
            JavaScript Quizz
          </Typography>
        </Stack>
        {renderGame()}
      </Container>
    </main>
  );
}

export default App;
