import { BookOpenText, BoxesIcon, DumbbellIcon, Home, LineChartIcon, MessageCircle, Plus, ShoppingBag, UserCircle } from 'lucide-react';
import { CategoryObjType, DashBoardRoutesType } from './types';
export const DashBoardRoutes: DashBoardRoutesType[]= [
    {
        name: "Home",
        icon: Home,
        href:"/main"
    },
    {
        name:"Create",
        icon: Plus,
        href:"/main/create"
    },
    {
        name:"Profile",
        icon: UserCircle,
        href:"/main/profile"
    },
    
]

export const categories : CategoryObjType[] = [
    {
        icon: Plus,
        name:'PHARMACY'},
    {
        icon: MessageCircle,
        name:"CHATTING"},
    {
        icon: BookOpenText,
        name:"EDUCATION"},
    {
        icon: ShoppingBag ,
        name:"ECOMMERCE"},
    {
        icon: DumbbellIcon,
        name:"FITNESS"},
    {
        icon: LineChartIcon,
        name:"TRADING"
    },
    {
        icon: BoxesIcon,
        name:"OTHERS"
    }
    
]
export const publicRoutes= [
    "/", "/about", "/contact", "/services", "/main"
]