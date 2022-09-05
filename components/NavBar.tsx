import { useId } from "react";
import ActiveLink from "./ActiveLink"
import styles from  './NavBar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const NavBar = () => {
    
    const id = useId();
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({text, href}, index) => (
                    
                    <ActiveLink key={`${id}-${index}`} text={text} href={href}/>
                ))
            }
            {/* <ActiveLink text='About' href='/about'/>
            <ActiveLink text='Contact' href='/contact'/> */}
        </nav>
    )
}

export default NavBar