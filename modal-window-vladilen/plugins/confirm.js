$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '600px',
            closable: true,
            content: options.content,
            onClose() {
              modal.destroy()  
            },
            footerButtons: [
                {
                    text: 'Отмена', type: 'secondary', handler() {
                        modal.close()
                        reject()
                    }
                },
                {
                    text: 'Удалить', type: 'danger', handler() {
                        modal.close()
                        resolve()
                    }
                }
            ]
        })
        
        setTimeout(() => modal.open(), 300)
    })
}