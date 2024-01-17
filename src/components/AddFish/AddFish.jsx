import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function AddFish() {
    const add = useSelector( store => store.add );
    {/*const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [caughtAt, setCaughtAt] = useState('');
    const [length, setLength] = useState('');
    const [weight, setWeight] = useState('');*/}
    const history = useHistory();
    const dispatch = useDispatch ();
    const { id } = useParams();

    {/*const submitForm = (event) => {
        event.preventDefault();
        dispatch
    }*/}

    useEffect(() => {
        dispatch({ type: 'FETCH_ADD', payload: id});
    },[]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            
            <div>
                <h2> Add Fish</h2>
                <br />
                <TextField label="Name" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Location" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Image url" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Description" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Caught at" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Length" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <TextField label="Weight" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}/>
                <br />
                <br />
                <Button variant="contained"> Add </Button>
            </div>
        </Box>
    );
}

export default AddFish;