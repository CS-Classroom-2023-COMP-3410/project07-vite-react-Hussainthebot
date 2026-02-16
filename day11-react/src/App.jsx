// // import { useState } from 'react';

// // function App() {
// //     return (
// //         <div>
// //             <h1>Hello from React + Vite!</h1>
// //             <WelcomeMessage name="Hussain" />
// //             <hr />
// //             <Counter />
// //         </div>
// //     );
// // }

// // function WelcomeMessage({ name }) {
// //     return <h2>Welcome, {name}!</h2>;
// // }

// // function Counter() {
// //     const [count, setCount] = useState(0);

// //     return (
// //         <div>
// //             <p>Count: {count}</p>
// //             <button onClick={() => setCount(count + 1)}>
// //                 Increment
// //             </button>
// //         </div>
// //     );
// // }

// // export default App;



// import { useState } from 'react';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
// import ProfilePage from './pages/ProfilePage';
// function App() {

//     const [cartItems, setCartItems] = useState([]);
//     const addToCart = (product) => {
//         setCartItems(prev => [...prev, product]);
//     }

//     const removeFromCart = (index) => {
//         setCartItems(prev => prev.filter((_, i) => i !== index));
//     };

//     const [currentPage, setCurrentPage] = useState('home');// Simple navigation state management
//     const handleNavigate = (pageId) => {
//         setCurrentPage(pageId);// This could be expanded to handle page transition animations
//         // or to update browser history for back/forward navigation
//     };// Render the appropriate page based on state
//     const renderPage = () => {
//         switch (currentPage) {
//             case 'products':
//                 return <ProductsPage />;
//             case 'profile':
//                 return <ProfilePage />;
//             case 'home':
//             default:
//                 return <HomePage onNavigate={handleNavigate} />;
//         }
//     };
//     return (
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
//             <Header
//                 currentPage={currentPage}
//                 onNavigate={handleNavigate}
//             />
//             <main>
//                 {renderPage()}
//             </main>
//             <footer style={{
//                 marginTop: '50px',
//                 padding: '20px',
//                 borderTop: '1px solid #eee',
//                 textAlign: 'center',
//                 color: '#666'
//             }}>
//                 <p>React Multi-Page Application</p>
//             </footer>
//         </div>
//     );
// }
// export default App;






// import { useState } from 'react';

// function App() {
//     return (
//         <div>
//             <h1>Hello from React + Vite!</h1>
//             <WelcomeMessage name="Hussain" />
//             <hr />
//             <Counter />
//         </div>
//     );
// }

// function WelcomeMessage({ name }) {
//     return <h2>Welcome, {name}!</h2>;
// }

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Increment
//             </button>
//         </div>
//     );
// }

// export default App;



import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import ShoppingCart from './components/ShoppingCart';

function App() {

    const [cartItems, setCartItems] = useState([]);
    const [currentPage, setCurrentPage] = useState('home');

    const addToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    const removeFromCart = (index) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    // Render the appropriate page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                return <ProductsPage addToCart={addToCart} />;

            case 'profile':
                return <ProfilePage />;

            case 'cart':
                return (
                    <CartPage
                        cartItems={cartItems}
                        onRemove={removeFromCart}
                    />
                );

            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                cartCount={cartItems.length}
            />

            <main>
                {renderPage()}

                {cartItems.length > 0 && currentPage !== 'cart' && (
                    <ShoppingCart
                        cartItems={cartItems}
                        onRemove={removeFromCart}
                    />
                )}

            </main>

            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}

export default App;
