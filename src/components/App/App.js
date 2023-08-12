import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import SavedNews from './components/SavedNews';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to My App</h1>
                    {/* You might want to include navigation links here */}
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/saved-news" component={SavedNews} />
                    </Switch>
                    {/* You can include other components here */}
                </main>
                <footer className="App-footer">
                    <p>Footer content here</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
S
