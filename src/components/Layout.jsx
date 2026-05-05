import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Cinema Guest</Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;