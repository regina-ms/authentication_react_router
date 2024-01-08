import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
    return (
        <div className='container mt-5'>
            <Header />
            <div className='container mt-5 d-flex justify-content-center'>
            <Outlet />
            </div>
        </div>
    )
}
