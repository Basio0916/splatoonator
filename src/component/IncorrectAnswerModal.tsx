import { Button, Card, Modal, Stack } from "@mui/material";
import { FC } from "react";

/**
 * IncorrectAnswerModalコンポーネントのプロパティ
 * @param open モーダルの表示状態
 * @param setOpen モーダルの表示状態を変更する関数
 * @param onClose モーダルを閉じたときのコールバック関数
 */
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose?: (retire: boolean) => void;
};

/**
 * 不正解モーダルコンポーネント
 * @param props プロパティ
 * @returns IncorrectAnswerModalコンポーネント
 */
const IncorrectAnswerModal: FC<Props> = (props) => {
  const { open, setOpen, onClose } = props;
  const handleClose = (_event: {}, reason: string) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleClickContinue = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(false);
    }
    setOpen(false);
  };

  const handleClickRetire = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(true);
    }
    setOpen(false);
  };
  return (
    <Modal open={open} onClose={handleClose} sx={{}}>
      <Card
        sx={{
          width: "90%",
          maxWidth: "400px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          overflow: "auto",
          maxHeight: "80%",
        }}
      >
        <h1>不正解</h1>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            sx={{ width: "150px", fontSize: "18px", marginTop: "10px" }}
            onClick={handleClickContinue}
          >
            続ける
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ width: "150px", fontSize: "18px", marginTop: "10px" }}
            onClick={handleClickRetire}
          >
            あきらめる
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
};

export default IncorrectAnswerModal;
