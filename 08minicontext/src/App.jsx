import './App.css';
import Login from '../src/Components/Login';
import Profile from '../src/Components/Profile';
import UserContextProvider from '../src/context/UserContextProvider'; // Check for correct file name

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
