import { css } from '@emotion/react';

// fontSize 정의
const fontSizeLg = '1.375rem'; // 22px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px
const fontSizeXxs = '0.625rem'; // 10px
const fontSizeXxxs = '0.5rem';

export const GlobalStyle = css`
  :root {
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};
    --font-size-xxs: ${fontSizeXxs};
    --font-size-xxxs: ${fontSizeXxxs};
  }
`;
