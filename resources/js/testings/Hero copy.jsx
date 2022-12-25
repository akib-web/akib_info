import React from 'react';
import ReactDOM from 'react-dom/client';

function Hero() {
    return (
        <>
            <div className="h-[200px] md:h-[350px]">
                <div className="bg-hero-cover bg_image h-100">
                    <div className="container h-100 relative">
                        <div className="absolute w-100 left-0 top-[80%] bg-[#fff] rounded-lg shadow-lg">
                            <div className="grid md:grid-cols-12 flex flex-col md:flex-row items-start">
                                <div class="md:col-span-2 flex flex-col lg:flex-row m-2 md:m-4 p-4">
                                    <div className="header_profile absolute top-[-100px] bg-[#fff] shadow-lg rounded-lg">
                                        <div class="p-4  rounded-lg">
                                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" class="max-w-full h-[150px]  rounded-lg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-5 md:m-4 p-4">
                                    <div className="header_profile_content w-[60%] m-2 md:m-4 p-4">
                                        <h1 className="text-4xl text-weight">Md. Akib Rahman</h1>
                                        <div className="text-2xl">
                                            I'm Web developer.
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, laudantium!</p>
                                        <div className="flex">
                                         <i>#</i>
                                         <i>@</i>
                                         <i>%</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-5 md:m-4 p-4">
                                    <div className="card">
                                        <div className="card-header">Content section</div>
                                        <div className="card-body">this is my hero section! </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;

if (document.getElementById('Hero')) {
    const Index = ReactDOM.createRoot(document.getElementById("Hero"));
    Index.render(
        <React.StrictMode>
            <Hero />
        </React.StrictMode>
    )
}
