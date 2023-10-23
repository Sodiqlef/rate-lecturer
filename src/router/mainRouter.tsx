import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import ProfSignUp from "../pages/prof/profSignUp"
import LayOut from "../components/common/LayOut"
import ProfMainSign from "../pages/prof/ProfMainSign"
import RateAProf from "../pages/RateAProf"
import FrontPage from "../pages/frontPage"
import ProfDetailsPage from "../pages/prof/ProfDetailsPage"

export const mainRouter = createBrowserRouter ([
    {
        path : "/",
        element : <FrontPage />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    {
        path : "/prof",
        element : <ProfSignUp />
    },
    {
        path : "/pp",
        element : <ProfDetailsPage />
    },
    {
        path : "/prof/signup",
        element : <LayOut />,
        children : [
            {
                index : true,
                element : <ProfMainSign />
            }

        ]
    },
    {
        path : "/rate-a-professor",
        element : <LayOut  />,
        children : [
            {
                index : true,
                element : <RateAProf />
            }

        ]
    },
])