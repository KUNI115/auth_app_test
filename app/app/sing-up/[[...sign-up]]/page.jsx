import Sidevar from '@/app/components/Sidevar'
import Topvar from '@/app/components/Topvar'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex-col static'>
        <Topvar/>
        <div className='flex'>
          <Sidevar/><div className='h-screen w-screen flex justify-center items-center'><SignUp fallbackRedirectUrl='/'/></div>
        </div>
    </div>
    )
}