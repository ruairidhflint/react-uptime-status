# React Uptime Status

[React Uptime Status](https://roryflint.co.uk/) is an opinionated uptime status display for React. It provides a simple, customizable component to show the current status of your system or service.

![React Uptime Status Example](./assets/demo.png)

## Installation

To start using the library, install it in your project:

```bash
npm install react-uptime-status
```

## Usage

Import the `UptimeStatus` component and add it to your app. Here's a basic example:

```jsx
import { UptimeStatus } from 'react-uptime-status';

function App() {
  return (
    <div>
      <h1>My Great App</h1>
      <UptimeStatus color="green" message="All systems active" />
    </div>
  );
}
```

## Props

### Mandatory

- `color: 'green' | 'yellow' | 'red'`: The color of the status indicator

### Optional

- `message: string`: The message to be displayed to the user. If none is provided, a default will display
- `url: string`: The redirect URL when the component is clicked. If none is provided, the component will not be clickable
- `border: boolean`: Whether or not a border is displayed
- `position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'`: Where the component will be rendered
- `className: string`: Additional classnames for custom styling
- `style: React.CSSProperties`: Inline styles for customisation

## Browser Compatibility

React Uptime Status is compatible with all modern browsers (Chrome, Firefox, Safari, Edge) and Internet Explorer 11+.

## Contributing

We welcome contributions! Please visit our [GitHub repository](https://github.com/yourusername/react-uptime-status) to submit issues, feature requests, or pull requests.

## License

React Uptime Status is released under the MIT License.

![React Uptime Status Example](./assets/demo.gif)
