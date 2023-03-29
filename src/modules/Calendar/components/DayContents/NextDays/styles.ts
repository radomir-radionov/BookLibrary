import styled, { css } from 'styled-components';
import { colors, typography } from 'styles';

type DayButtonProps = {
  $variant: boolean;
};

export const DayButton = styled.div<DayButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${typography.desktop.INFO_SMALL};
  color: ${colors.GREY_BLACK_40};
  background: ${colors.MAIN_WHITE};
  cursor: default;
  user-select: none;

  ${({ $variant }) =>
    $variant &&
    css`
      background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
      span {
        background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
        color: white;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        background-clip: unset;
      }

      border: none;
    `}

  p {
    span {
      background: rgba(0, 0, 0, 0);
    }
  }
`;
