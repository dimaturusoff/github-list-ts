import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchItems } from "../../entities/project/slice";
import { Alert, AspectRatio, Avatar, Box, Card, CircularProgress, Grid, Link, Typography } from "@mui/joy";
import styles from './styles.module.css';

const HomePage = memo(function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.project);
  const [page, setPage] = useState(1);

  const handleScroll = useCallback(() => {
    const offset = document.documentElement.offsetHeight;
    if (window.innerHeight + document.documentElement.scrollTop <= offset - offset * 0.1  || loading) return;

    setPage((prev) => prev + 1);
    dispatch(fetchItems(page + 1));
  }, [dispatch, loading, page, items.length]);

  useEffect(() => {
      dispatch(fetchItems(1));
  }, [dispatch]);

  useEffect(() => {
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box sx={{ p: 3 }} className={styles.wrapper}>
      <div className={styles.title}>
      <Typography level="h1" >
        Popular TypeScript Repositories
      </Typography>
      </div>
      {error && (
        <Alert className={styles.error}>
        <Typography level="title-md">
          {error}
        </Typography>
        </Alert>
      )}

      {!error && !!items.length && (
        <Grid className={styles.list} container spacing={2} sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <Card key={item.id} className={styles.item} variant="outlined" sx={{ width: 300 }}>
              <AspectRatio>
                <div>
                  <Avatar alt={item.owner.login} src={item.owner.avatar_url} />
                </div>
              </AspectRatio>
              <div>
                <Typography level="title-md">{item.name} - ⭐ {item.stargazers_count}</Typography>
                <Typography className={styles.description} level="body-sm">{item.description}</Typography>
              </div>
              <div>
                <Link target="_blank" href={item.html_url}>Show in github</Link>
              </div>
            </Card>
          ))}
        </Grid>
      )}
      {loading && (<div className={styles.loading}><CircularProgress variant="solid" /></div>)}
    </Box>);
});

export default HomePage;
