import { Button, styled } from "@mui/material";

export const SubmitButton = styled(Button)(() => ({
  width: "120px",
  backgroundColor: "#1976d2",
  color: "#fff",
  borderRadius: "10px",
  fontWeight: "bold",
  "&:hover": {
    color: "#1976d2",
    border: "1px solid #1976d2",
  },
}));
