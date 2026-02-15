import React from "react";

function LogoIcon({ isScrolled, currentPage, handleNavClick }) {
    const isActive = isScrolled || currentPage !== "home";

    return (
        <div
            className="flex items-center cursor-pointer select-none group"
            onClick={() => handleNavClick("home")}
        >


            {/* ================= TEXT ================= */}
            <div className="leading-none">
                {/* Main Brand */}
                <h1
                    className={`text-xl md:text-2xl font-black tracking-[0.2em] transition-all duration-300
                    ${isActive ? "text-teal-900" : "text-white"}
                    group-hover:tracking-[0.25em]`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    DELTA ONE
                </h1>

                {/* Advisory */}
                <div className="relative inline-block">
                    <h2
                        className={`text-sm md:text-base uppercase tracking-[0.35em] font-medium
                        ${isActive ? "text-teal-600" : "text-teal-300"}
                        transition-all duration-300`}
                    >
                        ADVISORY
                    </h2>

                    {/* Underline */}
                    <div
                        className={`absolute left-0 bottom-0 h-[2px] w-full
                        ${isActive ? "bg-teal-600/30" : "bg-teal-300/30"}
                        scale-x-0 group-hover:scale-x-100
                        transition-transform duration-300 origin-left`}
                    />
                </div>

                {/* Tagline */}
                <p
                    className={`text-[0.6rem] md:text-xs tracking-[0.3em] uppercase mt-2
                    ${isActive ? "text-gray-900" : "text-black"}
                    transition-all duration-300`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    Bespoke • Insights • Value
                </p>
            </div>
        </div>
    );
}

export default LogoIcon;
