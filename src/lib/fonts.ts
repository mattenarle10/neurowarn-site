import localFont from 'next/font/local';

export const gotham = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham Font/gotham_book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham Font/gotham_bookitalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gotham Font/gotham_medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham Font/gotham_mediumitalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gotham Font/gotham_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham Font/gotham_bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-gotham',
  display: 'swap',
});
