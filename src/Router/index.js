// import { Navigate } from "react-router-dom";
// import Login from "../Pages/Auth/Login";
// import Otp from "../Pages/Auth/Otp";
// import Password from "../Pages/Auth/Password";
// import Dashboard from "../Pages/Dashboard";
// import { ReactComponent as DashboardActive } from "../Assets/icons/category-active.svg";
// import { ReactComponent as DashboardDeactivate } from "../Assets/icons/category-deativate.svg";
// import { ReactComponent as OrdersDeactivate } from "../Assets/icons/receipt-deactive.svg";
// import { ReactComponent as OrdersActive } from "../Assets/icons/receipt-active.svg";
// import { ReactComponent as UserDeactivate } from "../Assets/icons/user-deactive.svg";
// import { ReactComponent as UserActive } from "../Assets/icons/user-active.svg";

// import MainLayout from "../Layout/Main";
// import AuthLayout from "../Layout/Auth";
// import Profile from "../Pages/Profile";
// import Orders from "../Pages/Orders";
// import { CategoryMobile, ReceiptMobile, UserMobile } from "../Utils/icons";

// export const authRouter = [
//   {
//     path: "/login",
//     component: Login,
//     layout: AuthLayout,
//   },
//   {
//     path: "/otp",
//     component: Otp,
//     layout: AuthLayout,
//   },
//   {
//     path: "/password",
//     component: Password,
//     layout: AuthLayout,
//   },
// ];
// export const userRouter = [
//   {
//     path: "/dashboard",
//     component: Dashboard,
//     label: "داشبورد",
//     active: () => <DashboardActive />,
//     deactivate: () => <DashboardDeactivate />,
//     layout: MainLayout,
//     mobile: () => <CategoryMobile />,
//   },
//   {
//     path: "/orders",
//     component: Orders,
//     label: "فاکتورهای من",
//     deactivate: () => <OrdersDeactivate />,
//     active: () => <OrdersActive />,
//     layout: MainLayout,
//     mobile: () => <ReceiptMobile />,
//   },
//   {
//     path: "/profile",
//     component: Profile,
//     label: "حساب کاربری",
//     deactivate: () => <UserDeactivate />,
//     active: () => <UserActive />,
//     layout: MainLayout,
//     mobile: () => <UserMobile />,
//   },
// ];
