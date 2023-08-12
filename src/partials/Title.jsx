import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


let currentIndex = 0;

export default function Title() {
    const TEXTS = ['home', 'rental', 'investment'];
    const COLORS = ['#6EE7B7', '#FFD166', '#06D6A0'];

    const handleTitleClick = () => {
        // Add any additional logic you want when the title is clicked.
        // For example, you can change the currentIndex here.
    };

    return (

        <div className="">
            <Link to="/About">
                <h1 className="mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24">Crib<span className="bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland">lytics.</span></h1>
                <p className="text-2xl text-waves mb-8">
                    Find your dream <span className={COLORS[currentIndex]}>{TEXTS[currentIndex]}</span>
                </p>
            </Link>
        </div>
    );
}
