import { Button } from './Button'
import Input from './Input'

const ContactForm = () => {
  return (
    <form className=''>
      <Input label='' minLength={5} placeholder='Full Name' />
      <Input label='' minLength={5} placeholder='Message' />
      <Button label='Send Message' onClick={() => { }} primary />
    </form>
  )
}

export default ContactForm