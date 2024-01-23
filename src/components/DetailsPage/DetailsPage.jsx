import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Details from './Details.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DetailsPage() {
  const details = useSelector(store => store.details);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  
  {/*const dispatch = useDispatch();*/}
  const deleteFish = (id) => {
    dispatch({ type: 'DELETE_FISH', payload: id})
    console.log('deleting fish', id);
    history.push('/home');
  }
  const edit = (id) => {
    console.log(details.id)
    history.push(`/edit/${details.id}`)
  }

  const add = (id) => {
    history.push('/add')
  }

  const getDate = (dateString) => {
    let formattedDate = new Date(dateString);
    return formattedDate.toLocaleDateString();
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id});
  }, [id])

    return ( 
      <div>
        <h3>{details.description}</h3>
        <ul>
          <li>
            <p>{getDate(details.caught_at)}</p>
          </li>
          <li>
            <p>{details.length}</p>
          </li>
          <li>
          <p>{details.weight}</p>
          </li>
        </ul>
        <section>
          <Button onClick={edit} type="submit" variant="contained"> edit </Button>
          {/*<Link to= {`/add`}> Add </Link>*/}
          <Button onClick={add} type="submit" variant="contained"> Add </Button>
          <Button varient="outlined" color="error" variant="contained" onClick={() => deleteFish(details.id)}>Delete</Button>
        </section>
        <br />
      </div>
    );
      {/*<>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              key={fish.image_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {fish.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {fish.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></>*/}
}

export default DetailsPage;