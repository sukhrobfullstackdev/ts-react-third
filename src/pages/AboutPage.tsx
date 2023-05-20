import React from 'react';
import {useNavigate} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda, blanditiis culpa cumque
                doloremque hic molestias officiis quaerat vel voluptate!</p>
            <button className={"btn"} onClick={()=> navigate('/')}>Back</button>
        </div>
    );
};

