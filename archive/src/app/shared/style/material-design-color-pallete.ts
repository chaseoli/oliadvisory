// for accessing angular material colors in typescript/javascript
// since all themes in angular material v2+ is styled via sass
// (ie: but sometimes we need to access colors in component's logic for example
// accessing a theme color for styling a angular component animation )

interface IMatTheme {

    primary: {
        default: string;
        lighter: string;
        darker: string;
        contrast: {
            default: string;
            lighter: string;
            darker: string;
        }
    };
    accent: {
        default: string;
        lighter: string;
        darker: string;
        contrast: {
            default: string;
            lighter: string;
            darker: string;
        }
    };

}

interface IMatColorPallete {
    _50: string;
    _100: string;
    _200: string;
    _300: string;
    _400: string;
    _500: string;
    _600: string;
    _700: string;
    _800: string;
    _900: string;
    _A100: string;
    _A200: string;
    _A400: string;
    _A700: string;
    contrast: {
        _50: string;
        _100: string;
        _200: string;
        _300: string;
        _400: string;
        _500: string;
        _600: string;
        _700: string;
        _800: string;
        _900: string;
        _A100: string;
        _A200: string;
        _A400: string;
        _A700: string;
    };
}

const mat_color_red: IMatColorPallete = {
    _50: '#ffebee',
    _100: '#ffcdd2',
    _200: '#ef9a9a',
    _300: '#e57373',
    _400: '#ef5350',
    _500: '#f44336',
    _600: '#e53935',
    _700: '#d32f2f',
    _800: '#c62828',
    _900: '#b71c1c',
    _A100: '#ff8a80',
    _A200: '#ff5252',
    _A400: '#ff1744',
    _A700: '#d50000',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_pink: IMatColorPallete = {
    _50: '#fce4ec',
    _100: '#f8bbd0',
    _200: '#f48fb1',
    _300: '#f06292',
    _400: '#ec407a',
    _500: '#e91e63',
    _600: '#d81b60',
    _700: '#c2185b',
    _800: '#ad1457',
    _900: '#880e4f',
    _A100: '#ff80ab',
    _A200: '#ff4081',
    _A400: '#f50057',
    _A700: '#c51162',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_purple: IMatColorPallete = {
    _50: '#f3e5f5',
    _100: '#e1bee7',
    _200: '#ce93d8',
    _300: '#ba68c8',
    _400: '#ab47bc',
    _500: '#9c27b0',
    _600: '#8e24aa',
    _700: '#7b1fa2',
    _800: '#6a1b9a',
    _900: '#4a148c',
    _A100: '#ea80fc',
    _A200: '#e040fb',
    _A400: '#d500f9',
    _A700: '#aa00ff',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(white, 1)',
        _400: 'rgba(white, 1)',
        _500: 'rgba(white, 0.87)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_deep_purple: IMatColorPallete = {
    _50: '#ede7f6',
    _100: '#d1c4e9',
    _200: '#b39ddb',
    _300: '#9575cd',
    _400: '#7e57c2',
    _500: '#673ab7',
    _600: '#5e35b1',
    _700: '#512da8',
    _800: '#4527a0',
    _900: '#311b92',
    _A100: '#b388ff',
    _A200: '#7c4dff',
    _A400: '#651fff',
    _A700: '#6200ea',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(white, 1)',
        _400: 'rgba(white, 1)',
        _500: 'rgba(white, 0.87)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 0.87)',
        _A700: 'rgba(white, 0.87)',
    }
};

const mat_color_indigo: IMatColorPallete = {
    _50: '#e8eaf6',
    _100: '#c5cae9',
    _200: '#9fa8da',
    _300: '#7986cb',
    _400: '#5c6bc0',
    _500: '#3f51b5',
    _600: '#3949ab',
    _700: '#303f9f',
    _800: '#283593',
    _900: '#1a237e',
    _A100: '#8c9eff',
    _A200: '#536dfe',
    _A400: '#3d5afe',
    _A700: '#304ffe',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(white, 1)',
        _400: 'rgba(white, 1)',
        _500: 'rgba(white, 0.87)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 0.87)',
    }
};

