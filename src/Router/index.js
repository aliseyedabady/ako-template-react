import { Login, Otp, Password } from "../Components/Auth";
import AuthLayout from "../Layouts/Auth";

export const authRouter = [
  {
    path: "/login",
    component: Login,
    layout: AuthLayout,
    form: [
      {
        key: "mobile",
      },
    ],
  },
  {
    path: "/otp",
    component: Otp,
    layout: AuthLayout,
  },
  {
    path: "/password",
    component: Password,
    layout: AuthLayout,
  },
];
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
