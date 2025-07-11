import { useEffect, useRef, useState } from "react";
import {
  Typography,
  IconButton,
  Collapse,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";

type CollapsibleProps = {
  text?: string;
};

const COLLAPSED_HEIGHT = 50;

export function Collapsible({ text }: CollapsibleProps) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [shouldCollapse, setShouldCollapse] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Recalculate when element resizes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      const fullHeight = el.scrollHeight;
      setShouldCollapse(fullHeight > COLLAPSED_HEIGHT + 5);
    };

    checkOverflow();

    const observer = new ResizeObserver(() => {
      checkOverflow();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [text]);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Container disableGutters sx={{ position: "relative", p: 0 }}>
      <Collapse
        in={expanded}
        collapsedSize={COLLAPSED_HEIGHT}
        sx={{ position: "relative" }}
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

          {shouldCollapse && !expanded && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2.5rem",
                background: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
              }}
            />
          )}
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
              bgcolor: theme.palette.background.paper,
              "&:hover": {
                bgcolor: theme.palette.action.hover,
              },
            }}
          >
            {expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </IconButton>
        </Box>
      )}
    </Container>
  );
}
