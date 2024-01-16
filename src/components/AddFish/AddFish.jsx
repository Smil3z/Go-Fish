import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddFish() {
    const edit = useSelector( store => store.edit );
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
        dispatch({ type: 'FETCH_DETAILS', payload: id});
    },[]);
}

export default AddFish;