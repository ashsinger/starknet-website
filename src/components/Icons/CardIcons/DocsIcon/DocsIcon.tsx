import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// docs.svg
const DocsIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="88" height="102" viewBox="0 0 88 102" fill="none">
      <path d="M24 66.875V69C24 71.2091 25.7909 73 28 73H30.125V71H28C26.8954 71 26 70.1046 26 69V66.875H24Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M34.375 71V73H38.625V71H34.375Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M42.875 71V73H47.125V71H42.875Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M51.375 71V73H55.625V71H51.375Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M59.875 71V73H62C64.2091 73 66 71.2091 66 69V66.875H64V69C64 70.1046 63.1046 71 62 71H59.875Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M64 62.625H66V58.375H64V62.625Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M64 54.125H66V49.875H64V54.125Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M64 45.625H66V41.375H64V45.625Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M64 37.125H66V35C66 32.7909 64.2091 31 62 31H59.875V33H62C63.1046 33 64 33.8954 64 35V37.125Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M55.625 33V31H51.375V33H55.625Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M47.125 33V31H42.875V33H47.125Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M38.625 33V31H34.375V33H38.625Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M30.125 33V31H28C25.7909 31 24 32.7909 24 35V37.125H26V35C26 33.8954 26.8954 33 28 33H30.125Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M26 41.375H24V45.625H26V41.375Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M26 49.875H24V54.125H26V49.875Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M26 58.375H24V62.625H26V58.375Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M45 63C38.9249 63 34 58.0751 34 52C34 45.9249 38.9249 41 45 41C51.0751 41 56 45.9249 56 52C56 58.0751 51.0751 63 45 63Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M24 79C24 78.4477 24.4477 78 25 78H65C65.5523 78 66 78.4477 66 79C66 79.5523 65.5523 80 65 80H25C24.4477 80 24 79.5523 24 79Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M25 84C24.4477 84 24 84.4477 24 85C24 85.5523 24.4477 86 25 86H49C49.5523 86 50 85.5523 50 85C50 84.4477 49.5523 84 49 84H25Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0304726 8.25404C0.40966 3.63247 4.28062 0 9 0H83C85.7614 0 88 2.23858 88 5V8.5C88 9.05229 87.5523 9.5 87 9.5C86.4477 9.5 86 9.05229 86 8.5V5C86 3.34315 84.6569 2 83 2H9C5.21769 2 2.13602 4.9998 2.00438 8.75C2.13602 12.5002 5.21769 15.5 9 15.5H83C85.7614 15.5 88 17.7386 88 20.5V97C88 99.7614 85.7614 102 83 102H9C4.02944 102 0 97.9706 0 93V9C0 8.9164 0.00114 8.83306 0.00340521 8.75C0.00114 8.66694 0 8.5836 0 8.5C0 8.41513 0.0105726 8.33273 0.0304726 8.25404ZM2 14.1573V93C2 96.866 5.13401 100 9 100H83C84.6569 100 86 98.6569 86 97V20.5C86 18.8431 84.6569 17.5 83 17.5H9C6.17273 17.5 3.64996 16.1963 2 14.1573Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M8 6C8 5.44772 8.44771 5 9 5H82C82.5523 5 83 5.44772 83 6C83 6.55228 82.5523 7 82 7H9C8.44771 7 8 6.55228 8 6Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M9 10C8.44771 10 8 10.4477 8 11C8 11.5523 8.44771 12 9 12H82C82.5523 12 83 11.5523 83 11C83 10.4477 82.5523 10 82 10H9Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="88" y1="-32.717" x2="-43.023" y2="-5.12545" gradientUnits="userSpaceOnUse">
          <stop stop-color={gradientColor1}/>
          <stop offset="0.963542" stop-color={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default DocsIcon;