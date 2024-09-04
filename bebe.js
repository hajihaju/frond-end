
import { Link, } from 'react-router-dom'

const bebe = () => {
    const auth = localStorage.getItem('user');
    return (
        <div>
            <ul className='bebe-ul'>
                <li><Link to = "/">home page</Link></li>
                <li><Link to = "/Add">Add items</Link></li>
                <li><Link to = "/Listing">Listing items</Link></li>
                <li><Link to = "/profile">profile page</Link></li>
                
                {
                    auth  ?<li><Link to = "/logout">logout to page</Link></li>
                    :<>
                    <li><Link to = "/SignUp">SignUp</Link></li>
                    <li><Link to = "/Login">Login page</Link></li>
                    </>
                }
            </ul>
        </div>
    )

}
export default bebe;