import { SignedIn ,  UserProfile } from '@clerk/nextjs'
import Topvar from '../../components/Topvar';
import Sidevar from '../../components/Sidevar';

export default function Profile() {
  return (
    <div className='flex-col static'>
        <Topvar></Topvar>
        <div className='flex'>
          <Sidevar></Sidevar>
          <div className='h-screen w-screen flex justify-center items-center'>
            <SignedIn><UserProfile /></SignedIn>
          </div>
        </div>
    </div>
  );
}