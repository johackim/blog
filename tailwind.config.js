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
        plugins: [
            require('@tailwindcss/ui'), // eslint-disable-line
        ],
        /* extend: {
            colors: {
                gray: {
                    100: '#f5f5f5',
                    200: '#eeeeee',
                    300: '#e0e0e0',
                    400: '#bdbdbd',
                    500: '#9e9e9e',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121',
                },
            },
        }, */
    },
};
