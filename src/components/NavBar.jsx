
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {

    const context = useContext(Context);

    return (
        <nav className='bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-m font-bold fondo'>
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-xl'>
                    <NavLink to='/' onClick={() => context.setSearchByCategory()}>Gil Shopi</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/laptops'
                        onClick={() => context.setSearchByCategory('laptops')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Laptops
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/tablets'
                        onClick={() => context.setSearchByCategory('tablets')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Tablets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cameras'
                        onClick={() => context.setSearchByCategory('cameras')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cameras
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/headphones'
                        onClick={() => context.setSearchByCategory('headphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Headphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cellphones'
                        onClick={() => context.setSearchByCategory('cellphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cellphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/accessories'
                        onClick={() => context.setSearchByCategory('accessories')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Accessories
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/users'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Fake User
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    gel-esc
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My orders</NavLink>
                </li>
                <li className='flex'>
                    <NavLink to='/cart-shopping' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        <ShoppingCartIcon className='h-5 w-5 text-black'></ShoppingCartIcon>
                    </NavLink>
                    {
                        context.productsCount === 0 ?
                            <div className='flex justify-center items-center text-xs font-semibold'>{context.productsCount}</div>
                            :
                            <div className='flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold'>{context.productsCount}</div>
                    }
                </li>
            </ul>
        </nav>
    )
};