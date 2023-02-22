const headerSearchCont = document.querySelector('.header__container__search')
const headerSearchIcon = document.querySelector(
	'.header__menu_icons__search__icon'
)

const headerSearchIconInSearching = document.querySelector(
	'.header__search__icon'
)

const headerInputSearch = document.querySelector('.header__search')

const burgerIcon = document.querySelector('.header__menu_icons__burger__icon')
const burgerMenu = document.querySelector('.header__menu_icons__burger__menu')

headerSearchIcon.onclick = function () {
	this.style.display = 'none'
	headerSearchCont.style.display = 'flex'
}

document.addEventListener('click', event => {
	const target = event.target
	const searchValue = headerInputSearch.value

	if (
		target !== headerInputSearch &&
		target !== headerSearchIcon &&
		target !== headerSearchIconInSearching &&
		!searchValue
	) {
		headerSearchCont.style.display = ''
		headerSearchIcon.style.display = ''
	}

	if (
		target !== burgerMenu &&
		target !== burgerIcon &&
		target !== burgerIcon.querySelector('div')
	) {
		burgerMenu.style.display = ''
	}
})

burgerIcon.onclick = () => {
	const displayValue = burgerMenu.style.display !== 'block' ? 'block' : ''
	burgerMenu.style.display = displayValue
}
