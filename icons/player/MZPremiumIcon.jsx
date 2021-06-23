import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZPremiumIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 54 54" fill="none" w={54} h={54}>
        <g filter="url(#filter0_d)">
          <circle cx="27" cy="24" r="17" fill="#00DEFF" />
        </g>
        <path
          d="M32.165 20.2742C32.165 19.1511 31.8672 18.3503 31.2715 17.8718C30.6855 17.3933 29.8604 17.1541 28.7959 17.1541H24.5918V23.5115H28.7959C29.8604 23.5115 30.6855 23.2527 31.2715 22.7351C31.8672 22.2175 32.165 21.3972 32.165 20.2742ZM36.6328 20.2449C36.6328 22.7937 35.9883 24.5955 34.6992 25.6501C33.4102 26.7048 31.5693 27.2322 29.1768 27.2322H24.5918V34.9958H20.1094V13.4041H29.5137C31.6816 13.4041 33.4102 13.9607 34.6992 15.074C35.9883 16.1873 36.6328 17.9109 36.6328 20.2449Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0.18476"
            y="0.325637"
            width="53.6305"
            height="53.6305"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="3.14088" />
            <feGaussianBlur stdDeviation="4.90762" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.870588 0 0 0 0 1 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </Icon>
    </div>
  );
};

export default MZPremiumIcon;
