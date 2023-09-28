import type {FC} from 'react';

import type {SvgProps} from 'src/types/common';

export const PreloaderIcon:FC<SvgProps> = (props) => {
  return (
    <svg className={props.className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='11' strokeWidth='2' />
      <circle cx='12' cy='12' r='11' strokeWidth='2' />
      <circle cx='12' cy='12' r='11' strokeWidth='2' />
      <circle cx='12' cy='12' r='11' strokeWidth='2' />
    </svg>
  );
};
