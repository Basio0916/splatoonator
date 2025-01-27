import { useState } from "react";
import Header from "./component/Header";
import Answer from "./domain/Answer";
import HowToPlayModal from "./component/HowToPlayModal";
import CorrectAnswerModal from "./component/CorrectAnswerModal";
import IncorrectAnswerModal from "./component/IncorrectAnswerModal";
import AnswerModal from "./component/AnswerModal";
import QuestionModal from "./component/QuestionModal";
import QuestionAnswer from "./domain/QuestionAnswer";
import QuestionAnswerHistory from "./component/QuestionAnswerHistory";
import { Box, Button, Stack } from "@mui/material";
import SubmissionModal from "./component/SubmissionModal";
import Result from "./domain/Result";
import ProgressModal from "./component/ProgressModal";
import QuestionHistoryModal from "./component/QuestionHistoryModal";
import TYPES from "./type/types";
import Weapon from "./domain/Weapon";
import GetAnswerUsecase from "./usecase/GetAnswerUsecase";
import WeaponRepository from "./domain/repository/WeaponRepository";
import SubmitUsecase from "./usecase/SubmitUsecase";
import QuestionUsecase from "./usecase/QuestionUsecase";
import Prompt from "./domain/Prompt";
import PromptRepository from "./domain/repository/PromptRepository";
import JsonMainWeaponRepository from "./infrastructure/persistence/json/JsonMainWeaponRepository";
import MainWeaponRepository from "./domain/repository/MainWeaponRepository";
import SubWeaponRepository from "./domain/repository/SubWeaponRepository";
import JsonSubWeaponRepository from "./infrastructure/persistence/json/JsonSubWeaponRepository";
import SpecialWeaponRepository from "./domain/repository/SpecialWeaponRepository";
import JsonSpecialWeaponRepository from "./infrastructure/persistence/json/JsonSpecialWeaponRepository";
import JsonWeaponRepository from "./infrastructure/persistence/json/JsonWeaponRepository";
import JsonPromptRepository from "./infrastructure/persistence/json/JsonPromptRepository";
import GameStartUsecase from "./usecase/GameStartUsecase";

