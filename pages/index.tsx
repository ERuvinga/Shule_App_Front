import Head from '../Components/Head'
import {BookmarkIcon} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <Head/>
      <p className='text-[#00f] p-[10px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nisi nemo ratione praesentium debitis nam consequuntur 
        tempora blanditiis quisquam molestias tenetur!
      </p>

      <BookmarkIcon className='w-[20px] text-[#00f]'/>
    </>
  )
}
