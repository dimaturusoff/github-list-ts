import { Box, Typography } from "@mui/joy";
import { memo } from "react";
import styles from './styles.module.css';

const NotFoundPage = memo(function NotFoundPage() {
  return (
    <Box className={styles.wrapper}>
      <Typography level="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'error.main' }}>
        404
      </Typography>
      <Typography>
        Oops! Page not found.
      </Typography>
    </Box>
  );
});

export default NotFoundPage;
