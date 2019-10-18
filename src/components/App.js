import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles/index";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import {
  AppBar,
  Typography,
  Toolbar,
  Card,
  CardContent,
  Button
} from "@material-ui/core";
import { DataTable } from "./DataTable/DataTable";
import FirebaseService from "../services/FirebaseService";
import { Route } from "react-router-dom";
import { urls, privateUrls } from "../utils/urlUtils";
import Welcome from "../components/Welcome/Welcome";
import Add from "../components/Add/Add";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList("livros", dataReceived =>
      this.setState({ data: dataReceived })
    );
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                Meu logotipo
              </Typography>
            </Toolbar>
          </AppBar>
          <Card style={{ margin: "50px" }}>
            <CardContent>
              <Route
                exact
                path={urls.home.path}
                render={props => <Welcome {...props} />}
              />
              <Route
                exact
                path={urls.data.path}
                render={props => (
                  <DataTable {...props} data={this.state.data} />
                )}
              />
              <Route
                exact
                path={urls.add.path}
                render={props => <Add {...props} />}
              />
              <Route
                exact
                path={privateUrls.edit.path}
                render={props => <Add {...props} />}
              />
            </CardContent>
          </Card>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
