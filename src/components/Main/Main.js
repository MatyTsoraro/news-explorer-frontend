import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="Main">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/saved-news">Saved articles</Link>
            </nav>
            <section>
                <h2>Main Page Content</h2>
                {/* Here you can add your search bar, news cards, and other related content */}
            </section>
        </div>
    );
}

export default Main;
