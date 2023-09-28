import type {FC} from 'react';

import type {SvgProps} from 'src/types/common';

export const FilePdfIcon: FC<SvgProps> = (props) => {
  return (
    <svg className={props.className} width='45' height='40' viewBox='0 0 45 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='5' width='35' height='40' fill='black' />
      <rect x='0.5' y='12.5' width='44' height='20' rx='1.5' fill='white' stroke='black' />
      <path d='M13.8089 22.0869H14.4563C15.0615 22.0869 15.5143 21.9684 15.8147 21.7314C16.1152 21.4902 16.2654 21.1411 16.2654 20.6841C16.2654 20.2228 16.1385 19.8822 15.8846 19.6621C15.6349 19.4421 15.2413 19.332 14.7039 19.332H13.8089V22.0869ZM18.2522 20.6143C18.2522 21.613 17.9391 22.3768 17.3128 22.9058C16.6907 23.4347 15.8042 23.6992 14.6531 23.6992H13.8089V27H11.8411V17.7197H14.8055C15.9311 17.7197 16.7859 17.9631 17.3699 18.4497C17.9581 18.9321 18.2522 19.6536 18.2522 20.6143ZM27.5039 22.271C27.5039 23.7987 27.068 24.9688 26.1963 25.7812C25.3288 26.5938 24.0741 27 22.4321 27H19.8042V17.7197H22.7178C24.2327 17.7197 25.4092 18.1196 26.2471 18.9194C27.085 19.7192 27.5039 20.8364 27.5039 22.271ZM25.46 22.3218C25.46 20.3286 24.5798 19.332 22.8193 19.332H21.772V25.375H22.6162C24.512 25.375 25.46 24.3573 25.46 22.3218ZM31.1633 27H29.2272V17.7197H34.5466V19.332H31.1633V21.7251H34.3117V23.3311H31.1633V27Z' fill='black' />
    </svg>
  );
};
