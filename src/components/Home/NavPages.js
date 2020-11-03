import React, {useState} from 'react';
import './scss/navPages.scss';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

const NavPages = () =>{

    const [login, setLogin] = useState(false);

    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            setLogin(user.email);
        }else{
            setLogin(false);
        }
    });

    if (login) {
        return(
            <>
                <p className="hello">Cześć {login}</p>
                <Link to='/logout' className="navPages">Wyloguj</Link>
                <Link className="navPages" to="/">Główna</Link>
            </>
        );

    } else{
        return(
            <>
                <Link className="navPages" to="/">Główna</Link>
                <Link className="navPages" to="/login">Zaloguj</Link>
                <Link className="navPages" to="/register">Zarejstruj</Link>
            </>
        );
    };
};

export default NavPages;