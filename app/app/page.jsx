
import Sidevar from "./components/Sidevar";
import Topvar from "./components/Topvar";


export default function Home() {

  
  return (
    <div className='flex-col static'>
        <Topvar/>
        <div className='flex'>
          <Sidevar/><div className='h-screen w-screen flex justify-center items-center'>hello</div>
        </div>
    </div>
  );
}
