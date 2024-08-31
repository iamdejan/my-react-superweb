import { IconButton } from "@mui/material";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { JSX } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function CopyToClipboardButton(props: {input: string}): JSX.Element {
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <IconButton
      size="medium"
      sx={{
        maxWidth: "5vw",
        flexGrow: 1
      }}
      onClick={() => void copyToClipboard(props.input)}
    >
      <ContentCopyIcon />
    </IconButton>
  );
}
