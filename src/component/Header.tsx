import { Box, Typography } from "@mui/material";
import { FC } from "react";

/**
 * ヘッダーを表すコンポーネント
 * @returns Headerコンポーネント
 */
const Header: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        textAlign: "center",
        fontSize: "24px",
        margin: "0px",
        padding: "20px",
      }}
    >
      <Typography variant="h4">Splatoonator</Typography>
    </Box>
  );
};

export default Header;