const mat_color_blue: IMatColorPallete = {
    _50: '#e3f2fd',
    _100: '#bbdefb',
    _200: '#90caf9',
    _300: '#64b5f6',
    _400: '#42a5f5',
    _500: '#2196f3',
    _600: '#1e88e5',
    _700: '#1976d2',
    _800: '#1565c0',
    _900: '#0d47a1',
    _A100: '#82b1ff',
    _A200: '#448aff',
    _A400: '#2979ff',
    _A700: '#2962ff',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(white, 1)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_light_blue: IMatColorPallete = {
    _50: '#e1f5fe',
    _100: '#b3e5fc',
    _200: '#81d4fa',
    _300: '#4fc3f7',
    _400: '#29b6f6',
    _500: '#03a9f4',
    _600: '#039be5',
    _700: '#0288d1',
    _800: '#0277bd',
    _900: '#01579b',
    _A100: '#80d8ff',
    _A200: '#40c4ff',
    _A400: '#00b0ff',
    _A700: '#0091ea',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 1)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_cyan: IMatColorPallete = {
    _50: '#e0f7fa',
    _100: '#b2ebf2',
    _200: '#80deea',
    _300: '#4dd0e1',
    _400: '#26c6da',
    _500: '#00bcd4',
    _600: '#00acc1',
    _700: '#0097a7',
    _800: '#00838f',
    _900: '#006064',
    _A100: '#84ffff',
    _A200: '#18ffff',
    _A400: '#00e5ff',
    _A700: '#00b8d4',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 1)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_teal: IMatColorPallete = {
    _50: '#e0f2f1',
    _100: '#b2dfdb',
    _200: '#80cbc4',
    _300: '#4db6ac',
    _400: '#26a69a',
    _500: '#009688',
    _600: '#00897b',
    _700: '#00796b',
    _800: '#00695c',
    _900: '#004d40',
    _A100: '#a7ffeb',
    _A200: '#64ffda',
    _A400: '#1de9b6',
    _A700: '#00bfa5',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_green: IMatColorPallete = {
    _50: '#e8f5e9',
    _100: '#c8e6c9',
    _200: '#a5d6a7',
    _300: '#81c784',
    _400: '#66bb6a',
    _500: '#4caf50',
    _600: '#43a047',
    _700: '#388e3c',
    _800: '#2e7d32',
    _900: '#1b5e20',
    _A100: '#b9f6ca',
    _A200: '#69f0ae',
    _A400: '#00e676',
    _A700: '#00c853',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_light_green: IMatColorPallete = {
    _50: '#f1f8e9',
    _100: '#dcedc8',
    _200: '#c5e1a5',
    _300: '#aed581',
    _400: '#9ccc65',
    _500: '#8bc34a',
    _600: '#7cb342',
    _700: '#689f38',
    _800: '#558b2f',
    _900: '#33691e',
    _A100: '#ccff90',
    _A200: '#b2ff59',
    _A400: '#76ff03',
    _A700: '#64dd17',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(black, 0.87)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 1)',
        _900: 'rgba(white, 1)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_lime: IMatColorPallete = {
    _50: '#f9fbe7',
    _100: '#f0f4c3',
    _200: '#e6ee9c',
    _300: '#dce775',
    _400: '#d4e157',
    _500: '#cddc39',
    _600: '#c0ca33',
    _700: '#afb42b',
    _800: '#9e9d24',
    _900: '#827717',
    _A100: '#f4ff81',
    _A200: '#eeff41',
    _A400: '#c6ff00',
    _A700: '#aeea00',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(black, 0.87)',
        _700: 'rgba(black, 0.87)',
        _800: 'rgba(black, 0.87)',
        _900: 'rgba(white, 1)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_yellow: IMatColorPallete = {
    _50: '#fffde7',
    _100: '#fff9c4',
    _200: '#fff59d',
    _300: '#fff176',
    _400: '#ffee58',
    _500: '#ffeb3b',
    _600: '#fdd835',
    _700: '#fbc02d',
    _800: '#f9a825',
    _900: '#f57f17',
    _A100: '#ffff8d',
    _A200: '#ffff00',
    _A400: '#ffea00',
    _A700: '#ffd600',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(black, 0.87)',
        _700: 'rgba(black, 0.87)',
        _800: 'rgba(black, 0.87)',
        _900: 'rgba(black, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_amber: IMatColorPallete = {
    _50: '#fff8e1',
    _100: '#ffecb3',
    _200: '#ffe082',
    _300: '#ffd54f',
    _400: '#ffca28',
    _500: '#ffc107',
    _600: '#ffb300',
    _700: '#ffa000',
    _800: '#ff8f00',
    _900: '#ff6f00',
    _A100: '#ffe57f',
    _A200: '#ffd740',
    _A400: '#ffc400',
    _A700: '#ffab00',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(black, 0.87)',
        _700: 'rgba(black, 0.87)',
        _800: 'rgba(black, 0.87)',
        _900: 'rgba(black, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(black, 0.87)',
    }
};

const mat_color_orange: IMatColorPallete = {
    _50: '#fff3e0',
    _100: '#ffe0b2',
    _200: '#ffcc80',
    _300: '#ffb74d',
    _400: '#ffa726',
    _500: '#ff9800',
    _600: '#fb8c00',
    _700: '#f57c00',
    _800: '#ef6c00',
    _900: '#e65100',
    _A100: '#ffd180',
    _A200: '#ffab40',
    _A400: '#ff9100',
    _A700: '#ff6d00',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(black, 0.87)',
        _700: 'rgba(black, 0.87)',
        _800: 'rgba(white, 1)',
        _900: 'rgba(white, 1)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'black',
    }
};

