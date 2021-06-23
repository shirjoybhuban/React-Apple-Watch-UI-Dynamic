import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZNextIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 50 50" fill="none" w={50} h={50}>
        <g filter="url(#filter0_d)">
          <ellipse cx="24.4814" cy="19" rx="19.5185" ry="19" fill="#19D7FE" />
          <path
            d="M43.4998 19C43.4998 29.2047 34.9978 37.5 24.4814 37.5C13.965 37.5 5.46289 29.2047 5.46289 19C5.46289 8.79533 13.965 0.5 24.4814 0.5C34.9978 0.5 43.4998 8.79533 43.4998 19Z"
            stroke="white"
          />
        </g>
        <path
          d="M21.4004 14.0003L26.5368 19.0002L21.4004 24.0001"
          stroke="white"
          strokeWidth="2"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0.962891"
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

export default MZNextIcon;
