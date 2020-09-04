module.exports = {
    purge: false,
    theme: {
        opacity: {
            0: '0',
            10: '.1',
            20: '.2',
            25: '.25',
            30: '.3',
            40: '.4',
            50: '.5',
            60: '.6',
            70: '.7',
            75: '.75',
            80: '.8',
            90: '.9',
            100: '1',
        },
    },
    plugins: [
        require('@tailwindcss/ui'), // eslint-disable-line
    ],
};
