import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZPrevIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 48 46" fill="none" w={48} h={46}>
        <g filter="url(#filter0_d)">
          <ellipse
            cx="23.5186"
            cy="19"
            rx="19.5185"
            ry="19"
            transform="rotate(180 23.5186 19)"
            fill="#19D7FE"
          />
          <path
            d="M4.50015 19C4.50015 8.79535 13.0022 0.500018 23.5186 0.500017C34.035 0.500016 42.5371 8.79535 42.5371 19C42.5371 29.2047 34.035 37.5 23.5186 37.5C13.0022 37.5 4.50016 29.2047 4.50015 19Z"
            stroke="white"
          />
        </g>
        <path
          d="M26.6035 24.0001L21.4671 19.0002L26.6035 14.0003"
          stroke="white"
          strokeWidth="2"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="47.037"
            height="46"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.1 0 0 0 0 0.410588 0 0 0 0 1 0 0 0 0.3 0"
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

export default MZPrevIcon;
