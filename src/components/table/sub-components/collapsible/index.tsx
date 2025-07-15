import {
  Typography,
  IconButton,
  Collapse,
  Container,
  Box,
} from "@mui/material";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import { useCollapsible } from "./hooks";

export type CollapsibleProps = {
  text?: string;
  repoNameHeight: number;
};

export function Collapsible({ text, repoNameHeight }: CollapsibleProps) {
  const { expanded, shouldCollapse, ref, handleToggle } = useCollapsible({
    repoNameHeight,
  });
  return (
    <Container disableGutters sx={{ position: "relative", p: 0 }}>
      <Collapse
        in={expanded}
        collapsedSize={repoNameHeight}
        sx={{
          position: "relative",
          display: shouldCollapse ? "block" : "flex",
          alignItems: shouldCollapse ? "baseline" : "center",
        }}
      >
        <Box ref={ref} pr={4} position="relative">
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              lineHeight: 1.5,
            }}
          >
            {text ?? "-"}
          </Typography>
        </Box>
      </Collapse>

      {shouldCollapse && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <IconButton
            size="small"
            onClick={handleToggle}
            sx={{
              zIndex: 2,
            }}
          >
            {expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </IconButton>
        </Box>
      )}
    </Container>
  );
}
