Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextElementSibling)
}

function noop() {

}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function _createModal({
                          title = 'Заголовок',
                          closable = false,
                          content = 'Content',
                          width = '400px',
                          footerButtons = []
                      }) {
    const modal = document.createElement('div')

    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${width}">
                <div class="modal-header">
                    <span class="modal-title">${title}</span>
                    ${closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
                </div>
                <div class="modal-body" data-content>
                    ${content}
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>`)
    const footer = _createModalFooter(footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {

    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
            !closing && modalWindow.classList.add('animate__animated', 'animate__lightSpeedInRight')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    const modalWindow = document.querySelector('.modal-window')

    /* Hooks */
    const onClose = new MutationObserver((mutations) => {
        mutations.forEach(function (mutation) {
            mutation.oldValue === 'vmodal open' && console.log('The Modal window closed')
        });
    });
    onClose.observe($modal, {
        attributeOldValue: true
    });

    const onOpen = new MutationObserver((mutations) => {
        mutations.forEach(function (mutation) {
            mutation.oldValue === 'vmodal' && console.log('The Modal window opened')
        });
    });
    onOpen.observe($modal, {
        attributeOldValue: true
    });

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}















