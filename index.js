

const state = {

}

function renderHeader() {
    const headerEl = document.createElement(`header`)
    const h2El = document.createElement(`h2`)
    h2El.textContent = `Hollixton`
    
    document.body.append(headerEl)
    headerEl.append(h2El)
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