import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: ArchitectsDaughter;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        src: url('./fonts/ArchitectsDaughter/ArchitectsDaughter-Regular.ttf');
      }
      /* latin */
      @font-face {
        font-family: Roboto;
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        src: url('/fonts/Roboto/Roboto-Regular.ttf');
      }
      `}
  />
);

export default Fonts;
