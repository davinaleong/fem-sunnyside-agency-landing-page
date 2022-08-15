const primaryHeader = document.querySelector(`[data-primary-header]`)

const primaryHeaderToggleButton = document.querySelector(
  `[data-primary-navigation-toggle]`
)

primaryHeaderToggleButton.addEventListener(`click`, () => {
  primaryHeader.toggleAttribute(`data-open`)
})
