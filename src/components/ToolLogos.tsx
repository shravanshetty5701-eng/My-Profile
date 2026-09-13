import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function AngularLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 250 250"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
    >
      <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
      <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30" />
      <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1 M142,135h-34l17-40.9L142,135z" />
    </svg>
  );
}

export function ReactLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      width={size}
      height={size}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M34.6 63.8v-8.1H70v8.1H57.4v48.6h-9.9V63.8H34.6zm44.2 38.6c2.8 1.9 6.2 3.1 9.9 3.1 5.3 0 8.5-2.6 8.5-6.5 0-4-3.1-5.7-9.5-8.4-8.8-3.7-14.4-8.2-14.4-16.3 0-9.2 7.7-16 19.3-16 5.5 0 10.3 1.4 13.9 3.8l-3.3 7.8c-3-1.8-6.6-2.9-10.4-2.9-5.5 0-8.5 2.8-8.5 6.2 0 3.8 3.1 5.3 9.7 8.2 9.5 4 14.2 8.4 14.2 16.6 0 10.5-8.3 16.7-20.4 16.7-6.5 0-12.4-1.9-16.7-5l3.2-7.7z"
      />
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M26.4 105.7l9.2-5.6c2.2 3.6 4.7 6.4 9.4 6.4 4.8 0 7.8-2.1 7.8-10.1V58.7h11.7V96.4c0 14.3-8.3 20.6-19.7 20.6-10.4 0-16.1-5.6-18.4-11.3zm47.2-2c3.4 2.1 8 3.9 13.5 3.9 7.4 0 12.1-3.7 12.1-9 0-5.9-4.8-8.1-13.3-11.8-11.9-5.1-19.6-11.4-19.6-23.2 0-12.9 10.2-22.6 25.8-22.6 7.6 0 13.3 1.8 17.5 4.3l-4.5 9.9c-3.2-1.8-7.3-3.1-12.8-3.1-7.1 0-11.4 3.7-11.4 8.3 0 5.4 4.1 7.6 12.9 11.4 13.4 5.8 20.1 11.9 20.1 23.9 0 14-11.1 23.5-27.4 23.5-8.6 0-15.6-2.5-19.6-5.5l4.7-9.7z"
      />
    </svg>
  );
}

export function NodeLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <path
        fill="#339933"
        d="M64 4.5L9.6 35.9v62.8L64 123.5l54.4-24.8V35.9L64 4.5zm37.3 84.1l-14.7 8.5-7.7-4.4v-17l14.7-8.5 7.7 4.4v17zm-44.5 16.4L26.3 88.5v-17l14.7 8.5v17.1l5.8-3.6v-17l7.7 4.5-17.7 24.1zm0-35.3l-14.7-8.5 7.7-4.4 14.7 8.5-7.7 4.4zm30.4-8.5l-14.7 8.5-14.7-8.5 14.7-8.5 14.7 8.5zm14.1-16.7L86.6 53V36l14.7-8.5v17z"
      />
    </svg>
  );
}

export function ExpressLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <rect width="128" height="128" rx="16" fill="#1e1e24" />
      <text
        x="64"
        y="78"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="34"
        textAnchor="middle"
        letterSpacing="-1"
      >
        ex
      </text>
    </svg>
  );
}

export function Html5Logo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      width={size}
      height={size}
    >
      <path fill="#E44D26" d="M107.6 448L71.4 42h369.2l-36.2 406L256 470z" />
      <path fill="#F16529" d="M256 440.4l120.3-33.3 30.7-344.1H256z" />
      <path fill="#EBEBEB" d="M256 182.6h-57.9l-4-45.2H256V93.8H148.8l11.7 131.6H256zm0 137.9l-58.4-15.8-3.7-41.9h-45.3l7.3 82.2 100.1 27.8z" />
      <path fill="#FFFFFF" d="M256 93.8v43.6h58l-5.5 61.6H256v43.6h94.7l-12.7 142.7L256 411.3v45.1l100.2-27.8 1.4-15.6 15.6-174.9.9-10.7z" />
    </svg>
  );
}

