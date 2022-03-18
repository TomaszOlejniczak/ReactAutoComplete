import './App.css';
import Autocomplete from './Autocomplete'; // Import Autocomplete component
import names from './names.js'; // Import data file

function App() {
  return (
    <div className="App">
      <Autocomplete items={names}/> {/*Instance of our Autocomplete component with passing data as props*/}
    </div>
  );
}

export default App;