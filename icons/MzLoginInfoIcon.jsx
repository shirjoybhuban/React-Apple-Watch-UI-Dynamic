import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MzLoginInfoIcon = (props) => {
  return (
    <div>
      <Icon {...props} width="7" height="7" fill="none" viewBox="0 0 30 30">
        <path
          d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z"
          stroke={props.scheme}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.5 7.5L15 16.25L2.5 7.5"
          stroke={props.scheme}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </div>
  );
};

export default MzLoginInfoIcon;
