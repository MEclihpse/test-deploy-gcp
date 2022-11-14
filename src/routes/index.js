import {createBrowserRouter} from "react-router-dom";
import HomeSection from "../components/HomeSection";
import MovieDetails from "../components/MovieDetails";
import HomePage from "../pages/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        children: [
            {
                path: '',
                element: <HomeSection/>
            },
            {
                path: 'movies',
                element: <HomeSection/>
            },
            {
                path: 'movies/:id',
                element: <MovieDetails/>
            }
        ]
    },

])

export default router