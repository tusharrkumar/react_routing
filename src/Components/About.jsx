
import {NavLink, Link, Outlet} from 'react-router-dom'

function About() {
    return (
        <>
            <h1>About</h1>
            <div>
                <Link to="blog">Blog</Link><br/>
                <Link to="info">Info</Link><br/>
                <NavLink to="sub">Sub</NavLink><br/>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default About