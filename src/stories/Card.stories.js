import Card from './Card'

export default {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs']
}

export const FullCard = {
    args: {
        imageUrl: 'catProfile.jpg',
        title: 'A Cat',
        text: 'A lazy cat with glasses',
        buttonText: 'Learn more'
    }
}

export const WithoutImage = {
    args: {
        title: 'A Cat',
        text: 'A lazy cat with glasses',
        buttonText: 'Learn more'
    }
}
// Add a story for a card without a button