import React from 'react';
import VideoPlayer from './Components/VideoPlayer.jsx';
import Options from './Components/OptionsComponent.jsx';
import Notifications from './Components/Notifications.jsx';

const App = () => {
    return (
        <>
        <div className="wrapper">
            <div className="appbar">
                <img src="/images/logo192.png" alt="logo" className="logo"/><h1 align="center" className="apptitle">MV Connect</h1>
            </div>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
        <footer>
            <div>
                <div>
                    <a class="btn" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                    <a class="btn" href="https://www.facebook.com/marivignesh01/"><i class="fa fa-facebook"></i></a>
                    <a class="btn" href="https://www.linkedin.com/in/marivignesh/"><i class="fa fa-linkedin"></i></a>
                    <a class="btn" href="https://twitter.com/marivigneshr499"><i class="fa fa-twitter"></i></a>
                    <a class="btn" href="https://www.instagram.com/marivignesh499/"><i class="fa fa-instagram"></i></a>
                    <a class="btn" href="mailto:smartvignesh499@gmail.com"><i class="fa fa-envelope-o"></i></a>
                </div>
                <div>
                    <p>© Copyright 2021 MV Connect</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default App
