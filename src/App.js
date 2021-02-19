import { ReportSet } from './components/ReportSet';
import './styles/app.css';

function App() {

  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }
  let report = JSON.parse(httpGet("http://127.0.0.1:5000/api/John"));
  console.log(report)
  return (
    <div className="App">
      <ReportSet tutee={report.name} points={60} />
    </div>
  );
}

export default App;
