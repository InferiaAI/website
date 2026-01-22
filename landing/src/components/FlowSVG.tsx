import React from "react";

const NODES = [
  { id: "aws", x: 40, y: -160, src: "/aws.svg", label: "AWS" },
  { id: "gcp", x: 170, y: -50, src: "/gcp.svg", label: "GCP" },
  { id: "azure", x: 140, y: 120, src: "/azure.svg", label: "Azure" },
  { id: "akash", x: -120, y: 140, src: "/akash.svg", label: "akash" },
  { id: "nosana", x: -160, y: -60, src: "/nosana.svg", label: "Nosana" },
];

const PROVIDERS = [
  { id: "aws", x: 160, y: 60, src: "/aws.svg", label: "AWS", color: "#FF9900" },
  {
    id: "gcp",
    x: 260,
    y: 190,
    src: "/gcp.svg",
    label: "GCP",
    color: "#4285F4",
  },
  {
    id: "azure",
    x: 150,
    y: 260,
    src: "/azure.svg",
    label: "Azure",
    color: "#0078D4",
  },
  {
    id: "akash",
    x: 240,
    y: 380,
    src: "/akash.svg",
    label: "Akash",
    color: "#FF414C",
  },
  {
    id: "nosana",
    x: 140,
    y: 490,
    src: "/nosana.svg",
    label: "Nosana",
    color: "#14F195",
  },
];


const ORBIT_BADGES = [
  { label: "Policy", color: "#00f2ff" },
  { label: "Scheduling", color: "#bd00ff" },
  { label: "Routing", color: "#ffbd00" },
];

