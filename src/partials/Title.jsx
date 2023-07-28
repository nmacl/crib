import {useEffect, useState } from 'react'

let currentIndex = 0;


export default function Title() {
    const TEXTS = ['home', 'rental', 'investment'];
    const COLORS = ['#6EE7B7', '#FFD166', '#06D6A0'];


    return (
        <div className="">
            <h1 className="mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24" >Crib<span className="bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland">lytics.</span></h1>
                <p className="text-2xl text-waves mb-8">
                    Find your dream <span className={COLORS[currentIndex]}>{TEXTS[currentIndex]}</span>
                </p>
        </div>
    );
}