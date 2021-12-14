
const headerEl = document.createElement(`header`)

const mainEl = document.createElement(`main`)


const state = {
   store: []
}

function renderHeader() {

    headerEl.innerHTML = ``

    

    const divEl = document.createElement(`div`)
    divEl.setAttribute(`class`, `categories`)
    
    const h2El = document.createElement(`h2`)
    h2El.textContent = `Hollixton`

    const ulEl = document.createElement(`ul`)

    const girlsEl = document.createElement(`h4`)
    const girlsButton = document.createElement(`button`)
    girlsButton.textContent = `Girls`
    girlsEl.append(girlsButton)

    girlsButton.addEventListener(`click`, function() {
        mainEl.innerHTML = ``
      let GirlsList =  state.store.filter(item => !item.type.includes(`Guys`))
        state.store = GirlsList

        render()
    })

    const boysEl = document.createElement(`h4`)
    const boysButton = document.createElement(`button`)
    boysButton.textContent = `Boys`
    boysEl.append(boysButton)

    const saleEl = document.createElement(`h4`)
    saleButton = document.createElement(`button`)
    saleButton.textContent = `Sale`
    saleEl.append(saleButton)

    ulEl.append(girlsEl, boysEl, saleEl)
    divEl.append(h2El, ulEl)

    const divSettingsEl = document.createElement(`div`)
    const ulSettingsEl = document.createElement(`ul`)
    ulSettingsEl.setAttribute(`class`, `settings`)

    const liSearchEl = document.createElement(`li`)
    const searchButtonEl = document.createElement(`button`)
    const searchEl = document.createElement(`img`)
    searchEl.setAttribute(`src`, `icons/search_black_24dp (1).svg`)
    searchButtonEl.append(searchEl)
    liSearchEl.append(searchButtonEl)

    const liProfileEl = document.createElement(`li`)
    const profileButtonEl = document.createElement(`button`)
    const profileEl = document.createElement(`img`)
    profileEl.setAttribute(`src`, `icons/account_circle_black_24dp.svg`)

    profileButtonEl.append(profileEl)
    liProfileEl.append(profileButtonEl)

    const libagEl = document.createElement(`li`)
    const bagButtonEl = document.createElement(`button`)
    const bagEl = document.createElement(`img`)
    bagEl.setAttribute(`src`, `icons/shopping_bag_black_24dp.svg`)
    bagButtonEl.append(bagEl)

    libagEl.append(bagButtonEl)
    ulSettingsEl.append(liSearchEl, liProfileEl, libagEl)
    divSettingsEl.append(ulSettingsEl)
    
    headerEl.append(divEl, divSettingsEl)
    document.body.append(headerEl)
}

function renderMain() {

    const h3El = document.createElement(`h3`)
    h3El.textContent = `Home`

    for(const item of state.store) {

    const itemSectionEl = document.createElement(`section`)
    const itemLinkEl = document.createElement('a')
    itemLinkEl.setAttribute('href', '#')
    const clothesEl = document.createElement(`img`)
    clothesEl.setAttribute(`class`, `clothes`)
    clothesEl.setAttribute(`src`, item.image)
    clothesEl.setAttribute(`width`, `250px`)
    itemLinkEl.append(clothesEl)

    titleEl = document.createElement(`h3`)
    titleEl.textContent = item.name

    priceEl = document.createElement(`h3`)
    priceEl.textContent = `£${item.price}`

    itemSectionEl.append(itemLinkEl, titleEl, priceEl)

    mainEl.append(itemSectionEl)
    }

    document.body.append(mainEl)
}

function renderFooter() {
    const footerEl = document.createElement(`footer`)
    const h2El = document.createElement(`h2`)
    
    document.body.append(footerEl)
    footerEl.append(h2El)
}

function getData() {
    return fetch('http://localhost:3000/store').then(function (resp) {
        return resp.json()
    })
}
    getData().then(function(item) {
        state.store = item
        render()
    })

function render() {
    document.body.innerHTML = ``

    renderHeader()
    renderMain()
    renderFooter()
}

render()