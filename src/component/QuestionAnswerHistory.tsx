import { FC } from "react";
import QuestionAnswer from "../domain/QuestionAnswer";
import Result from "../domain/Result";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ClearIcon from "@mui/icons-material/Clear";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

/**
 * QuestionAnswerHistoryコンポーネントのプロパティ
 * @param questionAnswers 質問履歴
 */
type Props = {
  questionAnswers: Array<QuestionAnswer>;
};

/**
 * 質問履歴コンポーネント
 * @param props プロパティ
 * @returns QuestionAnswerHistoryコンポーネント
 */
const QuestionAnswerHistory: FC<Props> = (props) => {
  const { questionAnswers } = props;

  return (
    <Paper
      data-testid="question-answer-history"
      sx={{ width: "100%", padding: 5, boxSizing: "border-box" }}
    >
      <p style={{ fontWeight: "bold" }}>質問履歴</p>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>質問</TableCell>
              <TableCell>結果</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionAnswers.map((qa, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{questionAnswers.length - index}</TableCell>
                  <TableCell>{qa.question}</TableCell>
                  {qa.answer === Result.YES ? (
                    <TableCell>
                      <PanoramaFishEyeIcon
                        data-testid="yes-icon"
                        style={{ color: "#2e7d32" }}
                      />
                    </TableCell>
                  ) : qa.answer === Result.NO ? (
                    <TableCell>
                      <ClearIcon
                        data-testid="no-icon"
                        style={{ color: "#d32f2f" }}
                      />
                    </TableCell>
                  ) : (
                    <TableCell>
                      <ChangeHistoryIcon
                        data-testid="partial-icon"
                        style={{ color: "#E3D026" }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default QuestionAnswerHistory;
