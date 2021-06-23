import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZOverlayPauseIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 50 50" fill="none" w={50} h={50}>
        <g clip-path="url(#clip0)">
          <path
            d="M45 25.5C45 14.1823 36.0417 5 25 5C13.9583 5 5 14.1823 5 25.5C5 36.8177 13.9583 46 25 46C36.0417 46 45 36.8177 45 25.5Z"
            stroke="white"
            stroke-opacity="0.6"
            stroke-width="6"
            stroke-miterlimit="10"
          />
          <rect
            x="17.1426"
            y="16.6666"
            width="5.71428"
            height="16.6667"
            rx="2.85714"
            fill="white"
          />
          <rect
            x="28.5713"
            y="16.6666"
            width="5.71428"
            height="16.6667"
            rx="2.85714"
            fill="white"
          />
          <mask
            id="mask0"
            maskType="alpha"
            maskUnits="userSpaceOnUse"
            x="-10"
            y="-11"
            width="59"
            height="59">
            <rect
              x="-10"
              y="-11"
              width="59"
              height="59"
              rx="6"
              fill="#E9184E"
            />
          </mask>
          <g mask="url(#mask0)"></g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </Icon>
    </div>
  );
};

export default MZOverlayPauseIcon;
