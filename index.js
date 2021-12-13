

const state = {

}

function renderHeader() {
    const headerEl = document.createElement(`header`)
    const h2El = document.createElement(`h2`)
    h2El.textContent = `Hollixton`

    const girlsEl = document.createElement(`h4`)
    girlsEl.textContent = `Girls`

    const boysEl = document.createElement(`h4`)
    boysEl.textContent = `Boys`

    const saleEl = document.createElement(`h4`)
    saleEl.textContent = `Sale`

    const searchEl = document.createElement(`img`)
    searchEl.setAttribute(`src`, `icons/search_black_24dp (1).svg`)
    searchEl.setAttribute(`class`, `searchBtn`)

    const profileEl = document.createElement(`img`)
    profileEl.setAttribute(`src`, `icons/account_circle_black_24dp.svg`)

    const bagEl = document.createElement(`img`)
    bagEl.setAttribute(`src`, `icons/shopping_bag_black_24dp.svg`)
    
    document.body.append(headerEl)
    headerEl.append(h2El, girlsEl, boysEl, saleEl, searchEl, profileEl, bagEl)
}

function renderMain() {
    const mainEl = document.createElement(`main`)
    const h2El = document.createElement(`h2`)
    
    document.body.append(mainEl)
    mainEl.append(h2El)

}

function renderFooter() {
    const footerEl = document.createElement(`footer`)
    const h2El = document.createElement(`h2`)
    
    document.body.append(footerEl)
    footerEl.append(h2El)
}

function render() {
    document.body.innerHTML = ``

    renderHeader()
    renderMain()
    renderFooter()
}

render()