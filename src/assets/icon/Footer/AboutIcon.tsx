import { forwardRef, useState, useEffect } from "react";
import styles from "./style.module.scss";

type Props = {
  current: boolean;
};

const AboutIcon = forwardRef(function cameraIcon(props: Props, refs) {
  const isCurrent = props.current;
  return (
    <svg
      className={isCurrent ? styles.currentIcon : styles.icon}
      viewBox="0 0 44 57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 34C15.1046 34 16 33.1046 16 32C16 30.8954 15.1046 30 14 30C12.8954 30 12 30.8954 12 32C12 33.1046 12.8954 34 14 34Z" />
      <path d="M15.2 28H12.8V23.6H15.2C15.8365 23.6 16.447 23.3682 16.8971 22.9556C17.3471 22.5431 17.6 21.9835 17.6 21.4C17.6 20.8165 17.3471 20.2569 16.8971 19.8444C16.447 19.4318 15.8365 19.2 15.2 19.2H12.8C12.1637 19.2006 11.5536 19.4326 11.1036 19.845C10.6537 20.2575 10.4006 20.8167 10.4 21.4V21.95H8V21.4C8.00159 20.2335 8.50781 19.1152 9.40764 18.2903C10.3075 17.4655 11.5274 17.0015 12.8 17H15.2C16.473 17 17.6939 17.4636 18.5941 18.2887C19.4943 19.1139 20 20.233 20 21.4C20 22.567 19.4943 23.6861 18.5941 24.5113C17.6939 25.3364 16.473 25.8 15.2 25.8V28Z" />
      <path d="M35.6546 10.3432L27.6048 2.34326C27.5036 2.23159 27.3792 2.1431 27.2402 2.0839C27.1012 2.02471 26.9509 1.99622 26.7998 2.0004H15.3C14.6905 2.00221 14.1066 2.24361 13.6757 2.67186C13.2447 3.10012 13.0018 3.68044 13 4.28609V13.4288H15.3V4.28609H24.4998V11.1431C24.5016 11.7488 24.7445 12.3291 25.1755 12.7574C25.6064 13.1856 26.1903 13.427 26.7998 13.4288H33.6997V31.7143H19.8999V34H33.6997C34.3091 33.9982 34.893 33.7568 35.324 33.3285C35.7549 32.9003 35.9978 32.32 35.9996 31.7143V11.1431C36.0037 10.9929 35.9749 10.8437 35.9154 10.7056C35.8558 10.5675 35.7669 10.4438 35.6546 10.3432V10.3432ZM26.7998 11.1431V4.74323L33.2397 11.1431H26.7998Z" />
      <path d="M7.61 42.19L8.36 42.95C8.51 42.74 8.73 42.43 8.94 42.18C9.39 41.62 10.23 40.53 10.71 39.94C11.05 39.53 11.24 39.5 11.62 39.87C12.05 40.28 12.97 41.27 13.55 41.93C14.2 42.66 15.08 43.68 15.79 44.54L16.47 43.81C15.7 42.99 14.71 41.9 14.03 41.19C13.45 40.57 12.59 39.67 11.98 39.09C11.3 38.45 10.83 38.56 10.3 39.19C9.67 39.93 8.8 41.04 8.32 41.52C8.06 41.79 7.87 41.97 7.61 42.19ZM22.23 44.79L22.76 45.23C22.84 45.18 22.94 45.09 23.11 45.01C24.27 44.43 25.65 43.41 26.52 42.24L26.04 41.55C25.28 42.68 24.05 43.59 23.12 44.01C23.12 43.71 23.12 38.87 23.12 38.25C23.12 37.87 23.16 37.58 23.17 37.5H22.25C22.25 37.58 22.3 37.86 22.3 38.24C22.3 38.87 22.3 43.77 22.3 44.23C22.3 44.43 22.27 44.64 22.23 44.79ZM17.65 44.75L18.41 45.25C19.25 44.55 19.89 43.58 20.19 42.51C20.46 41.51 20.49 39.36 20.49 38.25C20.49 37.96 20.53 37.65 20.54 37.54H19.62C19.67 37.75 19.69 37.97 19.69 38.26C19.69 39.38 19.69 41.37 19.39 42.29C19.09 43.26 18.5 44.15 17.65 44.75ZM35.05 37.82C35.05 37.46 35.34 37.16 35.71 37.16C36.07 37.16 36.37 37.46 36.37 37.82C36.37 38.19 36.07 38.48 35.71 38.48C35.34 38.48 35.05 38.19 35.05 37.82ZM34.59 37.82C34.59 38.44 35.09 38.94 35.71 38.94C36.33 38.94 36.83 38.44 36.83 37.82C36.83 37.2 36.33 36.7 35.71 36.7C35.09 36.7 34.59 37.2 34.59 37.82ZM35.46 38.49L34.85 38.1C34.66 38.15 34.47 38.16 34.31 38.16C33.86 38.16 29.87 38.16 29.3 38.16C28.97 38.16 28.57 38.12 28.3 38.09V38.98C28.55 38.96 28.89 38.94 29.29 38.94C29.87 38.94 33.83 38.94 34.41 38.94C34.27 39.9 33.81 41.3 33.1 42.2C32.26 43.27 31.14 44.12 29.2 44.61L29.88 45.36C31.71 44.78 32.9 43.86 33.81 42.68C34.61 41.66 35.09 40.04 35.31 38.99C35.35 38.8 35.39 38.63 35.46 38.49Z" />
    </svg>
  );
});

export default AboutIcon;