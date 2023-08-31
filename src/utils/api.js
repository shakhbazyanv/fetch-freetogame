import axios from "axios";
import { initialFilters } from "./types";

const headers = {
    'X-RapidAPI-Key': '66e55088d0mshc1ede1438b171eep17c11bjsn6daa646cd15c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
};

const timeout = 5000;

export const getGames = async ({ filters }) => {
    try {
        const hasFilters = !(initialFilters.genre === filters.genre && initialFilters.platform === filters.platform);

        const options = {
            method: 'GET',
            url: `https://free-to-play-games-database.p.rapidapi.com/api/${hasFilters ? 'filter' : 'games'}`,
            params: { tag: filters.genre, platform: filters.platform, 'sort-by': filters.sortBy },
            headers,
            timeout,
        };

        return await axios.request(options);

    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Сервер долго не отвечает. Повторите попытку позже.');
        } else {
            throw new Error(error);
        }
    }
}

export const getGame = async ({ id }) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id},
            headers,
            timeout,
        };

        return await axios.request(options);

    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Сервер долго не отвечает. Повторите попытку позже.');
        } else {
            throw new Error(error);
        }
    }

}
    