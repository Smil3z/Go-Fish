import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


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
  const displayJournal =(journalToDisplay) => {
    console.log(journalToDisplay);
    dispatch({type: 'SET_JOURNAL_DETAILS', payload: journalToDisplay})
    history.push(`/details/${journalToDisplay.id}`)
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_JOURNAL'})
  }, []);

  {/*useEffect(() => {
    getJournal();
  }, []);*/}

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/*<ul>
          {getJournal.map}
      </ul>*/}
      <section className='journal'>
        {journal.map(journal => {
          return (
            <div key={journal.id}>
              <h3>{journal.name}</h3>
              <h3>{journal.location}</h3>
              <img onClick={() => displayJournal(journal)} src={journal.image_url} />
              <h3>{journal.description}</h3>
              <h3>{journal.caught_at}</h3>
              <h3>{journal.length}</h3>
              <h3>{journal.weight}</h3>
            </div>
          )
        })}
      </section>
    
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
