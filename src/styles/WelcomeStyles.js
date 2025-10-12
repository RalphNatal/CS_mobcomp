import { StyleSheet, Dimensions } from 'react-native';
import theme from './theme';

const { width, height } = Dimensions.get('window');

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.15,
  },
  circle1: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: theme.colors.primary,
    top: -width * 0.3,
    left: -width * 0.3,
  },
  circle2: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: theme.colors.accent,
    bottom: -width * 0.25,
    right: -width * 0.2,
  },
  circle3: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: theme.colors.primary,
    top: height * 0.45,
    right: width * 0.4,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.muted,
    marginTop: 8,
    marginHorizontal: theme.spacing.m,
  },
});
