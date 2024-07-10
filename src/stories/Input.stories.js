// import { c } from 'vite/dist/node/types.d-aGj9QkWt'
import Input from './Input'

export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text', text: 'Name' },
        minlength: { control: 'number' }
    },
}

export const Default = {
    args: {
        label: '',
        placeholder: '',
        minlength: 5
    },
}
export const withLabel = {
    args: { label: 'Name', placeholder: '', minLength: 5 },
}

export const withPlaceholder = {
    args: { label: '', placeholder: 'Name', minLength: 5 },
}

export const Invalid = {
    args: {
        label: 'Name',
        placeholder: '',
        minLength: 5,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText('Name');
        await expect(input).toBeInTheDocument();
        await userEvent.type(input, 'test');
        await input.blur();
        let errorMessage = canvas.getByText('Input must be at least 5 characters long');
        await expect(errorMessage).toBeInTheDocument();
    },
}