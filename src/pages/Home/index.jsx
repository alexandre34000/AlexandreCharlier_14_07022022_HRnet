import {useDispatch,  useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getUsers} from '../../_actions/usersActions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[]);


    return (
        <div className="container-home">
            <h2> phrase de presentation et de bienvenue</h2>
        </div>
    );
}

export default Home;