import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MzPassSecIcon = (props) => {
  return (
    <div>
      <Icon {...props} width="7" height="7" fill="none" viewBox="0 0 30 30">
        <path
          d="M15 27.5C15 27.5 25 22.5 25 15V6.25L15 2.5L5 6.25V15C5 22.5 15 27.5 15 27.5Z"
          stroke={props.scheme}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 13.75L15 16.25L18.75 12.5"
          stroke={props.scheme}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </Icon>
    </div>
  );
};

export default MzPassSecIcon;
