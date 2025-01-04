import { LayoutDashboard, ChartNoAxesCombined, BadgeDollarSign, ShoppingCart, Users, Warehouse, ClipboardMinus, ArrowRightLeft, Mail } from 'lucide-react';

export const menuItems = [
  {
    menu: "Menu",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
      { name: "Analytics", icon: ChartNoAxesCombined, link: "/analytics" },
      { name: "Sales", icon: BadgeDollarSign, link: "/sales"},
    ],
  },
  {
    menu: "Management",
    items: [
      { name: "Products", icon: ShoppingCart, link: "/products" },
      { name: "Customers", icon: Users, link: "/customer" },
      { name: "Warehouse", icon: Warehouse, link: "/warehouse" },
      { name: "Reports", icon: ClipboardMinus, link: "/reports" },
    ],
  },
  {
    menu: "Notifications",
    items: [
      { name: "Transactions", icon: ArrowRightLeft, link: "/transaction" },
      { name: "Messages", icon: Mail, link: "/messages" },
    ],
  },
];
