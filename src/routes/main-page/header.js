import AppBar from '@mui/material/AppBar';
import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, NativeSelect } from '@mui/material';
import { useDispatch } from 'react-redux';
import { genreTypes, platformTypes, sortByTypes } from '../../utils/types';

function Header() {

    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ position: 'static' }}>
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Genre</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            defaultValue={genreTypes.none}
                            label="Genre"
                            onChange={e => dispatch.filters.setGenre(e.target.value)}
                        >
                            <MenuItem value="">
                            <em>Genre</em>
                            </MenuItem>
                            <MenuItem value={genreTypes.none}>None</MenuItem>
                            <MenuItem value={genreTypes.shooter}>Shooter</MenuItem>
                            <MenuItem value={genreTypes.mmorpg}>MMORPG</MenuItem>
                            <MenuItem value={genreTypes.sports}>Sports</MenuItem> 
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Platrform</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            defaultValue={platformTypes.all}
                            label="Platrform"
                            onChange={e => dispatch.filters.setPlatform(e.target.value)}
                        >
                            <MenuItem value="">
                            <em>Platrform</em>
                            </MenuItem>
                            <MenuItem value={platformTypes.all}>All</MenuItem>
                            <MenuItem value={platformTypes.pc}>PC</MenuItem>
                            <MenuItem value={platformTypes.browser}>Browser</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Sort</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            defaultValue={sortByTypes.alphabetical}
                            label="Sort"
                            onChange={e => dispatch.filters.setSortBy(e.target.value)}
                        >
                            <MenuItem value="">
                            <em>Sort</em>
                            </MenuItem>
                            <MenuItem value={sortByTypes.alphabetical}>Alphabetical</MenuItem>
                            <MenuItem value={sortByTypes.popularity}>Popularity</MenuItem>
                            <MenuItem value={sortByTypes.releaseDate}>Release date</MenuItem>
                            <MenuItem value={sortByTypes.relevance}>Relevance</MenuItem>
                        </Select>
                    </FormControl>
                        {/* <InputLabel id="demo-simple-select-standard-label">Genre</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            defaultValue={genreTypes.none}
                            onChange={e => dispatch.filters.setGenre(e.target.value)}
                            label="Genre"
                            >
                            <MenuItem value="">
                                <em>Genre</em>
                            </MenuItem>
                            <MenuItem value={genreTypes.none}>None</MenuItem>
                            <MenuItem value={genreTypes.shooter}>Shooter</MenuItem>
                            <MenuItem value={genreTypes.mmorpg}>MMORPG</MenuItem>
                            <MenuItem value={genreTypes.sports}>Sports</MenuItem> */}
                        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ marginLeft: '113px' }}>
                            Platrform
                        </InputLabel>
                        <NativeSelect
                            sx={{ marginLeft: '10px' }}
                            onChange={e => dispatch.filters.setPlatform(e.target.value)}
                            defaultValue={platformTypes.all}
                            inputProps={{
                            name: 'Platform',
                            }}
                        >
                            <MenuItem value={platformTypes.all}>All</MenuItem>
                            <MenuItem value={platformTypes.pc}>PC</MenuItem>
                            <MenuItem value={platformTypes.browser}>Browser</MenuItem>
                        </NativeSelect>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ marginLeft: '216px' }}>
                            Sort
                        </InputLabel> */}




                        {/* <NativeSelect
                            sx={{ marginLeft: '10px' }}
                            onChange={e => dispatch.filters.setSortBy(e.target.value)}
                            defaultValue={sortByTypes.alphabetical}
                            inputProps={{
                            name: 'sortBy',
                            }}
                        >
                            <MenuItem value={sortByTypes.alphabetical}>Alphabetical</MenuItem>
                            <MenuItem value={sortByTypes.popularity}>Popularity</MenuItem>
                            <MenuItem value={sortByTypes.releaseDate}>Release date</MenuItem>
                            <MenuItem value={sortByTypes.relevance}>Relevance</MenuItem>
                        </NativeSelect>
                        </FormControl>*/}
                    </div> 
                    <Typography variant="h6" component="div">
                        Game List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;