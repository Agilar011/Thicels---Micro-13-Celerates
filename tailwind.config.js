/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  content: [
    "./src/*.{html,js}",
   "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
=======
=======
>>>>>>> 1ced2b3 (First-commit)
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f2f7ff",
        gray: {
          "100": "#fafafa",
          "200": "rgba(0, 0, 0, 0.45)",
          "300": "rgba(22, 22, 22, 0.05)",
          "400": "rgba(255, 255, 255, 0.8)",
        },
        "neutral-100": "#fff",
        steelblue: {
          "100": "#5494bd",
          "200": "#3d85c7",
          "300": "#208bcc",
          "400": "#1473b5",
          "500": "#185fa0",
          "600": "rgba(61, 133, 199, 0.09)",
        },
        black: "#000",
        "primary-700": "#115c93",
        "information-100": "#d6f2ff",
        "primary-300": "#88c8f1",
        lightblue: "#bdd9e6",
        second: "#6c87ae",
        deepskyblue: "#3ba6e6",
        "primary-50": "#f1f8fe",
        dimgray: "#5c6169",
        gainsboro: "#e6e6e6",
        "gray-6": "#f2f2f2",
        "neutral-600": "#6f6c90",
        "neutral-800": "#170f49",
        "buttons-border-primary-gradient": "#174bd2",
        "neutral-50": "#282828",
        "green-2": "#27ae60",
        whitesmoke: "#eee",
        darkslategray: {
          "100": "#353539",
          "200": "#303131",
        },
        "error-600": "#dc3545",
        "gray-1": "#333",
        "gray-4": "#bdbdbd",
        darkslateblue: "#0f2f64",
      },
      spacing: {
        "buttons-gaps-gap-small": "7.718654155731201px",
        "buttons-paddings-pd-small": "15.437308311462402px",
      },
      fontFamily: {
        sora: "Sora",
        poppins: "Poppins",
        "headings-typography-size-2": "'DM Sans'",
        "tablet-subtitles-subtitle-1": "Inter",
        "lexend-deca": "'Lexend Deca'",
        roboto: "Roboto",
      },
      borderRadius: {
        "12xs-8": "0.8px",
        "11xl": "30px",
        "13xl": "32px",
        "3xl-8": "22.8px",
        "45xl-2": "64.2px",
        "21xl": "40px",
        "mini-7": "14.7px",
        base: "16px",
        "6xs": "7px",
        "lg-3": "18.3px",
        "9xs-7": "3.7px",
        "7xs-9": "5.9px",
        "xs-9": "11.9px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      mini: "15px",
      "5xl": "24px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      "11xl": "30px",
      lg: "18px",
      "21xl": "40px",
      xs: "12px",
      sm: "14px",
      "4xl": "23px",
      "15xl": "34px",
      "base-4": "16.4px",
      "xl-4": "20.4px",
      "xl-1": "20.1px",
      "4xl-8": "23.8px",
      "lg-3": "18.3px",
      "5xl-6": "24.6px",
      "base-6": "16.6px",
      "mid-8": "17.8px",
      "2xl-4": "21.4px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
<<<<<<< HEAD
>>>>>>> 1ced2b3 (First-commit)
=======
>>>>>>> 1ced2b3 (First-commit)
