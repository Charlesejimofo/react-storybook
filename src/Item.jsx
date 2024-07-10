// import { linkTo } from "@storybook/addon-links/*"
import './Item.css'
import PropTypes from 'prop-types'
import { Check, ChevronsUp } from './assets/Icons'

const Item = ({ task, onOpen, onDone }) => {
    return (<li
        // className={task.status === 'done' ? 'done' : 'open'}>
        // we can just make the code shorter like below
        className={task.status}>
        {task.text}
        {task.status === 'done' ?
            <span className='icon' onClick={onOpen}>
                <ChevronsUp />
            </span> :
            <span className='icon' onClick={onDone}> <Check /></span>
        }

    </li>)
}

export default Item

// add proptypes

Item.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }),
    onOpen: PropTypes.func,
    onDone: PropTypes.func,
}