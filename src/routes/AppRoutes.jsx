import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Brochure from "../pages/Brochure"
import AnswerKey from "../pages/AnswerKey";
import RootLayout from "../layouts/RootLayout";
import SamplePaper from "../pages/SamplePaper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "brochure",
                element: <Brochure />
            },
            {
                path: "answers",
                element: <AnswerKey />
            },
            {
                path: "sample",
                element: <SamplePaper />
            }
        ],
    },
], {
    basename: '/Aarohan2026Test',
})

export default function AppRoutes() {
    return <RouterProvider router={router} />
}