import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#D9622F",
          light: "#FDE9D8",
          dark: "#A35C1E",
        },
        cream: {
          DEFAULT: "#FAF6F0",
          card: "#FFFFFF",
          border: "#F0E6D8",
        },
        coffee: {
          DEFAULT: "#3D3225",
          muted: "#9C8E78",
          subtle: "#A89A86",
        },
        leaf: {
          DEFAULT: "#3D6B47",
          light: "#E3EFE3",
        },
        sun: {
          DEFAULT: "#E8A33D",
          light: "#FCF0DC",
        },
        berry: {
          DEFAULT: "#D4527E",
          light: "#FCE3E8",
        },
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        accent: ["28px", { lineHeight: "1.2", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "24px",
        full: "9999px",
      },
    },
  },
};

export default config;
