import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.css';
import {Button, CardActionArea, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function GameList() {
    const error = useSelector(state => state.games.error);
    const isLoading = useSelector(state => state.games.isLoading);
    const data = useSelector(state => state.games.data);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    if (error !== '') {
        return alert(error);
    }

    return (
        <>
            <Typography variant='h3' sx={{ margin: '15px' }}>Games from freetogame.com</Typography>
            <div>
                <Button variant="contained" onClick={dispatch.games.fetchGames}>
                    show games
                </Button>
            </div>
            {isLoading ? (
            <div className={styles.loaderContainer}>
                <div className="spinner"></div>
            </div>) : (
                <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
      >
        {data?.map((game) => {
                        return (
                            <Grid key={game.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Card onClick={() => navigate('/game/' + game.id)
                                }>
                                    <CardActionArea>
                                        <CardMedia
                                            sx={{ width: '500px', objectFit: 'cover' }}
                                            component='img'
                                            image={game.thumbnail}
                                            title='{game.title} "image"'
                                            />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' component='h4'>{game.title}</Typography>
                                        <Typography variant='body1'>Developer: {game.developer}</Typography>
                                        <Typography variant='body1'>Genre: {game.genre}</Typography>
                                        <Typography variant='overline'>Release date: {game.release_date}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        );
                    })}
      </Grid>
    </Box>
            )
            }
        </>)
}