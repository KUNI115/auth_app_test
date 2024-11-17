import Link from "next/link";
export default function Sidevar(){
    return(
        <div className="w-40 h-screen text-center flex-col bg-sky-500">
            <h3>Sidevar</h3>
            <div className="py-5 flex-col " >
              
              <ul className="">
                <li>home</li>
                <li><Link href="/sign-in">Login</Link></li>
                <li><Link href="/profile">Profile</Link></li>
              </ul>
            
            
             
            </div>
        </div>
    )
}