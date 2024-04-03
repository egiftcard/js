import type { IconFC } from "./types.js";

/**
 * @internal
 */
export const LockIcon: IconFC = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43767 0.487333 6.61667 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
