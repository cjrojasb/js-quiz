import './App.css';
import { Container, Typography, Stack } from '@mui/material';
import { JavaScriptLogo } from './components/shared/JavascriptLogo';
import { Start } from './components/Start';

function App() {
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'
          mb={2}
        >
          <JavaScriptLogo />
          <Typography variant='h3' component='h2'>
            JavaScript Quizz
          </Typography>
        </Stack>
        <Start />
      </Container>
    </main>
  );
}

export default App;
