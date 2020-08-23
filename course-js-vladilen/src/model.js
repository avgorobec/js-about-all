import image from '../src/assets/image.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/block'
import {css} from "./utils";
const text =  'Видео уроки на сайте ....'

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content:center',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto'
    }),
    new TextColumnsBlock([
        'Приложение на чистом JS без использования библиотек',
        'Узнаешь как работают SOLID принципы',
        'JS - это просто и интересно',
    ], {
        styles: 'color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;padding: 2rem'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to right, #f2994a, #2fc94c);font-weight: bold;padding: 1rem'
    }),
]
