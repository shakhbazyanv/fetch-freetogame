export const genreTypes = {
    'none': 'none',
    'shooter': 'shooter',
    'mmorpg':'mmorpg',
    'sports': 'sports'
}

export const platformTypes = {
    'all': 'all',
    'browser': 'browser',
    'pc':'pc',
}

export const sortByTypes = {
    'releaseDate': 'release-date',
    'popularity': 'popularity',
    'alphabetical': 'alphabetical',
    'relevance': 'relevance',
}

export const initialFilters = {
  genre: genreTypes.none,
  platform: platformTypes.all,
  sortBy: sortByTypes.alphabetical,
};
