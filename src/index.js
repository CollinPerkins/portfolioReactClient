import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import AboutMe from './components/mainLinkPages/aboutme';
import ContactMe from './components/mainLinkPages/contactme';
import Experience from './components/mainLinkPages/experience';
import Portfolio from './components/mainLinkPages/portfolio';
import Blog from './components/mainLinkPages/blog';
import BarChart from './components/projects/barChart/barChart';
import BookTradingClubApp from './components/projects/bookTradingClubApp/bookTradingClubApp';
import Calculator from './components/projects/calculator/calculator';
import CamperLeaderboard from './components/projects/camperLeaderboard/camperLeaderboard';
import DungeonGame from './components/projects/dungeonGame/dungeonGame';
import FileMetadataApi from './components/projects/fileMetadataApi/fileMetadataApi';
import ForceGraph from './components/projects/forceGraph/forceGraph';
import GameOfLife from './components/projects/gameOfLife/gameOfLife';
import HeatMap from './components/projects/heatMap/heatMap';
import ImageSearchApi from './components/projects/imageSearchApi/imageSearchApi';
import LocalWeather from './components/projects/localWeather/localWeather';
import MapGlobeData from './components/projects/mapGlobeData/mapGlobeData';
import MarkdownPreviewer from './components/projects/markdownPreviewer/markdownPreviewer';
import NightLifeApp from './components/projects/nightLifeApp/nightLifeApp';
import PinterestApp from './components/projects/pinterestApp/pinterestApp';
import PomodoroClock from './components/projects/pomodoroClock/pomodoroClock';
import RandomQuoteMachine from './components/projects/randomQuoteMachine/randomQuoteMachine';
import RecipeBox from './components/projects/recipeBox/recipeBox';
import RequestHeaderApi from './components/projects/requestHeaderApi/requestHeaderApi';
import ScatterPlotGraph from './components/projects/scatterPlotGraph/scatterPlotGraph';
import SimonGame from './components/projects/simonGame/simonGame';
import StockMarketApp from './components/projects/stockMarketApp/stockMarketApp';
import TicTacToeGame from './components/projects/ticTacToeGame/ticTacToeGame';
import TimestampApi from './components/projects/timestampApi/timestampApi';
import Tribute from './components/projects/tribute/tribute';
import TwitchApp from './components/projects/twitchApp/twitchApp';
import UrlShortener from './components/projects/urlShortener/urlShortener';
import VotingApp from './components/projects/votingApp/votingApp';
import WikiViewer from './components/projects/wikiViewer/wikiViewer';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AboutMe} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="contactme" component={ContactMe} />
        <Route path="experience" component={Experience} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="blog" component={Blog} />
        <Route path="barChart" component={BarChart} />
        <Route path="bookTradingClubApp" component={BookTradingClubApp} />
        <Route path="calculator" component={Calculator} />
        <Route path="camperLeaderboard" component={CamperLeaderboard} />
        <Route path="dungeonGame" component={DungeonGame} />
        <Route path="fileMetadataApi" component={FileMetadataApi} />
        <Route path="forceGraph" component={ForceGraph} />
        <Route path="gameOfLife" component={GameOfLife} />
        <Route path="heatMap" component={HeatMap} />
        <Route path="imageSearchApi" component={ImageSearchApi} />
        <Route path="localWeather" component={LocalWeather} />
        <Route path="mapGlobeData" component={MapGlobeData} />
        <Route path="markdownPreviewer" component={MarkdownPreviewer} />
        <Route path="nightLifeApp" component={RequireAuth(NightLifeApp)} />
        <Route path="pinterestApp" component={RequireAuth(PinterestApp)} />
        <Route path="pomodoroClock" component={PomodoroClock} />
        <Route path="randomQuoteMachine" component={RandomQuoteMachine} />
        <Route path="recipeBox" component={RecipeBox} />
        <Route path="requestHeaderApi" component={RequestHeaderApi} />
        <Route path="scatterPlotGraph" component={ScatterPlotGraph} />
        <Route path="simonGame" component={SimonGame} />
        <Route path="stockMarketApp" component={StockMarketApp} />
        <Route path="ticTacToeGame" component={TicTacToeGame} />
        <Route path="timestampApi" component={TimestampApi} />
        <Route path="tribute" component={Tribute} />
        <Route path="twitchApp" component={TwitchApp} />
        <Route path="urlShortener" component={UrlShortener} />
        <Route path="votingApp" component={RequireAuth(VotingApp)} />
        <Route path="wikiViewer" component={WikiViewer} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.myApp'));
