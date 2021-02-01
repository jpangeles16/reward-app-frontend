import { ReportSet } from './components/ReportSet';
import './styles/app.css';

const reports = [
  {
    'date': '08/07',
    'points': 5
  },
  {
    'date': '08/08',
    'points': 6
  },
  {
    'date': '08/09',
    'points': 7
  }
];

function App() {

  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  console.log(httpGet("http://127.0.0.1:5000/api/John"));
  console.log('test');

  return (
    <div className="App">
      <ReportSet tutee="John" reports={reports} />
    </div>
  );
}

export default App;
