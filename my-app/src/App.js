import logo from './logo.svg';
import './App.css';
import Pomodoro from './Pomodoro';

function App() {
  return (

    <div class="flex justify-center center-screen">
      <div class="block p-6 rounded-lg shadow-lg bg-black max-w-sm">
        <div className="App">
          <Pomodoro />
        </div>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#StopWatch</span>
      </div>
    </div>

  );
}

export default App;
