import { ReportSet } from './components/ReportSet';
import { Hamburger } from './components/Hamburger';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton'; 
import { useAuth0 } from '@auth0/auth0-react';
import { InvalidUserWidget } from './components/InvalidUserWidget'
import './styles/app.css';

function App() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  if (isLoading) return <div></div>
  if (isAuthenticated) {
    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    let report = JSON.parse(httpGet(`http://127.0.0.1:5000/api/${user.email}`));
    if (report.email == "None") {
      return (
        <InvalidUserWidget />
      ) 
    }
    console.log(report)
    return (
      <div className="App">
        <LogoutButton />
        <Hamburger />
        <ReportSet tutee={report.name} points={report.totalPoints} />
      </div>
    );
  }
  return <LoginButton />;
}

export default App;
