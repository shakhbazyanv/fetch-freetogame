import React from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import styles from './index.module.css';
import {Button, CardActionArea, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText} from "@mui/material";
import ErrorFallback from '../error-fallback';
import { error } from 'console';
import { ErrorBoundary } from 'react-error-boundary';

type gameParam = {
    id:number,
    title:string,
    release_date:string,
    developer:string,
    genre:string,
    platform:string,
    thumbnail:string,
    genreTag:string
}

function Render() {
    const [games, setGames] = React.useState<any>(null);
    const [done ,setDone] = React.useState(false);

    const genreTag = useSelector(state => state);
    const genreSelect = useSelector(state => state === 'none');
    let noneTag
    if (genreSelect == true) {
        noneTag = 'games'
    } else {
        noneTag = 'filter'
    }

    const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/${noneTag}`,
        params: {
            tag: `${genreTag}`,
        },
        headers: {
            'X-RapidAPI-Key': '66e55088d0mshc1ede1438b171eep17c11bjsn6daa646cd15c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setGames(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        fetchData()
        setDone(true)
    }, [])

    return (
        <>
            <Typography variant='h1'>Games from freetogame.com</Typography>
            <div>
                <Button variant="contained" onClick={fetchData}>
                    show games
                </Button>
            </div>
            {!done ? (
            <div className={styles.loaderContainer}>
                <div className="spinner"></div>
            </div>
            ) : (
                <List>
                {games &&
                    games.map((game: gameParam) => {
                        return (
                            <ListItem>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia 
                                            sx={{ width: '500px' }}
                                            component='img'
                                            image={game.thumbnail}
                                            title='{game.title} "image"'
                                            />
                                    <CardContent>
                                        <Typography gutterBottom variant='h2' component='h2'>{game.title}</Typography>
                                        <Typography variant='body1'>Developer: {game.developer}</Typography>
                                        <Typography variant='body1'>Genre: {game.genre}</Typography>
                                        <Typography variant='overline'>Release date: {game.release_date}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ListItem>
                        );
                    })}
            </List>
            )}
        </>
    );
}

export default Render;