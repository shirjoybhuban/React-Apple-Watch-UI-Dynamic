import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const MzFacebok = (props) => {
  return (
    <div>
      <Icon {...props} viewBox="0 0 32 32" h={32} w={32}>
        <rect width="32" height="32" rx="16" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.8288 31.7508C17.9106 31.9146 16.9653 32.0001 16 32.0001C15.1443 32.0001 14.3043 31.9329 13.485 31.8036V21.0966H9.14294V16.1697H13.485V12.4145C13.485 8.1438 16.0365 5.78403 19.9439 5.78403C21.2262 5.8019 22.5055 5.91321 23.7715 6.11709V10.3118H21.614C19.49 10.3118 18.8288 11.6256 18.8288 12.9748V16.1704H23.5713L22.8132 21.0966H18.8288V31.7508Z"
          fill="#1977F3"
        />
      </Icon>
    </div>
  );
};

export default MzFacebok;
