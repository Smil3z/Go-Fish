import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DetailsPage() {
  const details = useSelector(store => store.details);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  {/*const dispatch = useDispatch();*/}

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