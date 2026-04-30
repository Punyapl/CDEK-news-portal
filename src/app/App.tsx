import './styles/index.scss'
import { Suspense, } from 'react'
import { RouterProvider, } from 'react-router-dom'
import { router, } from '@/app/providers/router/config/routeConfig'
import { PageLoader, } from '@/widgets/PageLoader'

const App = () => {
    return ( 
        <div className="app">
            <Suspense fallback={<PageLoader />}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    )
}
export default App
