function _createModal({title = 'Заголовок', closable = false, content = 'Content',width = '400px'}) {
    const modal = document.createElement('div')

    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">${title}</span>
                    ${closable ? '<span class="modal-close">&times;</span>' : ''}
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>`)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    const modalClose = document.querySelector('.modal-close')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalBody = document.querySelector('.modal-body')

    const _destroy = () => $modal.remove()
    const _close = () => {
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
        }, ANIMATION_SPEED)
    }

    modalClose.addEventListener('click', _close)
    modalOverlay.addEventListener('click', _close)

    /* Hooks */
    const onClose = new MutationObserver((mutations) => {
        mutations.forEach(function(mutation) {
            mutation.oldValue === 'vmodal open' && console.log('The Modal window closed')
        });
    });
    onClose.observe($modal, {
        attributeOldValue: true
    });

    const onOpen = new MutationObserver((mutations) => {
        mutations.forEach(function(mutation) {
            mutation.oldValue === 'vmodal' && console.log('The Modal window opened')
        });
    });
    onOpen.observe($modal, {
        attributeOldValue: true
    });

    return {
        open() {
            !closing && $modal.classList.add('open')
            closing = true
        },
        close() {
            closing && _close()
        },
        destroy() {
            modalClose.removeEventListener('click', _close)
            _destroy()
        },
        setContent(html) {
            modalBody.innerHTML = html
        }
    }
}