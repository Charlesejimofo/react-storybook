import { fn } from '@storybook/test';

import ProductCard from './ProductCard';

export default {
    title: 'Components/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {
        imageUrl: 'product.jpg',
        price: '100 Euro',
    },
}

export const Default = {
    args: {
        imageUrl: 'product.jpg',
        price: '100 Euro',
    },
}

export const WithButton = {
    args: {
        title: 'Shoes',
        text: 'Green high heels',
        button: true,
        addToCart: fn(),
    },
}

export const WithoutButton = {
    args: {
        title: 'Shoes',
        text: 'Green high heels',
        button: false,
    },
}

export const OnSale = {
    args: {
        title: 'Shoes',
        text: 'Green high heels',
        button: true,
        addToCart: fn(),
        sale: true,
    },
}