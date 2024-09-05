import React from 'react';
import './styles.css';
import { IndicatorProps, UptimeStatusProps } from './types';
import { statusMap } from './constants';

const UptimeStatus = ({ color, message, url, border = false, position = 'bottom-right' }: UptimeStatusProps) => {
  if (!color) {
    return null;
  }

  const statusContent = (
    <div className={`si-status ${border ? 'si-border' : ''} si-${position}`}>
      <span>{message || statusMap[color]}</span>
      <Indicator color={color} />
    </div>
  );

  if (url) {
    return (
      <div className="si-status-indicator">
        <a href={url} target="_blank" className="si-status-url">
          {statusContent}
        </a>
      </div>
    );
  }

  return <div className="si-status-indicator">{statusContent}</div>;
};

const Indicator = ({ color }: IndicatorProps) => {
  return <div className={`si-indicator si-indicator-${color}`} />;
};

export { UptimeStatus };
export { Colors, Position, IndicatorProps, UptimeStatusProps } from './types';

// features coming soon:
// - user can dismiss the status message
// - build basic website to display component
// - dark mode compatibility
// - work on accessibility
// - add tests
