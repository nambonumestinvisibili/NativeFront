import { css } from "styled-components";
import colors from "../../constants/colors";

export const InvertedColorsBackground = css`
  border: 1px solid ${({ color }) => color
  };

  background-color: ${({ isPressed, color }) => isPressed 
  ? color
  : colors.BASIC.WHITE
  };
`

export const InvertedColorsText = css`
  color: ${({ isPressed, color }) => isPressed 
  ? colors.BASIC.WHITE
  : color
  };
`