import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MzProfileRightArrowIcon = (props) => {
  return (
    <div>
      <Icon {...props} w={16} h={26} fill="none" viewBox="0 0 16 46">
        <path d="M2 2L13 13L2 24" stroke={props.scheme} stroke-width="3" />
      </Icon>
    </div>
  );
};

export default MzProfileRightArrowIcon;
