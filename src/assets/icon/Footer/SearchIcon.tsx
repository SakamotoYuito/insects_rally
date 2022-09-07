import { forwardRef } from "react";
import styles from "./style.module.scss";

type Props = {
  current: boolean;
};

const SearchIcon = forwardRef((props: Props, ref) => {
  const isCurrent = props.current;
  return (
    <svg
      className={isCurrent ? styles.currentIcon : styles.icon}
      viewBox="0 0 44 57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.23 37.92C12.34 38.23 12.48 38.69 12.7 39.26C13.03 40.17 13.58 41.16 14 41.8C13.64 41.76 12.9 41.7 12.34 41.65L12.28 42.31C13 42.36 14.22 42.47 14.7 42.59L15.1 42.02C14.95 41.86 14.8 41.69 14.67 41.49C14.24 40.91 13.73 39.98 13.42 39.12C13.19 38.47 12.93 37.61 12.84 37.03L11.98 37.13C12.08 37.4 12.17 37.7 12.23 37.92ZM8.57 38.7L8.59 39.49C10.36 39.64 11.95 39.63 13.22 39.48C13.95 39.39 14.9 39.23 15.61 39.03L15.52 38.24C14.74 38.51 13.75 38.69 12.96 38.78C11.82 38.9 10.24 38.89 8.57 38.7ZM10.12 41.88L9.34 41.7C9.05 42.29 8.85 42.81 8.85 43.37C8.85 44.73 10.05 45.41 11.95 45.42C13.07 45.43 13.91 45.32 14.54 45.21L14.57 44.41C13.88 44.56 13.01 44.66 12 44.66C10.51 44.64 9.64 44.23 9.64 43.27C9.64 42.8 9.82 42.37 10.12 41.88ZM21.24 37.24L20.31 37.14C20.31 37.91 20.18 38.81 19.99 39.61C19.72 40.83 18.92 43.5 17.78 45.03L18.6 45.35C19.73 43.53 20.44 41.04 20.78 39.63C20.92 39.01 21.05 38.19 21.12 37.83C21.16 37.64 21.2 37.42 21.24 37.24ZM24.68 38.39L23.95 38.72C24.65 39.55 25.44 41.29 25.73 42.31L26.51 41.94C26.17 41.02 25.3 39.2 24.68 38.39ZM17.64 39.43L17.72 40.3C17.98 40.26 18.39 40.21 18.62 40.18C19.23 40.12 21.11 39.89 21.78 39.89C22.42 39.89 22.84 40.06 22.84 40.98C22.84 42.06 22.68 43.36 22.36 44.04C22.16 44.47 21.86 44.55 21.49 44.55C21.21 44.55 20.68 44.48 20.26 44.35L20.4 45.18C20.71 45.26 21.19 45.33 21.57 45.33C22.22 45.33 22.72 45.16 23.03 44.49C23.45 43.66 23.61 42.07 23.61 40.88C23.61 39.53 22.88 39.19 21.99 39.19C21.31 39.19 19.28 39.41 18.53 39.43C18.21 39.44 17.95 39.45 17.64 39.43ZM24.79 36.94L24.25 37.17C24.53 37.55 24.87 38.15 25.07 38.56L25.61 38.32C25.4 37.91 25.04 37.3 24.79 36.94ZM25.89 36.54L25.36 36.77C25.65 37.14 25.98 37.71 26.19 38.15L26.74 37.91C26.54 37.54 26.16 36.91 25.89 36.54ZM33.27 37.08H32.35C32.37 37.17 32.4 37.45 32.42 37.72C32.45 38.27 32.46 40.26 32.46 40.7L33.22 41.09C33.21 40.29 33.19 38.36 33.22 37.71C33.22 37.59 33.25 37.2 33.27 37.08ZM27.95 38.48L27.97 39.25C29.48 39.14 31.62 39.07 33.34 39.07C34.81 39.07 35.71 39.09 36.27 39.12L36.28 38.38C35.81 38.37 34.57 38.37 33.35 38.37C31.81 38.37 29.31 38.46 27.95 38.48ZM33.2 41.38L32.65 41.1C32.81 42.17 32.41 42.69 31.79 42.69C31.24 42.69 30.77 42.33 30.77 41.7C30.77 41.05 31.26 40.64 31.79 40.64C32.33 40.64 32.77 41.02 32.77 41.92C32.77 43.57 31.71 44.46 29.89 44.89L30.56 45.54C32.88 44.85 33.54 43.35 33.54 41.99C33.54 40.84 32.95 39.98 31.79 39.98C30.84 39.98 30.02 40.72 30.02 41.71C30.02 42.8 30.83 43.39 31.67 43.39C32.58 43.39 33.2 42.72 33.2 41.38Z" />
      <path d="M19.3 5.39999C21.143 5.39988 22.9495 5.91422 24.516 6.88513C26.0825 7.85603 27.3469 9.24494 28.1669 10.8955C28.9868 12.5461 29.3298 14.3927 29.1571 16.2276C28.9844 18.0625 28.3029 19.8128 27.1894 21.2814L34.654 28.746C34.8933 28.9872 35.0329 29.3098 35.0449 29.6493C35.0568 29.9889 34.9403 30.3205 34.7185 30.5779C34.4967 30.8354 34.1861 30.9997 33.8485 31.0382C33.5109 31.0766 33.1712 30.9864 32.8972 30.7854L32.746 30.654L25.2814 23.1894C24.0296 24.1383 22.57 24.7757 21.0232 25.049C19.4764 25.3223 17.8867 25.2236 16.3856 24.761C14.8844 24.2985 13.5149 23.4854 12.3901 22.3889C11.2654 21.2924 10.4177 19.944 9.91705 18.4551C9.41644 16.9663 9.2773 15.3796 9.51111 13.8263C9.74493 12.2731 10.345 10.7977 11.2617 9.52217C12.1785 8.24665 13.3856 7.20757 14.7833 6.4908C16.181 5.77402 17.7292 5.40012 19.3 5.39999ZM19.3 8.09999C17.3904 8.09999 15.5591 8.85856 14.2088 10.2088C12.8586 11.5591 12.1 13.3904 12.1 15.3C12.1 17.2096 12.8586 19.0409 14.2088 20.3912C15.5591 21.7414 17.3904 22.5 19.3 22.5C21.2096 22.5 23.0409 21.7414 24.3912 20.3912C25.7414 19.0409 26.5 17.2096 26.5 15.3C26.5 13.3904 25.7414 11.5591 24.3912 10.2088C23.0409 8.85856 21.2096 8.09999 19.3 8.09999Z" />
    </svg>
  );
});

export default SearchIcon;
