import React from 'react';
import './App.css';
import { client } from './client';
import RecipeList from './components/RecipeList';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Recipe from './components/Recipe';

class App extends React.Component {
  state = {
    articles: [],
    loading: true,
  };


  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        this.setState({
          articles: response.items,
          loading: false,
        });
      })
      .catch(console.error);
  }

  render() {
    return this.state.loading ? (
      <img
        src={process.env.PUBLIC_URL + '/loading-pizza.gif'}
        alt="LoadingPizza"
        style={{ margin: '15% 40%' }}
      />
    ) : (
      <Router>
        <div className="App">
          <header>
            <Link to="/">
              <h1>Cookbook</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <div>
                  <RecipeList articles={this.state.articles}/>
                </div>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/:recipeName">
                <Recipe articles={this.state.articles} />
              </Route>
            </Switch>
          </main>
          <footer>
            <Link to="/about">About</Link>
            <p>© 2021 Cookbook 2.0</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
