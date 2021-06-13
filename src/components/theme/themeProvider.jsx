import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#00dbd0";

const lightGrey = "#374b5c";

export const theme = createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            lightGrey,

        },
        primary: {
            main: arcBlue,
            contrastText: "#fff",
        },
        secondary: {
            main: lightGrey,
        }
    },

});
