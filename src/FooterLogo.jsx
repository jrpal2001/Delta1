import React from "react";

function LogoIcon() {
    return (
        <div
            className="flex-shrink-0 cursor-pointer select-none group"

        >
            <div className="flex flex-col leading-tight">

                {/* ===== MAIN BRAND ===== */}
                <h1
                    className={`
        text-2xl md:text-3xl font-extrabold tracking-[0.18em]
        transition-all duration-300 text-teal-900
                    `}
                >
                    Delta<span className="font-light mx-1">·</span>One
                </h1>

                {/* Accent Line */}
                {/* <div className="mt-2 h-[1.5px] w-14 bg-teal-600/40 rounded-full group-hover:w-20 transition-all duration-300" /> */}

                {/* ===== ADVISORY ===== */}
                <h2
                    className={`
          text-sm md:text-base uppercase font-medium
          tracking-[0.35em] transition-all duration-300
        text-teal-600 mb-[1rem]
        `}
                >
                    Advisory
                </h2>

                {/* ===== TAGLINE ===== */}
                {/* <div className="flex items-center gap-5 mt-3">
                    <div className="h-px w-10 bg-slate-300" />

                    <p
                        className="
              text-[0.65rem] md:text-xs uppercase
              tracking-[0.28em] font-light
              text-slate-500
            "
                        style={{
                            color: "#fff",
                        }}
                    >
                        Bespoke • Insights • Value
                    </p>

                    <div className="h-px w-10 bg-slate-300" />
                </div> */}

            </div>
        </div>
    );
}

export default LogoIcon;
