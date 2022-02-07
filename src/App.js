import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import React,{Component}  from 'react';
import { SearchBox } from './components/search-box/search-box.component'


class App extends Component
{

  constructor()
  {
    super();
    // this.state = {
    //   monsters: [],
    //   searchField:'',
    //   title: ''
    // };

    this.state = {
        monsters: [],
        searchField:''
      };

    // how to bind class methods to this context
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));
  }

  // normal class method syntax manual binding required for this context 
  // handleChange(e)
  // {
  //   this.setState({ searchField: e.target.value });
  // }

  // Arrow function does not need to be manually binded 
  handleChange = e => {
    // this.setState({
    //   searchField: e.target.value,
    //   title: e.target.value
    // })

    this.setState({
        searchField: e.target.value,
       })

  }

  render(){
    // const { monsters,searchField,title } = this.state;
    const { monsters,searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
          <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder='search Monsters'
           handleChange={this.handleChange}/>
          <CardList monsters={filteredMonster}/>
          </div>
        );
  }

}

export default App;