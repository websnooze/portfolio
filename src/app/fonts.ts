import localFont from "next/font/local";

const satoshi = localFont({
    src: [
      { path: "./fonts/Satoshi/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
      { path: "./fonts/Satoshi/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
    ],
    variable: "--font-satoshi",
    display: "swap",
    preload: true,
  });
  
  const clashDisplay = localFont({
    src: [
      { path: "./fonts/ClashDisplay/ClashDisplay-Variable.woff2", weight: "200 700", style: "normal" },
    ], 
    variable: "--font-clash",
    display: "swap",
    preload: true,
  });

  export { satoshi, clashDisplay };