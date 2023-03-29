import styled from 'styled-components';
import { colors, device, typography } from 'styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const PurchaseHistoryStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${device.tablet}) {
    gap: 12px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  ${typography.desktop.H4};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3};
  }
`;

export const AssistiveText = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_LARGE}
  }
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;

  .swiper-wrapper > div {
    margin-left: 2px;
  }

  .swiper-pagination {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }

  .swiper-pagination-bullet {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50%;
    background: ${colors.GREY_BLACK_20};
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: 9px !important;
    height: 9px !important;
    background: ${colors.MAIN_DARK};
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  & > article {
    width: 255px;

    @media (max-width: ${device.laptopM}) {
      width: 190px;
    }
  }

  & > article > div > button {
    width: 100% !important;
  }
`;
