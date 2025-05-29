const config = require('config/tailwind-config');
module.exports = {
  ...config,
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
};