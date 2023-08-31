import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import styles from './index.module.css';
import { Carousel, Image } from 'antd';


export const gamePageLoader = async ({params}) => {
    const currentGame = store.getState()?.games?.currentGame; 

    if (currentGame?.id !== params.id) {
        console.log('FETCH');
        await store.dispatch.games.fetchGame(params.id);
    }
  
    return null;
};

function GamePage() {
    const navigate = useNavigate();

    useLoaderData();

    const error = useSelector(state => state.games.error);
    const game = useSelector(state => state.games.currentGame);
    const currentGameIsLoading = useSelector(state => state.games.currentGameIsLoading);


    console.log(game);

    if (error !== '') {
        return alert(error);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ position: 'static' }}>
                    <Toolbar>
                    <Button variant="contained" onClick={() => navigate(-1)}>
                        back to games
                    </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {currentGameIsLoading ? (
            <div className={styles.loaderContainer}>
                <div className="spinner"></div>
            </div>) : (<Card>
                <div>
                    <CardMedia
                        sx={{    minWidth: '300px', maxWidth: '750px', objectFit: 'cover' }}
                        component='img'
                        image={game.thumbnail}
                        title='{game.title} "image"'
                        />
                    <CardContent>
                        <Typography gutterBottom variant='h4' component='h4'>{game.title}</Typography>
                        <Typography variant='body1'>Developer: {game.developer}</Typography>
                        <Typography variant='body1'>Genre: {game.genre}</Typography>
                        <Typography variant='overline'>Release date: {game.release_date}</Typography>
                        <Typography variant='body1'>Publisher: {game.publisher}</Typography>
                        <Typography variant='overline'>Minimum system requiremments:</Typography>
                        <Typography variant='body2'>Graphics: {game.minimum_system_requirements.graphics}</Typography>
                        <Typography variant='body2'>Memory: {game.minimum_system_requirements.memory}</Typography>
                        <Typography variant='body2'>os: {game.minimum_system_requirements.os}</Typography>
                        <Typography variant='body2'>processor: {game.minimum_system_requirements.processor}</Typography>
                        <Typography variant='body2'>storage: {game.minimum_system_requirements.storage}</Typography>
                        <Carousel className={styles.carousel} >
                            {game.screenshots.map(e => {
                                return <div><Image minWidth={300} maxWidth={750} src={`${e.image}`} /></div>
                            })}
                        </Carousel>
                    </CardContent>
                </div>
            </Card>)}
        </>
    );
}

export default GamePage;