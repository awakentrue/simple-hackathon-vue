module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: process.env.NODE_ENV ? "jit" : undefined,
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      boxShadow: {
        airbnb: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      },
      borderColor: {
        dark: {
          primary: "#36393e",
          secondary: "#2f3136",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#36393e",
          secondary: "#2f3136",
          "modifier-hover": "#4f545c29",
          "modifier-active": "#4f545c52",
        },
        light: {
          primary: "#f3f4f6",
        },
        "transparent-black": "rgba(0, 0, 0, 0.4);",
      },
      textColor: {
        dark: {
          primary: "#b9bbbe",
          "modifier-hover": "#dcddde",
          "modifier-active": "#fff",
        },
        light: {
          primary: "#393839",
          "modifier-hover": "#fff",
          "modifier-active": "#fff",
        },
      },
      colors: {
        "sky-blue": "rgb(14 165 233)",
      },
    },
  },
  plugins: [],
};
