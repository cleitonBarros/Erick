export const defaultTheme = {
  COLORS: {
    BLACK_200: "#111111",
    BLACK_300: "#000000",

    WHITE_100: "#FFFFFF",
    WHITE_200: "F9F9F9",

    ORANGE: "#FB8351",

    GRAY: "#D9D9D9",

    BEIGE: "#E9E2DA"
  }
};

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};
