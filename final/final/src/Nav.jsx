import './Nav.css';

function Nav( { setPage }) {
    return (
        <div>
            <nav>
                <ul>
                    <li><a onClick={ (e) => setPage('Home')} href="#Home">Home</a></li>
                    <li><a onClick={ (e) => setPage('Maintab')} href="#Maintab">Rating</a></li>
                    <li><a onClick={ (e) => setPage('About')} href="#About">About</a></li>
                    <li><a onClick={ (e) => setPage('Privacy')} href="#Privacy">Privacy</a></li>
                    <li><a onClick={ (e) => setPage('Support')} href="#Support">Support</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;