'use strict'

import {contatos} from "./recursos/contatos.js"
var id = 0
const criarContainer = (contato) => {
    const container = document.createElement('div')
    container.classList.add('contact__container')
    container.style.backgroundColor
    container.setAttribute('id',id)
    id++
    container.addEventListener("click", mudarFundo)

    const imageHolder = document.createElement('div')
    imageHolder.classList.add('nav__image_holder')

    const image = document.createElement('img')
    image.classList.add('nav__main_image')
    image.src = `./recursos/${contato.image}`
    imageHolder.append(image)

    const contact = document.createElement('div')
    contact.classList.add('contact__text')

    const name = document.createElement('h5')
    name.classList.add('contact__name')
    name.textContent = contato.name
    contact.append(name)

    const description = document.createElement('p')
    description.classList.add('contact__last__menssage')
    description.textContent = contato.description
    contact.append(description)

    container.append(imageHolder, contact)

    return container


}

const carregarMensagens = () => {
    const navMain = document.getElementById('nav__main')
    const cards = contatos.map( criarContainer )

    navMain.replaceChildren(...cards)
}

var last = 0
const mudarFundo = (card) => {
    let containerUnselect = document.getElementById(last)
    let containerSelected = document.getElementById(card.currentTarget.id)
    containerUnselect.classList.remove('selected')
    containerSelected.classList.add('selected')
    last = card.currentTarget.id
    console.log(last)
    console.log(card.currentTarget.id)

}

carregarMensagens()