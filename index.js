const state = {
    store: [],
    tab: null
}

function getData() {
    return fetch('http://localhost:3000/store').then(function (resp) {
        return resp.json()
    })
}


const headerEl = document.createElement(`header`)

const mainEl = document.createElement(`main`)

function renderHeader() {

    headerEl.innerHTML = ``



    const divEl = document.createElement(`div`)
    divEl.setAttribute(`class`, `categories`)

    const h2El = document.createElement(`h2`)
    h2El.setAttribute(`class`, `page`)
    h2El.textContent = `Hollixton`

    h2El.addEventListener(`click`, function() {
        mainEl.innerHTML = ``
        state.tab = null
        changeState()
    })

    const ulEl = document.createElement(`ul`)

    const girlsEl = document.createElement(`h4`)
    const girlsButton = document.createElement(`button`)
    girlsButton.textContent = `Girls`
    girlsEl.append(girlsButton)

    girlsButton.addEventListener(`click`, function () {
        mainEl.innerHTML = ``
        state.tab = 'Girls'
        changeState()
    })

    const boysEl = document.createElement(`h4`)
    const boysButton = document.createElement(`button`)
    boysButton.textContent = `Boys`
    boysEl.append(boysButton)

    boysButton.addEventListener(`click`, function () {
        mainEl.innerHTML = ``

        state.tab = 'Guys'
        changeState()
    })

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

function isItemNew(item) {
    const daysToConsider = 11

    const second = 1000
    const minute = second*60
    const hour = minute*60
    const day = hour*24

    const msForTenDaysAgo = Date.now() - day*daysToConsider

    const msForProductDate = Date.parse(item.dateEntered)

    return msForProductDate > msForTenDaysAgo
}

function renderMain() {

    const h3El = document.createElement(`h3`)
    h3El.textContent = `Home`

    for (const item of state.store) {

        const itemSectionEl = document.createElement(`section`)
        itemSectionEl.setAttribute(`class`, `product-item`)
        const itemLinkEl = document.createElement('a')
        itemLinkEl.setAttribute('href', '#')
        const clothesEl = document.createElement(`img`)
        clothesEl.setAttribute(`class`, `clothes`)
        clothesEl.setAttribute(`src`, item.image)
        clothesEl.setAttribute(`width`, `250px`)
        itemLinkEl.append(clothesEl)

        titleEl = document.createElement(`h3`)
        titleEl.textContent = item.name

        const fullPriceEl = document.createElement('p')
        fullPriceEl.setAttribute('class', 'product-item__price')

        priceEl = document.createElement(`span`)
        priceEl.setAttribute(`class`, `normal-price`)
        priceEl.textContent = `£${item.price}`

        fullPriceEl.append(priceEl)

        const discountPriceEl = document.createElement('span')
        discountPriceEl.setAttribute('class', 'discount')
        if (item.discountedPrice) {
            priceEl.classList.add(`discounted-price`)
            discountPriceEl.textContent = ` £${item.discountedPrice}`
            fullPriceEl.append(discountPriceEl)
        }

        if (isItemNew(item)) {
            const newTag = document.createElement('span')
            newTag.setAttribute('class', 'product-item_new')
            newTag.textContent = 'NEW!'
            itemSectionEl.append(newTag)
        }

        itemSectionEl.append(itemLinkEl, titleEl, fullPriceEl)

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


function normalState() {
    getData().then(function (item) {
        state.store = item
        render()
    })
}

function girlsState() {
    getData().then(function (item) {
        state.store = item.filter(item => item.type === `Girls`)
        render()
    })
}

function guysState() {
    getData().then(function (item) {
        state.store = item.filter(item => item.type === `Guys`)
        render()
    })
}

function changeState() {
    if(state.tab === `Girls`) {
        girlsState()
    } else if(state.tab === `Guys`) {
        guysState()
    } else if(state.tab === null) {
        normalState()
    }
}

function render() {
    document.body.innerHTML = ``

    renderHeader()
    renderMain()
    renderFooter()
}

changeState()

render()