const sergeTheme = {
  colors: {
    white: "#FBF9FE",
    neutralWhite: "#F0EFF2",
    accent: "#A1A9B2",
    accentDark: "#4C5866",
    accentLight: "#DCE0E5",
    accentLighter: "#EBEDF0",
    grayLight: "#E8E8E8",
    grayDark: "#45474D",
    grayDarker: "#242629",
    black: "#191919",
  },
  shadows: {
    button: "-12px 12px 0px #EBEDF0;",
    container:
      "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 25px rgba(0, 0, 0, 0.1)",
  },
  fonts: {
    heading:
      'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    body:
      'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  },
  fontSizes: ["12px", "14px", "18px", "20px", "24px", "36px"],
  lineHeights: {
    body: 1.5625,
    heading: 1,
  },
  space: ["6px", "8px", "14px", "20px", "32px", "36px", "64px", "96px"],
  mq: {
    mobileS: `(max-width: 374px)`,
    mobileSLandscape: `(max-width: 750px) and (max-height: 500px) and (orientation: landscape)`,
    mobileM: `(max-width: 767px)`,
    mobileMLandscape: `(max-width: 890px) and (max-height: 500px) and (orientation: landscape)`,
    tablet: `(max-width: 1024px)`,
    tabletland: `(max-width: 1024px) and (orientation: landscape)`,
    tabletPortrait: `(max-width: 1024px) and (orientation: portrait)`,
    ipadProPortrait: `(min-width: 1024px) 
       and (max-height: 1366px) 
       and (orientation: portrait) 
       and (-webkit-min-device-pixel-ratio: 1.5)`,
    laptop: `(max-width: 1440px)`,
    desktop: `(min-width: 1680px)`,
  },
}

export default sergeTheme
