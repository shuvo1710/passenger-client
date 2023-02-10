import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart/Cart";

import Area from "../Components/CountryArea/Area";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Blog from "../Components/NavItems/Blog/Blog";
import BlogMasonry from "../Components/NavItems/Blog/BlogMasonry";
import PostTypes from "../Components/NavItems/Blog/PostTypes";
import Destination from "../Components/NavItems/Destination/Destination";
import DestinationList from "../Components/NavItems/Destination/DestinationList";
import DestinationSlider from "../Components/NavItems/Destination/DestinationSlider";
import Accrodions from "../Components/NavItems/Elements/Accrodions";
import Banner from "../Components/NavItems/Elements/Banner";
import Blockquote from "../Components/NavItems/Elements/Blockquote";
import BlogList from "../Components/NavItems/Elements/BlogList";
import Buttons from "../Components/NavItems/Elements/Buttons";
import Classic from "../Components/NavItems/Elements/Classic";
import Clients from "../Components/NavItems/Elements/Clients";
import Columns from "../Components/NavItems/Elements/Columns";
import ContactForm from "../Components/NavItems/Elements/ContactForm";
import Countdown from "../Components/NavItems/Elements/Countdown";
import DestinationWithTours from "../Components/NavItems/Elements/DestinationWithTours";
import Dropcaps from "../Components/NavItems/Elements/Dropcaps";
import Elements from "../Components/NavItems/Elements/Elements";
import FEATURED from "../Components/NavItems/Elements/Featured";
import FullScreenSections from "../Components/NavItems/Elements/FullScreenSections";
import GoogleMaps from "../Components/NavItems/Elements/GoogleMaps";
import PerfectHolidayDetails from "../Components/PerfectHoliday/PerfectHolidayDetails";
import PrivateRoute from "../Components/PrivateRoutes/PrivateRoute";
import Register from "../Components/Register";
import Main from "../Layout/Main";

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/area/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/allCountry/${params.id}`),
            element:<PrivateRoute><Area></Area></PrivateRoute>
        },
        {
            path:'/perfectHoliday/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/perfectHoliday/${params.id}`),
            element:<PrivateRoute><PerfectHolidayDetails></PerfectHolidayDetails></PrivateRoute>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/cart',
            element:<PrivateRoute><Cart></Cart></PrivateRoute>
        },

        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/blogMasonry',
            element:<BlogMasonry/>
        },
        {
            path:'/postType',
            element:<PostTypes/>
        },
        {
            path:'/destination',
            element:<Destination/>
        },
        {
            path:'/destinationList',
            element:<DestinationList/>
        },
        {
            path:'/destinationSlider',
            element:<DestinationSlider/>
        },
        {
            path:'/accrodions',
            element:<Accrodions/>
        },
        {
            path:'/banner',
            element:<Banner/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blogList',
            element:<BlogList/>
        },
        {
            path:'/buttons',
            element:<Buttons/>
        },
        {
            path:'/classic',
            element:<Classic/>
        },
        {
            path:'/client',
            element:<Clients/>
        },
        {
            path:'/columns',
            element:<Columns/>
        },
        {
            path:'/contactForm',
            element:<ContactForm/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/countdown',
            element:<Countdown/>
        },
        {
            path:'/destinationWithTours',
            element:<DestinationWithTours/>
        },
        {
            path:'/dropcaps',
            element:<Dropcaps/>
        },
        {
            path:'/elements',
            element:<Elements/>
        },
        {
            path:'/featured',
            element:<FEATURED/>
        },
        {
            path:'/fullscreenSections',
            element:<FullScreenSections/>
        },
        {
            path:'/googleMaps',
            element:<GoogleMaps/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },
        {
            path:'/blockquote',
            element:<Blockquote/>
        },

      
       ] 
    }
])
