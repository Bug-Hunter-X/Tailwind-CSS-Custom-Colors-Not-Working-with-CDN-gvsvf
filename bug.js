```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-custom-blue">
  <div>Hello, world!</div>
</body>
</html>
```