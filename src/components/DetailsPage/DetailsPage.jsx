import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


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

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id});
  }, [id])

    return ( 
      <div>
        <h1>{id}</h1>
        <h3>{details.description}</h3>
        <p>{details.caught_at}</p>
        <p>{details.length}</p>
        <p>{details.weight}</p>
        <Button onClick={edit} type="submit" variant="contained"> edit </Button>
        <Link to= {`/add`}> Add </Link>
        <Button varient="outlined" color="error" onClick={() => deleteFish(details.id)}>Delete</Button>
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