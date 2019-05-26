import React, { Component } from "react";
import FormFinder from "../components/FormFinder";
import MusicShow from "../components/MusicShow";

class Music extends Component {
  state = {
    music: "",
    artist: "",
    title: "",
    findedArtist: "",
    findedTitle: "",
    show: false
  };

  handleApiFetch = e => {
    e.preventDefault();
    const artist = this.state.artist;
    const title = this.state.title;
    this.setState({ music: "", artist: "", title: "" });
    const API = `http://api.lololyrics.com/0.5/getLyric?artist=${artist}&track=${title}`;
    fetch(API)
      .then(response => {
        if (response.status === 200) return response;
        throw Error(response.status);
      })
      .then(response => response.text())
      .then(data => {
        this.convertXML(data);
        this.setState({ findedArtist: artist, findedTitle: title });
      })
      .catch(error =>
        error == "Error: 404" ? alert("Not found") : alert("Please try later")
      );
  };
  convertXML = data => {
    const parseString = require("xml2js").parseString;
    const xml = data;
    let music;
    parseString(xml, function(err, result) {
      music = result.result;
    });
    this.setState({ music });
  };
  handleInput = e => {
    const id = e.target.id;
    if (id === "artist") this.setState({ artist: e.target.value });
    else if (id === "title") this.setState({ title: e.target.value });
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { music, artist, title, findedTitle, findedArtist } = this.state;
    return (
      <div className="container">
        <h1>Find the song</h1>
        <div className="row">
          <div className="col-sm-4">
            <FormFinder
              click={this.handleApiFetch}
              change={this.handleInput}
              artist={artist}
              title={title}
            />
          </div>
          <div className="col-sm-1 verticalLine" />
          <div className="col-sm-7">
            {music && (
              <MusicShow
                music={this.state.music}
                artist={findedArtist}
                title={findedTitle}
                click={this.handleShow}
                show={this.state.show}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
