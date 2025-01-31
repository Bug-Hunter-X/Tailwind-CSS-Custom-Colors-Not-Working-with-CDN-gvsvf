# Tailwind CSS Custom Colors Not Working with CDN

This repository demonstrates a common issue when using Tailwind CSS with a CDN: custom colors defined in `tailwind.config.js` are not applied.  The problem arises because the CDN version doesn't integrate with the custom configuration file.

## Issue
The `index.html` uses `bg-custom-blue`, but the custom color isn't applied because we are using the CDN link for tailwind and not installing it via package manager.

## Solution
Install Tailwind CSS via npm or yarn for proper integration with the configuration file.