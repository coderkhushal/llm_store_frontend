import { Home, UserCircle } from 'lucide-react';
import { DashBoardRoutesType } from './types';
export const DashBoardRoutes: DashBoardRoutesType[]= [
    {
        name: "Home",
        icon: Home,
        href:"/main"
    },
    {
        name:"Profile",
        icon: UserCircle,
        href:"/main/profile"
    },
    
]