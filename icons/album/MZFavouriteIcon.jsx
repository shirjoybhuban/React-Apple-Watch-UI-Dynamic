import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MZFavouriteIcon = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 32 28" fill="none" w={32} h={28}>
        <path
          d="M8.42852 1C13.5001 1 16 5.72726 16 5.72726C16 5.72726 18.4999 1 23.5715 1C27.6931 1 30.957 4.26033 30.9992 8.15071C31.0851 16.2262 24.2238 21.9691 16.7031 26.7953C16.4957 26.9287 16.2508 27 16 27C15.7492 27 15.5042 26.9287 15.2969 26.7953C7.77699 21.9691 0.915632 16.2262 1.00078 8.15071C1.04297 4.26033 4.30686 1 8.42852 1Z"
          stroke="white"
          strokeWidth="1.39"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </div>
  );
};

export default MZFavouriteIcon;
