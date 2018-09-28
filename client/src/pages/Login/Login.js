import React, { Component } from "react";
import Login from "../../components/Login";

import SaveBtn from "../../components/SaveBtn";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    savedarticles: [],
    title: "",
    url: "",
    startdate: "",
    enddate: ""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.searchSavedArticle()
    .then(res => {this.setState({savedarticles: res.data});
                  console.log(this.state.savedarticles);
                 })
    .catch(err => console.log(err));
  };

  saveArticle = (query) => {
    console.log(query);
    API.saveArticle(query)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  removeArticle = (id) => {
    console.log(id);
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.startdate && this.state.enddate) {
      API.searchArticle(
        this.state.title,
        this.state.startdate,
        this.state.enddate
      )
        .then(res => {
          this.setState({ articles: res.data.response.docs, title: "", startdate: "", enddate: "" });
          console.log(this.state.articles);
        }
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for Articles!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.startdate}
                onChange={this.handleInputChange}
                name="startdate"
                placeholder="Start Date (required)"
              />
              <Input
                value={this.state.enddate}
                onChange={this.handleInputChange}
                name="enddate"
                placeholder="End Date (required)"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.startdate && this.state.enddate)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    {/* <Link to={"/articles/" + article._id}> */}
                    <strong>
                      {article.headline.main}
                    </strong><br />
                    <a href={article.web_url} target="_">Visit article page</a>
                    {/* </Link> */}
                    <SaveBtn onClick={() => this.saveArticle({ title: article.headline.main, url: article.web_url })} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.savedarticles.length ? (
              <List>
                {this.state.savedarticles.map(article => (
                  <ListItem key={article._id}>
                    {/* <Link to={"/articles/" + article._id}> */}
                    <strong>
                      {article.title}
                    </strong><br />
                    <a href={article.url} target="_">Visit article page</a><br />
                    Saved on: {article.date}
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.removeArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
