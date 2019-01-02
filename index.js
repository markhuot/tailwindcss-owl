module.exports = function({ e, addUtilities, config }) {
  let newUtilities = {}
  let margins = config('margin', {})
  
  for (const key in margins) {
    let className = `.${e(`s-${key}`)} > * + *`
    let marginTop = margins[key]

    if (marginTop == 'auto') {
      continue
    }

    newUtilities[className] = {marginTop}
  }

  addUtilities(newUtilities)
}
