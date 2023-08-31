import { initialFilters } from "../../utils/types";

export default {
    name: 'filters',
    state: initialFilters, 
    reducers: {
      setGenre(state, genre) {
        return {...state, genre };
      },
      setPlatform(state, platform) {
        return {...state, platform };
      },
      setSortBy(state, sortBy) {
        return {...state, sortBy};
      },
    },
  };


