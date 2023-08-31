import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import { useState } from 'react';
import { sports, shooter, mmorpg, none } from '../../store/store';
import { useDispatch } from 'react-redux';

function Nav() {
    const [selectValue, setSelectValue] = useState('none');

    const dispatch = useDispatch();
    
    if (selectValue === 'sports') {
        dispatch(sports);
    } else if (selectValue === 'shooter') {
        dispatch(shooter);
    } else if (selectValue === 'mmorpg') {
        dispatch(mmorpg);
    } if (selectValue === 'none') {
        dispatch(none);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ position: 'static' }}>
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                    <FormControl>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Genre
                        </InputLabel>
                        <NativeSelect 
                            onChange={e => setSelectValue(e.target.value)}
                            defaultValue={none}
                            inputProps={{
                            name: 'Genre',
                            }}
                        >
                            <option value={'none'}>None</option>
                            <option value={'shooter'}>Shooter</option>
                            <option value={'mmorpg'}>MMORPG</option>
                            <option value={'sports'}>Sports</option>
                        </NativeSelect>
                    </FormControl>
                    </div>
                    <Typography variant="h6" component="div">
                        Game List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;