export const MuxIntegrationSVG = () => {
  const width = 800;
  const height = 600;

  const cx = 580;
  const cy = height / 2;

  const outputStartX = cx + 50;
  const outputEndX = width;
  const outputLength = outputEndX - outputStartX;


  const getPath = (x1: number, y1: number, x2: number, y2: number): string => {
    const tension: number = 0.6;
    const cp1x: number = x1 + (x2 - x1) * tension;
    const cp1y: number = y1;
    const cp2x: number = x2 - (x2 - x1) * tension;
    const cp2y: number = y2;
    return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
  };

  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <style>{`
        /* 1. ORBIT ANIMATIONS */
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes counter-orbit { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        
        /* 2. INPUT FLOW (Continuous) */
        @keyframes dash { to { stroke-dashoffset: 0; } }

        /* 3. OUTPUT FLOW (One Shot Pulse) */
        @keyframes flowPulse {
          0% { 
            stroke-dashoffset: 80; /* Starts hidden "upstream" */
            opacity: 0;
          }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { 
            stroke-dashoffset: -${outputLength}; /* Moves fully to end */
            opacity: 0;
          }
        }

        /* 4. FLOAT */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-orbit { animation: orbit 30s linear infinite; }
        .animate-counter-orbit { animation: counter-orbit 30s linear infinite; }
        
        .animate-beam {
          stroke-dasharray: 10 200; 
          stroke-dashoffset: 210;
          animation: dash 3s linear infinite;
        }

        /* The New Output Beam Class */
        .beam-output {
          stroke-dasharray: 60 600; /* 60px Line, 600px Gap (Single shot) */
          stroke-linecap: round;
          animation: flowPulse 2.5s ease-out infinite;
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[800px]"
        fill="none"
      >
        <defs>
          <linearGradient id="glassSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="glassBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {PROVIDERS.map((node, i) => {
          const startX = node.x + 28;
          const startY = node.y + 28;
          const d = getPath(startX, startY, cx, cy);
          return (
            <React.Fragment key={node.id}>
              <path
                d={d}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={d}
                stroke="url(#glassBorder)"
                strokeWidth="2"
                fill="none"
                className="animate-beam"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </React.Fragment>
          );
        })}

        <line
          x1={outputStartX}
          y1={cy}
          x2={outputEndX}
          y2={cy}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
        />

        <line
          x1={outputStartX}
          y1={cy}
          x2={outputEndX}
          y2={cy}
          stroke="#00f2ff"
          strokeWidth="4"
          className="beam-output"
          opacity="0.4"
          filter="url(#neon-glow)"
        />

        <line
          x1={outputStartX}
          y1={cy}
          x2={outputEndX}
          y2={cy}
          stroke="white"
          strokeWidth="2"
          className="beam-output"
        />

        {PROVIDERS.map((node, i) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <g
              className="animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <rect
                x="2"
                y="10"
                width="52"
                height="52"
                rx="14"
                fill="#000"
                opacity="0.5"
              />
              <rect
                width="56"
                height="56"
                rx="14"
                fill="url(#glassSurface)"
                stroke="url(#glassBorder)"
                strokeWidth="1"
              />
              <rect
                x="2"
                y="2"
                width="52"
                height="52"
                rx="12"
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
              <image href={node.src} x="14" y="14" width="28" height="28" />
              <text
                x="28"
                y="72"
                textAnchor="middle"
                fill="#555"
                fontSize="10"
                fontFamily="monospace"
                className="uppercase tracking-widest font-bold"
              >
                {node.label}
              </text>
            </g>
          </g>
        ))}

        <g transform={`translate(${cx}, ${cy})`}>
          <circle
            cx="0"
            cy="0"
            r="90"
            stroke="rgba(255,255,255,0.1)"
            strokeDasharray="2 4"
            strokeWidth="1"
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />

          <g className="animate-orbit">
            {ORBIT_BADGES.map((badge, i) => {
              const angle = (i * 360) / ORBIT_BADGES.length;
              const rad = (angle * Math.PI) / 180;
              const bx = Math.cos(rad) * 100; // Radius matches ring
              const by = Math.sin(rad) * 100;

              return (
                <g key={i} transform={`translate(${bx}, ${by})`}>
                  <g className="animate-counter-orbit">
                    <rect
                      x="-35"
                      y="-10"
                      width="60"
                      height="17"
                      rx="  4"
                      fill="#000"
                      stroke={badge.color}
                      strokeWidth="1"
                      fillOpacity="0.8"
                    />

                    <circle cx="-28" cy="-1" r="2" fill={badge.color} />

                    <text
                      x="0"
                      y="1"
                      textAnchor="middle"
                      fill={badge.color}
                      fontSize="7"
                      fontFamily="monospace"
                      fontWeight="bold"
                      letterSpacing="1"
                    >
                      {badge.label}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>

          <g transform="translate(-45, -45)">
            <circle cx="45" cy="45" r="35" fill="white" opacity="0.03" />

            <rect
              width="90"
              height="90"
              rx="22"
              fill="#050505"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            <rect
              width="90"
              height="90"
              rx="22"
              fill="url(#glassBorder)"
              opacity="0.1"
            />

            <rect
              x="3"
              y="3"
              width="84"
              height="84"
              rx="19"
              stroke="white"
              strokeOpacity="0.05"
              strokeWidth="1"
            />

            <image
              href="/inferia.svg"
              x="20"
              y="20"
              width="50"
              height="50"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const RadialIntegrationsSVG = () => {
  const width = 600;
  const height = 600;
  const cx = width / 2;
  const cy = height / 2;

  const getPath = (nx: number, ny: number): string => {
    const cp1x: number = nx + (cx - nx) * 0.5;
    const cp1y: number = ny;
    const cp2x: number = nx + (cx - nx) * 0.5;
    const cp2y: number = cy;

    return `M ${nx} ${ny} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${cx} ${cy}`;
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-[#050505] overflow-hidden">
      <style>{`
        /* The Beam Animation - Flows along the path direction (Node -> Center) */
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        /* The Floating Node Animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-beam {
          stroke-dasharray: 10 200; /* Short dash, long gap */
          stroke-dashoffset: 210; /* Start hidden */
          animation: dash 3s linear infinite;
        }

        .animate-float-group {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_0%,transparent_60%)]" />

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className="z-10"
      >
        <defs>
          <linearGradient id="glassSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="1" />
            <stop offset="100%" stopColor="#050505" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="glassBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        <g opacity="0.1">
          <circle
            cx={cx}
            cy={cy}
            r="120"
            stroke="white"
            strokeDasharray="4 4"
          />
          <circle cx={cx} cy={cy} r="220" stroke="white" />
        </g>

        {NODES.map((node, i) => {
          const nx = cx + node.x;
          const ny = cy + node.y;
          const d = getPath(nx, ny);

          return (
            <React.Fragment key={node.id}>
              <path
                d={d}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
                fill="none"
              />

              <path
                d={d}
                stroke="url(#glassBorder)"
                strokeWidth="2"
                fill="none"
                className="animate-beam"
                style={{ animationDelay: `${i * 0.4}s` }}
              />

              <g transform={`translate(${nx - 28}, ${ny - 28})`}>
                <g
                  className="animate-float-group"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <rect
                    x="2"
                    y="10"
                    width="52"
                    height="52"
                    rx="14"
                    fill="#000"
                    opacity="0.5"
                  />

                  <rect
                    width="56"
                    height="56"
                    rx="14"
                    fill="url(#glassSurface)"
                    stroke="url(#glassBorder)"
                    strokeWidth="1"
                  />

                  <rect
                    x="1"
                    y="1"
                    width="54"
                    height="54"
                    rx="13"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.05"
                    strokeWidth="2"
                  />

                  <image
                    href={node.src}
                    x="14"
                    y="14"
                    width="28"
                    height="28"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  <text
                    x="28"
                    y="72"
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.5)"
                    fontSize="10"
                    fontFamily="monospace"
                    letterSpacing="1"
                    className="uppercase"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            </React.Fragment>
          );
        })}

        <g transform={`translate(${cx - 45}, ${cy - 45})`}>
          <rect
            width="90"
            height="90"
            rx="24"
            fill="#000"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          <rect
            width="90"
            height="90"
            rx="24"
            fill="url(#glassBorder)"
            opacity="0.1"
          />

          <image
            href="/inferia.svg"
            x="15"
            y="15"
            width="60"
            height="60"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
    </div>
  );
};