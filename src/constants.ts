import { Colors } from './types';

export const defaultMessages = {
  down: 'Services unavailable',
  up: 'Services operational',
  degraded: 'Services degraded',
} as const;

export const statusMap: { [K in Colors]: string } = {
  green: defaultMessages.up,
  yellow: defaultMessages.degraded,
  red: defaultMessages.down,
};
