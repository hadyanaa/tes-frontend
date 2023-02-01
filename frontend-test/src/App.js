import './App.css';
import { UserProvider } from './Auth/UserContext';
import Main from './Layout/Main';

function App() {
  return (
    <UserProvider>
      <Main/>
    </UserProvider>
  );
}

export default App;
