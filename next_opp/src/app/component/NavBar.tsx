import Link from "next/link"




export default function NavBar () {
  return (
    <nav className=" navbar-start bg-base-100 flex-1 btn btn-ghost btn-circle" tabIndex={0} > 
    
        <Link className="btn btn-ghost normal-case text-xl" href= "/">Hjem </Link>
        <Link className="btn btn-ghost normal-case text-xl"href= "/users"> Brukere</Link>

    </nav>
  )
}



