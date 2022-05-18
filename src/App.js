import { CreateFruit } from './components/createFruit';
import { Fruit } from './components/fruit';

function App() {
  return (
    <div className="App">
      <CreateFruit />
      <Fruit name="Manzana" price="100"/>
    </div>
  );
}

export default App;
