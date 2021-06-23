import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZPlayIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 69 69" color="white" w={69} h={69}>
        <g filter="url(#filter0_d)">
          <ellipse
            cx="34.2183"
            cy="31.3"
            rx="24.2183"
            ry="24.3"
            fill="#00DEFF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.3607 32.8982L28.9267 43.0619C28.5208 43.3292 27.9959 43.1818 27.7543 42.7328C27.6755 42.5864 27.6339 42.4192 27.6339 42.2488V21.9215C27.6339 21.3989 28.0169 20.9752 28.4893 20.9752C28.6433 20.9752 28.7944 21.0212 28.9267 21.1084L44.3607 31.272C44.7666 31.5393 44.8998 32.1201 44.6582 32.5691C44.5853 32.7045 44.4831 32.8176 44.3607 32.8982Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0.18476"
            y="0.325637"
            width="68.0671"
            height="68.2305"
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

export default MZPlayIcon;
