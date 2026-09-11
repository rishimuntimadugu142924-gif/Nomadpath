/**
 * Subtle Travel-Themed Background Illustration
 * Features an elegant, low-contrast world map outline and a minimalist airplane flight trajectory.
 */

export function TravelIllustration() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full text-stone-200"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Soft linear gradient for flight path */}
          <linearGradient id="flightPathGrad" x1="15%" y1="65%" x2="85%" y2="25%">
            <stop offset="0%" stopColor="#d6d3d1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#a8a29e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#d6d3d1" stopOpacity="0.15" />
          </linearGradient>

          {/* Subtle dots pattern for map texture */}
          <pattern id="dotGrid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#e7e5e4" fillOpacity="0.5" />
          </pattern>
        </defs>

        {/* Global subtle dot grid */}
        <rect width="100%" height="100%" fill="url(#dotGrid)" />

        {/* Subtle stylized World Map Outlines (abstracted minimalist landmass contours) */}
        <g stroke="#e2e0dc" strokeWidth="1.2" fill="none" opacity="0.45">
          {/* North America outline */}
          <path d="M 120 180 C 180 140, 260 150, 320 190 C 350 240, 310 320, 270 380 C 230 420, 190 380, 160 320 C 120 280, 100 230, 120 180 Z" />
          
          {/* South America outline */}
          <path d="M 280 440 C 330 460, 350 540, 340 620 C 310 700, 270 760, 240 730 C 220 670, 230 580, 250 510 Z" />

          {/* Europe outline */}
          <path d="M 680 180 C 740 160, 810 170, 830 220 C 820 270, 770 290, 720 300 C 660 290, 640 240, 680 180 Z" />

          {/* Africa outline */}
          <path d="M 670 340 C 760 330, 820 400, 810 490 C 790 580, 740 680, 700 690 C 650 670, 630 560, 640 450 C 645 390, 650 360, 670 340 Z" />

          {/* Asia & India outline */}
          <path d="M 850 170 C 960 140, 1150 160, 1260 220 C 1290 320, 1230 420, 1140 450 C 1080 430, 1030 460, 990 510 C 970 540, 950 570, 930 540 C 900 480, 890 420, 880 340 C 850 300, 820 240, 850 170 Z" />
          
          {/* India subcontinent detail peninsula */}
          <path d="M 910 380 C 940 420, 960 480, 940 530 C 920 480, 890 440, 900 400" strokeDasharray="3 3" />

          {/* Australia / Oceania outline */}
          <path d="M 1160 560 C 1240 540, 1300 590, 1290 670 C 1240 720, 1170 700, 1140 650 C 1130 600, 1140 570, 1160 560 Z" />
        </g>

        {/* Elegant curved flight paths with dashed styling */}
        {/* Main flight arc across the screen */}
        <path
          d="M 280 400 Q 560 140 920 420 T 1220 280"
          fill="none"
          stroke="url(#flightPathGrad)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />

        {/* Secondary subtle flight trajectory arc */}
        <path
          d="M 690 320 Q 820 280 925 435"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.5"
        />

        {/* Minimalist Airplane Icon traversing along the primary flight path */}
        <g transform="translate(640, 240) rotate(-18)">
          <path
            d="M 0,-16 L 3,-6 L 16,-2 L 16,3 L 3,1 L 2,12 L 7,16 L 7,19 L 0,17 L -7,19 L -7,16 L -2,12 L -3,1 L -16,3 L -16,-2 L -3,-6 Z"
            fill="#a8a29e"
            opacity="0.75"
          />
          {/* Subtle glow ring around airplane */}
          <circle cx="0" cy="0" r="22" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
        </g>

        {/* Minimalist destination waypoint dots & coordinates */}
        <g opacity="0.6">
          {/* Origin waypoint (India/South Asia) */}
          <circle cx="925" cy="435" r="4" fill="#78716c" />
          <circle cx="925" cy="435" r="9" stroke="#a8a29e" strokeWidth="1" strokeDasharray="2 2" />
          <text x="940" y="440" fill="#a8a29e" fontSize="10" fontFamily="system-ui" letterSpacing="0.1em">
            28°N 77°E · DEL
          </text>

          {/* Destination waypoint 1 (Europe) */}
          <circle cx="710" cy="270" r="3.5" fill="#a8a29e" />
          <text x="722" y="274" fill="#a8a29e" fontSize="9" fontFamily="system-ui" letterSpacing="0.1em">
            CDG
          </text>

          {/* Destination waypoint 2 (East Asia) */}
          <circle cx="1210" cy="290" r="3.5" fill="#a8a29e" />
          <text x="1222" y="294" fill="#a8a29e" fontSize="9" fontFamily="system-ui" letterSpacing="0.1em">
            HND
          </text>
        </g>

        {/* Delicate Compass Rose in top-right */}
        <g transform="translate(1340, 90)" opacity="0.25">
          <circle cx="0" cy="0" r="38" stroke="#78716c" strokeWidth="1" />
          <circle cx="0" cy="0" r="42" stroke="#a8a29e" strokeWidth="0.75" strokeDasharray="2 4" />
          <line x1="0" y1="-34" x2="0" y2="34" stroke="#78716c" strokeWidth="1" />
          <line x1="-34" y1="0" x2="34" y2="0" stroke="#78716c" strokeWidth="1" />
          <polygon points="0,-36 3,-10 0,0 -3,-10" fill="#78716c" />
          <polygon points="0,36 3,10 0,0 -3,10" fill="#a8a29e" />
          <text x="-4" y="-42" fill="#78716c" fontSize="10" fontWeight="bold">N</text>
        </g>
      </svg>
    </div>
  );
}
