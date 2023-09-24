
import './App.css';
import UserText from './userText';
import UserImage from './userImage';


const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];

function App() {
  return (
    <div className="App">
       <div className="div">

        <h1>Users</h1>
   
      {usersArray.map((i)=>(
        
        <div className='info' key={i.id}>
          <UserText name={i.name} age={i.age}/>
          <UserImage profileImage={i.profileImage}/>
        </div>
        
      ))}

</div>
    </div>
  );
}

export default App;
