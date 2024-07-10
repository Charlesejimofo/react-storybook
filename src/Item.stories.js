import { fn } from '@storybook/test'
import Item from './Item'

export default {
    title: 'Example/Item',
    component: Item,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // Add function to the list item
    args: { onOpen: fn(), onDone: fn() },
};

export const WithOpenTask = {
    args: {
        task: {
            text: 'an task from storybook',
            status: 'open'
        }
    },
};

export const WithDoneTask = {
    args: {
        task: {
            text: 'an task from storybook',
            status: 'done'
        }
    },
};

