import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import avatar from '../assets/images/avatart.png'

import './layout.css'

type MenuItem = {
    name: string,
    link: string
}

function Layout() {
    const location = useLocation()
    const navigate = useNavigate()
    const menuItems : MenuItem[] = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Expenses',
            link: '/expenses',
        },
        {
            name: 'Trips',
            link: '/trips',
        },
        {
            name: 'Approvals',
            link: '/approvals',
        },
        {
            name: 'Support',
            link: '/support',
        }
    ]

    const handleMenuClick = (path: string) : void => {
        navigate(path)
    }

    return (
        <div className='flex h-screen py-[35px] px-[30px] bg-[#1b1b1b]'>
            <div className='flex justify-between flex-col w-[360px]'>
                <div>
                    <img className='rounded-full m-auto mb-4' src={avatar} alt="avatar" width='100px' height='100px'/>
                    <p className='font-semibold text-center text-gray-400'>Illia Prokopchuk</p>
                </div>

                <div className='flex justify-between flex-col mb-1 mr-5'>
                    {
                        menuItems.map((item: MenuItem) => {
                            return (
                                <p
                                    key={item.name}
                                    className={clsx(
                                        'flex cursor-pointer mb-[15px] text-[26px] px-[15px] py-[5px] rounded-[10px]',
                                        'hover:text-[#22b59b]',
                                        item.link !== location.pathname && 'text-gray-400',
                                        item.link === location.pathname && 'text-[#22b59b] bg-[#28282a]'
                                    )}
                                    onClick={() => handleMenuClick(item.link)}
                                >
                                    {item.name}
                                </p>
                            )
                        })
                    }
                </div>

                <div className='text-center font-bold text-5xl mb-[20px] foot'>
                    <p>Chinazes</p>
                </div>
            </div>
            <main className='w-full h-full bg-[#0b0b0b]'>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
