module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    content: ['./src/**/*.{html,js,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [require('tw-elements/dist/plugin')],
};