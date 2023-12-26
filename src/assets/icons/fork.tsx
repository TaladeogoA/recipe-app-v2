import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.47 13.77L13.06 12.35L18.7199 6.7L17.3 5.28L11.65 10.94L10.23 9.53L15.89 3.87L14.47 2.45L8.10995 8.82C7.54815 9.3825 7.23259 10.145 7.23259 10.94C7.23259 11.735 7.54815 12.4975 8.10995 13.06L8.81995 13.77L2.44995 20.13L3.86995 21.55L10.23 15.18L10.94 15.89C11.5025 16.4518 12.2649 16.7674 13.06 16.7674C13.855 16.7674 14.6175 16.4518 15.18 15.89L21.5499 9.53L20.1299 8.11L14.47 13.77Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;
