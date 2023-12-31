import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy loading pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </Router>
        </main>
    );
}

export default App;









// import React from 'react'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import { Home, About, Projects, Contact } from './pages'
// import Navbar from './components/Navbar'


// const App = () => {
//     return (
//         <main className='bg-slate-300/20'>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/projects" element={<Projects />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//             </Router>
//         </main>
//     )
// }

// export default App