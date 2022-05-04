import './App.css';
import './normalize.css';
import { Navigation, Titles, Billboard, Footer } from './components';

function App() {
    return (
        <div className="App">
            <Billboard />
            <Navigation />
            <Titles />
            <Footer />
        </div>
    );
}

export default App;
