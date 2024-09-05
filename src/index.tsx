import React from 'react';
import './styles.css';
import { IndicatorProps, UptimeStatusProps } from './types';
import { statusMap } from './constants';

const UptimeStatus = ({
  color,
  message,
  url,
  className,
  style,
  border = false,
  position = 'bottom-right',
}: UptimeStatusProps) => {
  if (!color) {
    return null;
  }

  const statusText = message || statusMap[color];

  const content = (
    <div
      className={`si-status ${border ? 'si-border' : ''} si-${position} ${className}`}
      style={style}
      role="status"
      aria-live="polite"
    >
      <span>{statusText}</span>
      <Indicator color={color} />
      <span className="si-sr-only">{`Current status: ${statusText}`}</span>
    </div>
  );

  if (url) {
    return (
      <div className="si-status-indicator">
        <a href={url} target="_blank" className="si-status-url" aria-label={`View details for ${statusText} status`}>
          {content}
        </a>
      </div>
    );
  }

  return <div className="si-status-indicator">{content}</div>;
};

const Indicator = ({ color }: IndicatorProps) => {
  return <div className={`si-indicator si-indicator-${color}`} role="presentation" aria-hidden="true" />;
};

export { UptimeStatus };
export { Colors, Position, IndicatorProps, UptimeStatusProps } from './types';

// features coming soon:
// - user can dismiss the status message
// - build basic website to display component
// - add tests
