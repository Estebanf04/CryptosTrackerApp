import {FaLinkedin} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 p-2 flex justify-center gap-4 items-center">
      <p>&copy; 2024 - Cryptos Tracker</p>
      <p>|</p>
      <a href="https://www.linkedin.com/in/estebanfandos/" target='_blank' className="flex gap-2 items-center">by <FaLinkedin className='text-gray-400 text-lg items-center'/></a>
    </footer>
  )
}
