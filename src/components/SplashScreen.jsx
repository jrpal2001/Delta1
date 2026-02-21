import React, { useState, useEffect } from 'react';
import logo3 from '../assets/logo3.png';

const SplashScreen = ({ onFinish }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFading(true), 2000);
        const finishTimer = setTimeout(() => onFinish(), 3000);
        return () => { clearTimeout(timer); clearTimeout(finishTimer); };
    }, [onFinish]);

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1F1C] transition-opacity duration-1000 ease-in-out ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`text-center transition-all duration-1000 transform ${fading ? 'scale-110' : 'scale-100'}`}>
                <img
                    src={logo3}
                    alt="Delta One Advisory"
                    className="h-32 md:h-50 mb-6 mx-auto animate-pulse"
                    style={{
                        filter: `
            drop-shadow(0 0 6px rgba(0, 200, 170, 0.45))
            drop-shadow(0 0 18px rgba(0, 200, 170, 0.25))`
                    }}
                />
                {/* <p className="text-teal-100 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
          Bespoke. Insights. Value.
        </p> */}
            </div>
        </div>
    );
};

export default SplashScreen;
