import { Route} from 'react-router-dom'


// Blog Pages
import Main from '../components/main/Main'
import News from '../components/news/News'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'


const routes = [
    {
        path:'/',
        name: '/',
        exact: true, 
        component: Main,
        route: Route
    },
    {
        path:'/news',
        name: 'news',
        exact: true, 
        component: News,
        route: Route
    },
    {
        path:'/projects',
        name: 'projects',
        exact: true, 
        component: Projects,
        route: Route
    },
    {
        path:'/contact',
        name: 'contact',
        exact: true, 
        component: Contact,
        route: Route
    }
]

export default routes