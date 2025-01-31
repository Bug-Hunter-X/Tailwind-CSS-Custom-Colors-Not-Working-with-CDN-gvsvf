```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init
```

```javascript
// tailwind.config.js (no changes needed)
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

```bash
//Add the following to your stylesheet
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now the custom color will be applied correctly.  Remember to build your CSS if your workflow requires it.