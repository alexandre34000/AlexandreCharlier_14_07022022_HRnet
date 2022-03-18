import { useEffect, useState } from 'react';
import {Table} from 'react-table-charlier';
import {useDispatch,  useSelector} from 'react-redux';
import {getUsers} from '../../_actions/usersActions';
import Title from '../../components/Title';

const ListEmpl = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.listUsers);
    const [isUpload, setIsUpload] = useState(false);
    const optionsTable={
        nbRows:[5,8,10,20],
        color: "grey"
      }

    useEffect(()=>{
      items.length === 0 ? dispatch(getUsers()) : setIsUpload(true);
    },[])

    useEffect(() => {
      if(items.length > 0){
       setIsUpload(true)
      }
    }, [items]);
    const subtitle= "Logiciel de gestion des ressources humaines"

    return (
        <div id="employee-div" className="container-employee-table">
        <Title  subTitle={subtitle}/>
        <div className="employee-table__content">
            <h3 className="employee-table__content-title">List of current Employees</h3>
              <div className="employee-table__content-table">
                { isUpload &&
                  <Table  bodyElements={ items} optionsTable={optionsTable} />
                }
              </div>
        </div>
        </div>
    );
}

export default ListEmpl;