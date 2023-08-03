import Users from '../../data/Users';
import { IUserData } from '../../interfaces/User';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function User(): JSX.Element {

    const [users] = useState<IUserData<string, number, object>[]>(Object(Users[0]).results);
    const {id} = useParams();
    const user: IUserData<string, number, object>[] = users.filter((user: IUserData<string, number, object>) => user.login.uuid === id);

    const [userName] = useState<string>(`${user[0].name.first} ${user[0].name.last}`);

    return (
        <div className="d-flex container-desktop p-sm align-center justify-center">
            <h1 className="font-xxxl">{userName}</h1>
        </div>
    )
}

export default User;