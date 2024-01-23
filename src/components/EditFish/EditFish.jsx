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
import axios from 'axios'
import './EditFish.css';



function EditFish() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [caughtAt, setCaughtAt] = useState('');
    const [length, setLength] = useState('');
    const [weight, setWeight] = useState('');
    const history = useHistory();
    const dispatch = useDispatch ();
    const { id } = useParams();
    // const edit = useSelector(store => store.edit)

    const editFish = (event) => {
        event.preventDefault();
        dispatch({ 
            type: 'EDIT_DETAILS' , 
            payload: { id, name, location, imageUrl, description, caughtAt, length, weight} 
        })
        history.goBack();
    }



    useEffect(() => {

        if (id) {
            console.log(id);
            axios.get(`/api/details/${id}`).then(response => {
                const edit = response.data;
                
                setName(edit.name);
                setLocation(edit.location);
                setImageUrl(edit.image_url);
                setDescription(edit.description);
                setCaughtAt(getDate(edit.caught_at));
                setLength(edit.length);
                setWeight(edit.weight)
            }).catch (error =>{
                console.error('error in useEffect', error);
            })
            {/*axios.put(`/api/editing${id}`)
                .then(response => {
                    
                    const edit = response.data;

                    setName(edit.name);
                    setLocation(edit.location);
                    setImageUrl(edit.imageUrl);
                    setDescription(edit.description);
                    setCaughtAt(edit.caughtAt);
                    setLength(edit.length);
                    setWeight(edit.weight);
                })
                .catch(error => {
                    console.log(error);
                    alert('Something went wrong');
                });*/}
        };
    }, [id]);
    

    const getDate = (dateString) => {
        let formattedDate = new Date(dateString);
        return formattedDate.toLocaleDateString();
    }

    return (

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl onSubmit={editFish}>
                <h2> Edit Fish</h2>
                <div className='inputs'>
                    <br />
                    <TextField value={name} onChange={(event) => 
                        setName(event.target.value)} 
                        label="Name" 
                        id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={location} onChange={(event) => 
                        setLocation(event.target.value)} 
                        label="Location" 
                        id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={imageUrl} onChange={(event) => 
                        setImageUrl(event.target.value)} 
                        label="Image url" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={description} onChange={(event) => 
                        setDescription(event.target.value)} 
                        label="Description" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={caughtAt} onChange={(event) => 
                        setCaughtAt(event.target.value)} 
                        label="Caught at" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={length} onChange={(event) => 
                        setLength(event.target.value)} 
                        label="Length" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={weight} onChange={(event) => 
                        setWeight(event.target.value)} 
                        label="Weight" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        variant='filled'
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <br />
                    <Button onClick={editFish} type="submit" variant="contained"> Save </Button>
                </div>
            </FormControl>
        </Box>
    )
}

export default EditFish;