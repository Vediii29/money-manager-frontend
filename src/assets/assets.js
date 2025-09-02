import { LayoutDashboard, List, Wallet, Coins, FunnelPlus } from "lucide-react";
import logo from './logo.png';
import login_bg from './login-bg.png';  

// Image assets
export const assets = {
    logo,
    login_bg,
};

// Sidebar navigation data
export const SIDE_BAR_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        id: "02",
        label: "Category",
        icon: List,
        path: "/category",
    },
    {
        id: "03",
        label: "Income",
        icon: Wallet,
        path: "/income",
    },
    {
        id: "04",
        label: "Expense",
        icon: Coins,
        path: "/expense",
    },
    {
        id: "05",
        label: "Filters",
        icon: FunnelPlus,
        path: "/filter",
    },
];
