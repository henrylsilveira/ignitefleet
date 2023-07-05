import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_800};
`;

export const Title = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const Slogan = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  margin-bottom: 32px;
`;