function App() {
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [incorrectAnswerModalOpen, setIncorrectAnswerModalOpen] =
    useState(false);
  const [correctAnswerModalOpen, setCorrectAnswerModalOpen] = useState(false);
  const [gameStartModalOpen, setGameStartModalOpen] = useState(true);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [progressModalOpen, setProgressModalOpen] = useState(false);
  const [questionHistoryModalOpen, setQuestionHistoryModalOpen] =
    useState(false);

  const [questionAnswers, setQuestionAnswers] = useState<Array<QuestionAnswer>>(
    []
  );
  const [submittedAnswer, setSubmittedAnswer] = useState<string>("");
  const [answerHistory, setAnswerHistory] = useState<Array<Answer>>([]);
  const [selectedAnswersQuestionHistory, setSelectedAnswersQuestionHistory] =
    useState<Array<QuestionAnswer>>([]);

  const [mainWeaponRepository] = useState<MainWeaponRepository>(
    new JsonMainWeaponRepository()
  );
  const [subWeaponRepository] = useState<SubWeaponRepository>(
    new JsonSubWeaponRepository()
  );
  const [specialWeaponRepository] = useState<SpecialWeaponRepository>(
    new JsonSpecialWeaponRepository()
  );
  const [weaponRepository] = useState<WeaponRepository>(
    new JsonWeaponRepository(
      mainWeaponRepository,
      subWeaponRepository,
      specialWeaponRepository
    )
  );
  const [promptRepository] = useState<PromptRepository>(
    new JsonPromptRepository()
  );
  const [prompts] = useState<Prompt[]>(promptRepository.findAll());
  const [weapons] = useState<string[]>(weaponRepository.findAllWeaponNames());
  const [answerWeapon, setAnswerWeapon] = useState<Weapon>(
    weaponRepository.findRandom()
  );

  const gameStart = () => {
    const gameStartUsecase = new GameStartUsecase(weaponRepository);
    setAnswerWeapon(gameStartUsecase.execute());
  };

  const getAnswerWeapon = (): string => {
    const getAnswerUsecase = new GetAnswerUsecase();
    return getAnswerUsecase.execute(answerWeapon);
  };

  const handleHowToPlayModalClose = async () => {
    await gameStart();
  };

  const handleClickQuestion = () => {
    setQuestionModalOpen(true);
  };

  const handleClickAnswer = () => {
    setSubmissionModalOpen(true);
  };

  const handleClickAnswerRow = (answer: Answer) => {
    setSelectedAnswersQuestionHistory(answer.questionHistory);
    setQuestionHistoryModalOpen(true);
  };

  const handleCorrectAnswerModalClose = () => {
    setQuestionAnswers([]);
    gameStart();
  };

  const handleIncorrectAnswerModalClose = (retire: boolean) => {
    if (retire) {
      const answerWeaponName = getAnswerWeapon();

      const answer: Answer = {
        weapon: answerWeaponName,
        isCorrect: false,
        questionHistory: questionAnswers,
      };
      setAnswerHistory([answer, ...answerHistory]);
      setAnswerModalOpen(true);
    } else {
      const questionAnswer: QuestionAnswer = {
        question: `ブキは${submittedAnswer}？`,
        answer: Result.NO,
      };
      setQuestionAnswers([questionAnswer, ...questionAnswers]);
    }
  };

  const handleAnswerModalClose = () => {
    setQuestionAnswers([]);
    gameStart();
  };

  const handleSubmissionModalClose = (selectedWeapon: string) => {
    setSubmittedAnswer(selectedWeapon);
    setProgressModalOpen(true);
    try {
      const submitUsecase = new SubmitUsecase();
      const result = submitUsecase.execute(answerWeapon, selectedWeapon);
      if (result) {
        const answer: Answer = {
          weapon: selectedWeapon,
          isCorrect: true,
          questionHistory: questionAnswers,
        };
        setAnswerHistory([answer, ...answerHistory]);
        setCorrectAnswerModalOpen(true);
      } else {
        setIncorrectAnswerModalOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
    setProgressModalOpen(false);
  };

  const handleQuestionModalClose = (
    questionString: string,
    questionName: string,
    option: string,
    comparator: string
  ) => {
    setProgressModalOpen(true);
    try {
      const questionUsecase = new QuestionUsecase();
      const result = questionUsecase.execute(
        answerWeapon,
        questionName,
        option,
        comparator
      );
      const questionAnswer: QuestionAnswer = {
        question: questionString,
        answer: result,
      };
      setQuestionAnswers([questionAnswer, ...questionAnswers]);
    } catch (error) {
      console.error(error);
    }
    setProgressModalOpen(false);
  };

  return (
    <>
      <Header />
      <HowToPlayModal
        open={gameStartModalOpen}
        setOpen={setGameStartModalOpen}
        onClose={handleHowToPlayModalClose}
      />
      <CorrectAnswerModal
        open={correctAnswerModalOpen}
        setOpen={setCorrectAnswerModalOpen}
        answerHistory={answerHistory}
        onClose={handleCorrectAnswerModalClose}
        onClickAnswer={handleClickAnswerRow}
      />
      <IncorrectAnswerModal
        open={incorrectAnswerModalOpen}
        setOpen={setIncorrectAnswerModalOpen}
        onClose={handleIncorrectAnswerModalClose}
      />
      <AnswerModal
        open={answerModalOpen}
        setOpen={setAnswerModalOpen}
        answerHistory={answerHistory}
        onClose={handleAnswerModalClose}
        onClickAnswer={handleClickAnswerRow}
      />
      <QuestionModal
        open={questionModalOpen}
        setOpen={setQuestionModalOpen}
        prompts={prompts}
        onClose={handleQuestionModalClose}
      />
      <SubmissionModal
        open={submissionModalOpen}
        setOpen={setSubmissionModalOpen}
        weapons={weapons}
        onClose={handleSubmissionModalClose}
      />
      <QuestionHistoryModal
        open={questionHistoryModalOpen}
        setOpen={setQuestionHistoryModalOpen}
        questionHistory={selectedAnswersQuestionHistory}
      />
      <ProgressModal open={progressModalOpen} />
      <Box
        sx={{
          width: "90%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          alignItems: "center",
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      >
        <QuestionAnswerHistory questionAnswers={questionAnswers} />
        <Stack spacing={2} direction="row" sx={{ margin: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "150px",
              fontSize: "18px",
              marginTop: "10px",
            }}
            onClick={handleClickQuestion}
          >
            質問する
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              width: "150px",
              fontSize: "18px",
              marginTop: "10px",
            }}
            onClick={handleClickAnswer}
          >
            回答する
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default App;
