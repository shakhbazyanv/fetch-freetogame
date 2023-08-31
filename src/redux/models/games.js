import { getGames, getGame } from "../../utils/api";


export default {
    name: 'games',
    state: {
        data: [],
        isLoading: false,
        currentGame: null,
        currentGameIsLoading: false,
        error: ''
    }, 
    reducers: {
      setGames(state, data) {
        return {...state, data };
      },
      setIsLoading(state, isLoading) {
        return {...state, isLoading };
      },
      setCurrentGame(state, currentGame) {
        return {...state, currentGame };
      },
      setCurrentGameIsLoading(state, currentGameIsLoading) {
        return {...state, currentGameIsLoading };
      },
      setError(state, error) {
        return {...state, error };
      },
    },
    effects: (dispatch) => ({
      async fetchGames(_, rootState) {
        try {
            const genre = rootState.filters.genre;
            const platform = rootState.filters.platform;
            const sortBy = rootState.filters.sortBy;
    
            this.setIsLoading(true);
            this.setError('');
    
            const response = await getGames({ filters: { genre, platform, sortBy }});
    
            this.setIsLoading(false);

            if (response.data) {
                this.setGames(response.data);
            } else {
                this.setError('Не могу получить доступ к списку игр.');
            }
        } catch (err) {
            this.setError(err);
        }
      },

      async fetchGame(id) {
        try {
            this.setError('');
            this.setCurrentGameIsLoading(true);

            const response = await getGame({ id });
    
            this.setCurrentGameIsLoading(false);

            if (response.data) {
                this.setCurrentGame(response.data);
            } else {
                this.setError('Не могу получить доступ к данным выбранной игры.');
            }

        } catch (err) {
            this.setError(err);
        }
      }
    }),
  };


