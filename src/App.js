import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const heroNames = [
  //   { name: 'Hero Alam', age: 40 },
  //   { name: 'Peter Perker', age: 27 },
  //   { name: 'Shakib Khan', age: 41 },
  //   { name: 'Tom Cruise', age: 52 }
  // ];

  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setUsers(data))
  // }, [])
  // const url = 'https://randomuser.me/api/?results=5000'


  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5000')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  console.log(users);

  return (
    <div className="App">

      {
        users.map(user => <UserInfo name={user.name.first + ' ' +user.name.last} gender="user.gender" cell="user.cell" key="user.id.name"></UserInfo>)
      }




      {/* {
        users.map(user => <UserInfo name={user.name} key={user.id} email={user.email}></UserInfo>)
      } */}


      {/* <MovieCount></MovieCount> */}

      {/* {
        heroNames.map(hero => <Hero name={hero.name} age={hero.age}></Hero>)
      } */}

      {/* {
        heroNames.map(hero => <Hero name={hero}></Hero>)
      } */}

      {/* <Hero name={heroNames[0]} age="30"></Hero>
      <Hero name={heroNames[1]} age="27"></Hero>
      <Hero name={heroNames[2]} age="52"></Hero>
      <Hero name={heroNames[3]} age="40"></Hero> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function UserInfo(props) {
  const userStyle = { backgroundColor: 'grey', padding: '15px', margin: '20px', color: 'white' };
  return (
    <div style={userStyle}>
      <h1> {props.name}</h1>
      <p>Sex: {props.gender}</p>
      <p>cell: {props.cell}</p>
    </div>
  )
}




// function UserInfo(props) {
//   const userStyle = { backgroundColor: 'grey', padding: '15px', margin: '20px', color: 'white' };
//   return (
//     <div style={userStyle}>
//       <h1>{props.name}</h1>
//       <p>{props.email}</p>
//     </div>
//   )
// }

function MovieCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Number of movies: {count} </h3>
      <button onClick={() => setCount(count + 1)}>Add Movies</button>

      <ActedMovies movies={count}></ActedMovies>
    </div>

  )
}

function ActedMovies(props) {
  return (
    <h3>Acted Movies: {props.movies}</h3>
  )
}


function Hero(props) {
  const heroStyle = { border: '2px solid red', margin: '20px' };
  return (
    <div style={heroStyle}>
      <h1>{props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  )
}

export default App;
