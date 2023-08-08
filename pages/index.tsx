import Head from '../Components/Head'
import {BookmarkIcon} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <Head></Head>
      <p className='text-[#ff0] p-[10px] border'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nisi nemo ratione praesentium debitis nam consequuntur 
        tempora blanditiis quisquam molestias tenetur!
      </p>

      <BookmarkIcon className='w-[25px] text-[#00f]'/>
    </>
  )
}