export function Css3Logo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      width={size}
      height={size}
    >
      <path fill="#264DE4" d="M107.6 448L71.4 42h369.2l-36.2 406L256 470z" />
      <path fill="#2965F1" d="M256 440.4l120.3-33.3 30.7-344.1H256z" />
      <path fill="#EBEBEB" d="M256 182.6h-57.9l-4-45.2H256V93.8H148.8l11.7 131.6H256zm0 137.9l-58.4-15.8-3.7-41.9h-45.3l7.3 82.2 100.1 27.8z" />
      <path fill="#FFFFFF" d="M256 93.8v43.6h94.7l-4.1 45.2H256v43.6h46.7l-4.4 49.3L256 287.6v45.1l80.2-22.3 8.3-93.3.9-10.7z" />
    </svg>
  );
}

export function MySqlLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <rect width="128" height="128" rx="16" fill="#00758F" />
      <path
        fill="#F29111"
        d="M48.2 45.3c1.8-6.1 6.9-11.3 14.8-12.7 6.4-1.1 13.5.7 18.2 5.3 4.2 4.1 6.6 9.8 6.5 15.6-.1 5.9-2.9 11.4-7.4 15.2-4.9 4.1-11.4 5.8-17.7 4.7-6.3-1.1-11.8-5.3-14.4-11.1v23.2h-7.8V44.2h7.8v1.1zm7.8 8.4c0 3.8 1.8 7.3 4.8 9.5 3 2.2 6.9 2.9 10.4 1.9 3.5-1 6.3-3.7 7.5-7.1 1.2-3.4.8-7.2-1.1-10.2-1.9-3-5.2-4.8-8.8-4.9-3.6-.1-7.1 1.5-9.3 4.4-2.3 2.9-3.5 4.3-3.5 6.4z"
      />
    </svg>
  );
}

export function MongoLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <rect width="128" height="128" rx="16" fill="#13AA52" />
      <path
        fill="#FFFFFF"
        d="M64 16.5c-3.1 7.2-22.8 28.5-22.8 54.2 0 18.4 12.3 32.8 21.6 40.8v-77.9c0-5.7.5-12.7 1.2-17.1zm2.3 0c.7 4.4 1.2 11.4 1.2 17.1v77.9c9.3-8 21.6-22.4 21.6-40.8 0-25.7-19.7-47-22.8-54.2z"
      />
      <path fill="#D6F5E3" d="M64 88.5c-1.3 0-2.3 9.4-2.3 21 0 1.5.3 2 2.3 2s2.3-.5 2.3-2c0-11.6-1-21-2.3-21z" />
    </svg>
  );
}

export function GitLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      width={size}
      height={size}
    >
      <path
        fill="#F05032"
        d="M125.7 57.6L70.4 2.3c-3.1-3.1-8.1-3.1-11.2 0L47.5 14c-1.2 1.2-2 2.7-2.3 4.3 1.9 1 3.6 2.3 5 4l12.7-12.7 51.6 51.6-51.6 51.6-12.7-12.7c-1.4 1.7-3.1 3-5 4 .3 1.6 1.1 3.1 2.3 4.3l11.7 11.7c3.1 3.1 8.1 3.1 11.2 0l55.3-55.3c3.1-3.1 3.1-8.2 0-11.2zm-97 12.3c2.4 2.4 2.4 6.3 0 8.7-2.4 2.4-6.3 2.4-8.7 0-2.4-2.4-2.4-6.3 0-8.7 2.4-2.4 6.3-2.4 8.7 0z"
      />
      <circle cx="34" cy="64" r="10" fill="#F05032" />
      <circle cx="64" cy="34" r="10" fill="#F05032" />
      <circle cx="64" cy="94" r="10" fill="#F05032" />
      <path stroke="#F05032" strokeWidth="8" strokeLinecap="round" d="M34 64h20m10-20v40" />
    </svg>
  );
}

export function GitHubLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 98 96"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.36 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

export function TailwindLogo({ className = "w-6 h-6", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
    >
      <path
        fill="#38BDF8"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
      />
    </svg>
  );
}
