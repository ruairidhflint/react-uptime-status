export type Colors = 'green' | 'yellow' | 'red';

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

export type UptimeStatusProps = {
  color: Colors;
  message?: string;
  url?: string;
  border?: boolean;
  position?: Position;
};

export type IndicatorProps = {
  color: Colors;
};
