import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question as QuestionType } from "../types";
import { useQuestionsStore } from "../store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  if (userSelectedAnswer == null) return "transparent";
  if (index != correctAnswer && index != userSelectedAnswer)
    return "transparent";
  if (index == correctAnswer) return "green";
  if (index == userSelectedAnswer) return "red";

  return "transparent";
};

export const Question = ({ info }: { info: QuestionType }) => {
  const { selectAnswer } = useQuestionsStore();

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card variant="outlined">
      <CardContent sx={{ bgcolor: "#222", textAlign: "left" }}>
        <Typography variant="h5">{info.question}</Typography>
        <SyntaxHighlighter language="javascript" style={solarizedDark}>
          {info.code}
        </SyntaxHighlighter>
        <List sx={{ bgcolor: "#333" }} disablePadding>
          {info.answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton
                sx={{ bgcolor: getBackgroundColor(info, index) }}
                onClick={handleClick(index)}
                disabled={info.userSelectedAnswer != null}
              >
                <ListItemText primary={answer} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
