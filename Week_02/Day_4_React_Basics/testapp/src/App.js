import './App.css';
import PushSomething from './components/pusher';

function App() {
    const args = [
        {
            title: 'sharedProp',
        },
    ];
    return (
        <>
          <h1>testapp</h1>
          <PushSomething title={args[0].title} />

        </>
    );
}

export default App;
