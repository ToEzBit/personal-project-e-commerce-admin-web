module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-theme-color": "#101043",
        "payment-notification-color": "#C6E4EE",
        "pending-notification-color": "#D8D8FF",
        "delivered-notification-color": "#FFD7B4",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
