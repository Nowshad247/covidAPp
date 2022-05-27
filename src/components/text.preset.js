
import { typography } from "../Theme/typography";
const BASE = {
    fontFamily: typography.primary,
}
const BOLD = {
    fontFamily: typography.primaryBold
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 34,

    },
    h2: {
        ...BOLD,
        fontSize: 30
    },
    h3: {
        ...BASE,
        fontSize: 22
    },
    h4: {
        ...BASE,
        fontSize: 17
    },
    small: {
        ...BASE,
        fontSize: 12
    }

}