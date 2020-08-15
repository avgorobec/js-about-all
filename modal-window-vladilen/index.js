const contentHtml = `
        Пропала связь между маршрутизаторами в Москве (</b>rt-mx480.msk.net</b>) и Белгороде (</b>rt-mx5.belgorod.net</b>) в 13:10 11.08.2020.
        <br><br>
        <h4>Event from device</h4>
        <span class="modal__body-content">BFD Session 10.1.1.1 (IFL 65945) state Up -> Down LD/RD(27034/47) Up time:00:09:25 Local diag: AdminDown Remote diag: None Reason: Received Upstream Destroy Session.
BFDD_TRAP_SHOP_STATE_DOWN: local discriminator: 27034, new state: down, interface: xe-0/3/0.1600, peer addr: 10.1.1.1
RPD_ISIS_ADJDOWN: IS-IS lost L1 adjacency to RN-Belgorod-RT on xe-0/3/0.1600, reason: Aged out</span>
`

let animals = [
    {id: 1, title: 'Сова', price: 20, img: 'https://cdn1.flamp.ru/66af325368a0958681e829553c205952.jpg'},
    {
        id: 2,
        title: 'Китоглав',
        price: 505,
        img: 'https://images11.popmeh.ru/upload/custom/1dc/1dce0fcbaa85088c2f88cb3add6ced3a.jpg'
    },
    {id: 3, title: 'Котэ', price: 250, img: 'https://a.d-cd.net/dedee9as-960.jpg'},
]

/* Нарисовать карточки */
const toHTML = animal => `
        <div class="col">
            <div class="card" style="width: 18rem">
                <img class="card-img-top" src=${animal.img}  style="object-fit: contain; height: 300px" alt="">
                <div class="card-body">
                    <h5 class="card-title">${animal.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${animal.id}">Посмотреть цену</a>
                    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${animal.id}">Удалить</a>
                </div>
            </div>
        </div>`

function render() {
    const html = animals.map(toHTML).join('')
    document.querySelector('#animals').innerHTML = html
}

render()

// <---------- Карточки

/* Создание модального окна */
const options = {
    title: 'Цена на товар',
    closable: true,
    width: '600px',
    footerButtons: [
        {
            text: 'Закрыть', type: 'primary', handler() {
                priceModal.close()
            }
        }
    ]
}

const priceModal = $.modal(options)

// <---------- Модальное окно


/* Добавить обработчики на кнопки удлаения и цены */

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const animal = animals.find(el => el.id === id)

    if (btnType === 'price') {
        priceModal.setContent(`
            <p>Цена на ${animal.title}: <strong>${animal.price}</strong></p>
        `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены',
            content: `<p>Вы адаляете: <strong>${animal.title}</strong></p>`
        }).then(() => {
            animals = animals.filter(el => el.id !== id)
            render()
        }).catch(() => {
            console.log('Catch')
        })
    }
})























