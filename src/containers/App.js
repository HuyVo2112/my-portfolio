import './App.css';
import Introduction from "../components/Introduction/Introduction";
import Toolbar from "../components/UI/Toolbar/Toolbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import React, { Component } from 'react';
import AuthContext from "../context/auth-context";
import Contacts from "../components/Contacts/Contacts";
import Skills from "../components/Skills/Skills";
import SideDrawer from "../components/UI/Sidedrawer/SideDrawer";

class App extends Component {

  constructor(props) {
    super(props);

    
    this.aboutMeRef = React.createRef();
    this.contactsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.skillsRef = React.createRef();
    this.introductionRef = React.createRef();

    this.state = {
      makeToolbarTransparent: true,
      activePage: "Introduction",
      showMenu: false,
    }
  }

  

  automaticActivePageHandler = (pageName) => {
    let convertedPageName = (pageName.charAt(0).toLowerCase() + pageName.slice(1))
      .replace(" ","");

    if ((document.documentElement.scrollTop - this[`${convertedPageName}Ref`].current.offsetTop) > -200) {
      this.setState({
        activePage: pageName,
      })
    }
  }

  showMenuHandler = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {

    

    window.onscroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        this.setState({
          makeToolbarTransparent: false,
        })
      } else {
        this.setState({
          makeToolbarTransparent: true,
        })
      }

      this.automaticActivePageHandler("Introduction");
      this.automaticActivePageHandler("About Me");
      this.automaticActivePageHandler("Projects");
      this.automaticActivePageHandler("Skills");
      this.automaticActivePageHandler("Contacts");
       
    }

    return (
      <div className="App">
        <AuthContext.Provider value={{activePage: this.state.activePage}}>
          <Toolbar transparent={this.state.makeToolbarTransparent} showMenuHandler={this.showMenuHandler}/>
        </AuthContext.Provider>
        <SideDrawer show={this.state.showMenu} showMenuHandler={this.showMenuHandler}/>
        
        <Introduction ref={this.introductionRef} />
        <AboutMe ref={this.aboutMeRef}/>
        <Projects ref={this.projectsRef}/>
        <Skills ref={this.skillsRef}/>
        <Contacts ref={this.contactsRef}/>
        
      </div>
    );
  }
  
}

export default App;
