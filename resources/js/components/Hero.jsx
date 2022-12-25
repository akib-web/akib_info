import React from 'react';
import ReactDOM from 'react-dom/client';
import { content } from "../Content"
import Typed from 'react-typed'
import Hero_profile from '../assets/images/Akib.jpg';
import Resume from './Resume';


function Hero() {
    const {hero} = content;
    return (
        <>
            <div className="">
                <div className="bg-hero-cover bg_image h-[55vh]"></div>
                <div className="hero-section">
                    <div className="container h-[100%] relative top-[-300px]">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start absolute w-[100%] left-0 top-[calc(50%+130px)] bg-[#fff] shadow-lg rounded-lg">
                            <div className="w-[300px] h-[300px] relative top-[-150px]  ">
                                <div className="header_profile h-[100%] bg-[#fff] rounded-lg shadow-lg p-4 m-4">
                                    <img src={Hero_profile} className="max-w-full h-[auto] rounded-lg" alt="" />
                                </div>
                                <h1 className="text-4xl text-center m-4">Md. Akib Rahman</h1>
                            </div>
                            <div className="w-[100%] lg:w-[calc(100%-300px)] flex flex-col lg:flex-row justify-between">
                                <div className="w-[100%] lg:w-[45%] header_profile_content flex flex-col items-center lg:items-start lg:m-4">
                                    <div className="text-2xl p-4">
                                        <span>I'm </span>
                                        <Typed  strings={hero.typed_title}
                                                typeSpeed={80}
                                                backSpeed={60}
                                                attr="placeholder"
                                                loop >
                                                <input className="outline-0" type="text" readOnly/>
                                        </Typed>
                                    </div>
                                    <p className="mt-3 p-4 lg:p-0 text-[18px]">I'm working as a web developer since 2019. Gethering experince with live projects. Also performing with new technologies.</p>
                                    <div className="social_links flex gap-2 mt-4 pl-4 pb-4">
                                        <a className="btn btn-md hover:bg-[#000] hover:text-[#fff] bg-[#aaa]">Facebok</a>
                                        <a className="btn btn-md hover:bg-[#000] hover:text-[#fff] bg-[#45a]">Facebok</a>
                                        <a className="btn btn-md hover:bg-[#000] hover:text-[#fff] bg-[#46a]">Facebok</a>
                                    </div>
                                </div>
                                <div className="w-[100%] lg:w-[45%] header_profile_content flex flex-col items-center justify-center lg:m-4">
                                    <div className="text-4xl">
                                        Donwload
                                    </div>
                                    <div className="social_links flex gap-2 mt-4">

                                        <Resume/>

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

// if (document.getElementById('Hero')) {
//     const Index = ReactDOM.createRoot(document.getElementById("Hero"));
//     Index.render(
//         <React.StrictMode>
//             <Hero />
//         </React.StrictMode>
//     )
// }
