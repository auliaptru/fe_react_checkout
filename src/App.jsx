import Checkout from './components/Checkout';
import Product from './components/Product';

import './app.scss';

function App() {
    return (
        <div className='app'>
            <div className='app__checkout'>
                <Checkout />
            </div>
            <div className='app__product'>
                <Product />
            </div>
        </div>
    );
}

export default App;
