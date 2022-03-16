import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getUsers} from '../../_actions/usersActions';
import Title from '../../components/Title';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
    },[]);

const subtitle= "Application pour le gestion des ressources humaines";
    return (
        <div className="container-home__presentation">
            <Title height="500px" subTitle={subtitle}/>
        </div>
    );
}

export default Home;