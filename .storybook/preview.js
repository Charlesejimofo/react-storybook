import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// const MY_VIEPORTS = {
//   FHD: {
//     name: 'FHD - 1080px',
//     styles: {
//       width: '1900px',
//       height: '1080px',
//     },
//   },
// };

import 'tailwindcss/tailwind.css'
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export default preview
