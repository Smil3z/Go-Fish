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
import axios from 'axios';
import './AddFish.css';

function AddFish() {
    // const add = useSelector( store => store.add );
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
   // let [imagePath, setImagePath] = useState('');
   // let [imageList, setImageList] = useState([]);

    const onFileChange = async (event) => {
        // Access the selected file
        const fileToUpload = event.target.files[0];
    
        // Limit to specific file types.
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    
        // Check if the file is one of the allowed types.
        if (acceptedImageTypes.includes(fileToUpload.type)) {
          const formData = new FormData();
          formData.append('file', fileToUpload);
          formData.append('upload_preset', process.env.REACT_APP_PRESET);
          let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
          axios.post(postUrl, formData).then(response => {
            console.log('Success!', response);
            setImageUrl(response.data.secure_url);
          }).catch(error => {
            console.log('error', error);
            alert('Something went wrong');
          })
        } else {
          alert('Please select an image');
        }
      }

    const addNewFish = (event) => {
        event.preventDefault();
        dispatch({ 
            type: 'SEND_FISH_TO_SERVER' , 
            payload: { name, location, imageUrl, description, caughtAt, length, weight} 
        })
        history.push('/home');
    }

    useEffect(() => {
        if (id) {
            axios.get(`/api/journal/${id}`).then(response => {
                const fish = response.data;
                setName(fish.name);
                setLocation(fish.location);
                setImageUrl(fish.imageUrl);
                setDescription(fish.description);
                setCaughtAt(fish.caughtAt);
                setLength(fish.length);
                setWeight(fish.weight);
            }).catch(error => {
                console.log(error);
                alert('something went wrong');
            })
        }
    },[id]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl onSubmit={addNewFish} >
                <h2> Add Fish</h2>
                <div className='inputs' >
                    <br />
                    <TextField value={name} onChange={(event) => 
                        setName(event.target.value)} 
                        label="Name" 
                        id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        variant='filled'
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={location} onChange={(event) => 
                        setLocation(event.target.value)} 
                        label="Location" 
                        variant='filled'
                        id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField onChange={onFileChange} 
                        type="file"
                        accept="image/*"
                        //label="Image url" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        variant='filled'
                        fullWidth
                    />
                    <p>{imageUrl}</p>
                    <br />
                    <TextField value={description} onChange={(event) => 
                        setDescription(event.target.value)} 
                        label="Description" 
                        id="outlined-start-adornment" 
                        variant='filled'
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField value={caughtAt} onChange={(event) => 
                        setCaughtAt(event.target.value)} 
                        label="Date" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        variant='filled'
                        fullWidth
                    />
                    <br />
                    <TextField value={length} onChange={(event) => 
                        setLength(event.target.value)} 
                        label="Length" 
                        id="outlined-start-adornment" 
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                        variant='filled'
                    />
                    <br />
                    <TextField value={weight} onChange={(event) => 
                        setWeight(event.target.value)} 
                        label="Weight" 
                        id="outlined-start-adornment" 
                        variant='filled'
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{ sx: { color: 'black', backgroundColor: 'white', '&.Mui-focused': { color: 'black', backgroundColor: 'white' } } }}
                        required
                        fullWidth
                    />
                    <br />
                    <br />
                    <Button onClick={addNewFish} type="submit" variant="contained"> Add </Button>
                </div>
            </FormControl>
        </Box>
    );
}

export default AddFish;