const mat_color_deep_orange: IMatColorPallete = {
    _50: '#fbe9e7',
    _100: '#ffccbc',
    _200: '#ffab91',
    _300: '#ff8a65',
    _400: '#ff7043',
    _500: '#ff5722',
    _600: '#f4511e',
    _700: '#e64a19',
    _800: '#d84315',
    _900: '#bf360c',
    _A100: '#ff9e80',
    _A200: '#ff6e40',
    _A400: '#ff3d00',
    _A700: '#dd2c00',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 1)',
        _700: 'rgba(white, 1)',
        _800: 'rgba(white, 1)',
        _900: 'rgba(white, 1)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 1)',
    }
};

const mat_color_brown: IMatColorPallete = {
    _50: '#efebe9',
    _100: '#d7ccc8',
    _200: '#bcaaa4',
    _300: '#a1887f',
    _400: '#8d6e63',
    _500: '#795548',
    _600: '#6d4c41',
    _700: '#5d4037',
    _800: '#4e342e',
    _900: '#3e2723',
    _A100: '#d7ccc8',
    _A200: '#bcaaa4',
    _A400: '#8d6e63',
    _A700: '#5d4037',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(white, 1)',
        _400: 'rgba(white, 1)',
        _500: 'rgba(white, 0.87)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 0.87)',
    }
};

const mat_color_grey: IMatColorPallete = {
    _50: '#fafafa',
    _100: '#f5f5f5',
    _200: '#eeeeee',
    _300: '#e0e0e0',
    _400: '#bdbdbd',
    _500: '#9e9e9e',
    _600: '#757575',
    _700: '#616161',
    _800: '#424242',
    _900: '#212121',
    _A100: '#ffffff',
    _A200: '#eeeeee',
    _A400: '#bdbdbd',
    _A700: '#616161',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(black, 0.87)',
        _500: 'rgba(black, 0.87)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(black, 0.87)',
        _A700: 'rgba(white, 0.87)',
    }
};

const mat_color_blue_grey: IMatColorPallete = {
    _50: '#eceff1',
    _100: '#cfd8dc',
    _200: '#b0bec5',
    _300: '#90a4ae',
    _400: '#78909c',
    _500: '#607d8b',
    _600: '#546e7a',
    _700: '#455a64',
    _800: '#37474f',
    _900: '#263238',
    _A100: '#cfd8dc',
    _A200: '#b0bec5',
    _A400: '#78909c',
    _A700: '#455a64',
    contrast: {
        _50: 'rgba(black, 0.87)',
        _100: 'rgba(black, 0.87)',
        _200: 'rgba(black, 0.87)',
        _300: 'rgba(black, 0.87)',
        _400: 'rgba(white, 1)',
        _500: 'rgba(white, 1)',
        _600: 'rgba(white, 0.87)',
        _700: 'rgba(white, 0.87)',
        _800: 'rgba(white, 0.87)',
        _900: 'rgba(white, 0.87)',
        _A100: 'rgba(black, 0.87)',
        _A200: 'rgba(black, 0.87)',
        _A400: 'rgba(white, 1)',
        _A700: 'rgba(white, 0.87)',
    }
};

// should be consistent with dark-theme.scss
export const dark_theme: IMatTheme = {
    primary: {
        default: mat_color_blue_grey._800,
        lighter: mat_color_blue_grey._700,
        darker: mat_color_blue_grey._900,
        contrast: {
            default: mat_color_blue_grey.contrast._800,
            lighter: mat_color_blue_grey.contrast._700,
            darker: mat_color_blue_grey.contrast._900,
        }
    },
    accent: {
        default: mat_color_green._A400,
        lighter: mat_color_green._A200,
        darker: mat_color_green._A700,
        contrast: {
            default: mat_color_green.contrast._A400,
            lighter: mat_color_green.contrast._A200,
            darker: mat_color_green.contrast._A700,
        }
    },
};

// should be consistent with light-theme.scss
export const light_theme: IMatTheme = {
    primary: {
        default: mat_color_blue_grey._200,
        lighter: mat_color_blue_grey._50,
        darker: mat_color_blue_grey._300,
        contrast: {
            default: mat_color_blue_grey.contrast._200,
            lighter: mat_color_blue_grey.contrast._50,
            darker: mat_color_blue_grey.contrast._300,
        }
    },
    accent: {
        default: mat_color_green._A400,
        lighter: mat_color_green._A200,
        darker: mat_color_green._A700,
        contrast: {
            default: mat_color_green.contrast._A400,
            lighter: mat_color_green.contrast._A200,
            darker: mat_color_green.contrast._A700,
        }
    },
};

