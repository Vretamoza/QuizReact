import CreateFruit from '../components/CreateFruit';
import FruitList from '../components/FruitList';

export default function InitialPage(){
  return(
    <div className="flex">
      <CreateFruit />
      <FruitList />
    </div>
  )

}
