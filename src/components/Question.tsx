import { Card, CardContent, Typography } from "@mui/material";
import { type Question as QuestionType } from "../types";

export const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{info.question}</Typography>
      </CardContent>
    </Card>
  );
};
