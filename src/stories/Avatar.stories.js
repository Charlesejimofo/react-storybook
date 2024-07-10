
import Avatar from './Avatar'

export default {
    title: 'Component/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'large'] },
        image: { control: 'text' },
        alt: { control: 'text' },
        name: { control: 'text' },
    },
}

export const SmallWithName = {
    args: {
        size: 'small',
        image: 'avatar1.png',
        alt: 'small',
        name: 'blurred man',
    }
}

export const LargeNoName = {
    args: {
        size: 'large',
        image: 'avatar2.png',
        alt: 'large avatar',
    }
}


