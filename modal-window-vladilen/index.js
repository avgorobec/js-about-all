const contentHtml = `
        Пропала связь между маршрутизаторами в Москве (</b>rt-mx480.msk.net</b>) и Белгороде (</b>rt-mx5.belgorod.net</b>) в 13:10 11.08.2020.
        <br><br>
        <h4>Event from device</h4>
        <span class="modal__body-content">BFD Session 10.1.1.1 (IFL 65945) state Up -> Down LD/RD(27034/47) Up time:00:09:25 Local diag: AdminDown Remote diag: None Reason: Received Upstream Destroy Session.
BFDD_TRAP_SHOP_STATE_DOWN: local discriminator: 27034, new state: down, interface: xe-0/3/0.1600, peer addr: 10.1.1.1
RPD_ISIS_ADJDOWN: IS-IS lost L1 adjacency to RN-Belgorod-RT on xe-0/3/0.1600, reason: Aged out</span>
    `

const options = {
    title: 'Перестроение топологии',
    closable: true,
    content: contentHtml,
    width: '400px'
}

const options2 = {
    // title: '',
    closable: true,
    // content: contentHtml,
    width: '400px'
}
const modal = $.modal(options)