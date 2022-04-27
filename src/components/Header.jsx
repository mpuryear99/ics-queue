import React from "react";
import HeaderNavMenu from "./HeaderNavMenu";
import DBService from "data/DBService";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select from "@mui/material/Select";
import UserContext from "context/UserContext";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";


const UserSelect = ({style}) => {
  const {appUser, setAppUser} = React.useContext(UserContext);
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      let res = await DBService.getUsers();
      if (isSubscribed) {
        setUserList(res ?? []);
      }
    })();
    return () => isSubscribed = false;
  }, []);

  const handleChange = (event) => {
    let newUser = event.target.value;
    if (newUser === "")
      newUser = null;
    setAppUser(newUser);
  }

  return (
    <FormControl sx={style} size="small">
      <InputLabel id="UserContext-select">User</InputLabel>
      <Select
        labelId="UserContext-select"
        label="User"
        value={appUser ?? ""}
        onChange={handleChange}
      >
        <MenuItem value={null} key=""><em>None</em></MenuItem>
        {userList.map(u => (
          <MenuItem value={u} key={u._id}>
            {`(${u.admin ? "A" : "U"}) ${u.netid}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}


const Header = () => {
  const topMarginMQ = useMediaQuery('(min-width:576px)');
  const menuBtnStyle = {
    float: 'right',
    marginRight: '1rem',
    marginTop: (topMarginMQ ? "1.3rem" : "1rem")
  }
  const userSelectStyle = {
    ...menuBtnStyle,
    autoWidth: true,
    minWidth: "130px"
  }

  return(
    <div id="utk-header-segment">

      {/* Lets ignore this for now...
      <a className="sr-only sr-only-focusable" href="#content" title="Skip to content">Skip to content</a>
      <a className="sr-only sr-only-focusable" href="#mainnav" title="Skip to  main navigation">Skip to main navigation</a>
      <a className="sr-only sr-only-focusable" href="https://oed.utk.edu/ada/campus-accessibility/"
        title="Report an accessibility issue">Report an accessibility issue</a> */}
  
      <header id="main-navigation" role="banner">
        <div className="container-columns">
          <h1 className="ut-title">
            <a className="killer-logo" href="http://www.utk.edu">The University of Tennessee, Knoxville</a>
          </h1>
          <HeaderNavMenu btnStyle={menuBtnStyle}/>
          <UserSelect style={userSelectStyle}/>
          <h2 className="site-title parent-show">
            <a href="http://innovate.utk.edu" title="Innovation & Collaboration Studio" rel="home">Innovation &amp; Collaboration Studio</a>
            <br/> {/* br origionally first element of TCE link */}
            <a href="https://tickle.utk.edu"><small>Tickle College of Engineering</small></a>
          </h2>
        </div>
      </header>
    </div>
  )
};

export default Header;
