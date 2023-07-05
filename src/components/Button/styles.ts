import styled, { DefaultTheme } from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.BRAND_MID};
`;

export const Title = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
  font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }: DefaultTheme) => ({
    color: theme.COLORS.WHITE
}))``;