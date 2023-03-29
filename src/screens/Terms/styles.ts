import styled from 'styled-components';
import { device, typography } from 'styles';

type ParagraphProps = {
  mb?: string;
};

export const TermsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 825px;
  margin-bottom: 62px;
  margin-left: 10px;
  transition: all 0.5s ease-out;

  @media (max-width: ${device.laptopL}) {
    width: 100%;
    margin-left: 30px;
  }

  @media (max-width: ${device.tabletM}) {
    margin-bottom: 24px;
  }
`;

export const Chapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;

  @media (max-width: ${device.tabletM}) {
    margin-bottom: 0;
  }
`;

export const SubChapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;
`;

export const TwiceSubChapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 32px;
  ${typography.desktop.H3}

  @media (max-width: ${device.tabletM}) {
    margin-bottom: 24px;
    ${typography.mobile.H3}
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 16px;
  ${typography.desktop.SUBTITLE_LARGE}

  @media (max-width: ${device.tabletM}) {
    ${typography.mobile.SUBTITLE_LARGE}
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  margin-bottom: ${({ mb }) => {
    return mb ? 0 : '16px';
  }};
  ${typography.desktop.BODY_LARGE}

  @media (max-width: ${device.tabletM}) {
    ${typography.mobile.BODY_LARGE}
  }
`;
