export const model = [
    {
        type: 'title',
        value: 'Test title',
        options: {
            tag: 'h2',
            styles: 'background: darkred; color: #fff'
        }
    },
    {
        type: 'text',
        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quia rem. Doloremque et facere nam numquam, quia rerum sit vel?',
        options: {
            styles: 'background: darkblue; color: yellow'
        }
    },
    {
        type: 'textColumn',
        value: ['1 text', '2 text', '3 text', '4 text'],
        options: {
            styles: 'padding: 1rem'
        }
    }
]