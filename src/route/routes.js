import { useRoutes } from "react-router-dom";


// Blog Layout
import Layout from '../components/layout/Layout'

// Blog Pages
import Home from '../components/home/Home'
import News from '../components/news/News'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import NotFound from '../components/notFound/NotFound'

// Blog Detail Pages
import Project from '../components/projects/project/Project'


function withLayout(page, title){
    return <Layout title={title} page={page}>{page}</Layout>
}

export default function Router() {
    let routes = useRoutes([
    {
        path: '*',
        name: 'notFound',
        exact: true,
        element:withLayout(<NotFound/>, 'not found')
    },
    {
        path:'/',
        name: '/',
        exact: true, 
        element: withLayout(<Home/>, 'main'),
    },
    {
        path:'/news',
        name: 'news',
        exact: true, 
        element:  withLayout(<News/>, 'news'),
    },
    {
        path:'/projects',
        name: 'projects',
        children: [
            {
                index : true, 
                element: withLayout(<Projects/>, 'projects')
            },
            {
                path:":id",
                element: withLayout(<Project/>, 'project')
            }
        ],
    },
    {
        path:'/contact',
        name: 'contact',
        exact: true, 
        element:withLayout(<Contact/>, 'contact'),
    },
])
    return routes 

}