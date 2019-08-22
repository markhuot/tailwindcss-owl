module.exports = function() {
  return ({ theme, variants, e, config, addUtilities }) => {
    const defaultCssOwlsTheme = {};
    const defaultCssOwlsVariants = ["responsive"];

    const cssOwlsTheme = theme("cssOwls", defaultCssOwlsTheme);
    const cssOwlVariants = variants("cssOwls", defaultCssOwlsVariants);

    let cssOwlUtilities = {};
    let margins = config("theme.margin", {});

    for (const key in margins) {
      let className = `.${e(`o-${key}`)} > * + *`;
      let marginTop = margins[key];

      if (marginTop == "auto") {
        continue;
      }

      cssOwlUtilities[className] = { marginTop };
    }

    addUtilities(cssOwlUtilities, cssOwlVariants);
  };
};
