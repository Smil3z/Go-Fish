import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './HomePage.css';


function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const journal = useSelector(store => store.journal);
  const history = useHistory();

  {/*const getJournal = () => {
    axios.get('/fishes').then((response) => {
      const action = {type: 'SET_JOURNAL', payload: response.data};
      dispatch(action);
    }).catch((error) => {
      console.error('error in getJournal', error);
      alert('Something went wrong')
    })
  }*/}
  const displayJournal = (journalToDisplay) => {
    console.log(journalToDisplay);
    dispatch({ type: 'SET_JOURNAL_DETAILS', payload: journalToDisplay })
    history.push(`/details/${journalToDisplay.id}`)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_JOURNAL' })
  }, []);

  {/*useEffect(() => {
    getJournal();
  }, []);*/}

  return (


    <div className="container" style={{ display: 'grid', flexWrap: 'wrap', gap: '20px' }}>
      <h2>Welcome, {user.username}!</h2>
      {/*<p>Your ID is: {user.id}</p>*/}
      {/*<ul>
          {getJournal.map}
      </ul>*/}

      {journal.map(journal => {
        return (
          <Card sx={{ maxWidth: 345, backgroundColor:'lightblue', borderWidth: '4px', borderStyle: 'solid', borderColor: 'blue'}} variant='outlined' key={journal.id}>
            <CardActionArea className='card' key={journal.id} onClick={() => displayJournal(journal)}>
              <CardMedia
                component="img"
                height="140"
                src={journal.image_url}
              />
              <CardContent orientation='vertical' variant='soft'>
                <Typography gutterBottom variant="h5" component="div" >
                  {journal.name}
                </Typography>
                <Typography className='gutter' variant="h8" >
                  {journal.location}
                </Typography>
              </CardContent>
              {/*<h3>{journal.location}</h3>*/}
              {/*<img onClick={() => displayJournal(journal)} src={journal.image_url} />*/}
              {/*<h3>{journal.description}</h3>
                  <h3>{journal.caught_at}</h3>
                  <h3>{journal.length}</h3>
                  <h3>{journal.weight}</h3>*/}
            </CardActionArea>
          </Card>
        )
      })}

      <br />
      <LogOutButton className="btn" />
    </div>



  );
}

// this allows us to use <App /> in index.js
export default HomePage;
