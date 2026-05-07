import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{ background: 'linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)', minHeight: '100vh' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top mb-4">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">🎬 Cinema Guest</Link>
                </div>
            </nav>
            <main className="pb-5">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;