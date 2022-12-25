import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';

function Home(props) {
    let title = props
    return (
        <div className="home_page">
                <Nav />
                <Hero />
        </div>
    );
}

export default Home;

if (document.getElementById('Home')) {
    const Index = ReactDOM.createRoot(document.getElementById("Home"));
    const value = document.getElementById('Home').getAttribute("title");
    Index.render(
        <React.StrictMode>
            <Home title={value}/>
        </React.StrictMode>
    )
}
