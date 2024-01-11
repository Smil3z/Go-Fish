import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DetailsPage() {
  return (
    <div className="container">
      <p>Details Page</p>
    </div>
  );
}

export default DetailsPage;