import React from 'react';
// import directory component
import Directory from '../../components/directory/directory.component';
import './home.styles.scss';
const Home = ({history}) =>(
    <div className="home">
        <Directory />
    </div>
);
export default Home;