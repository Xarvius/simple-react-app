import React from "react";

const MusicShow = props => {
  const music = props.music;
  const text = String(music.response);
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <img src={music.cover} alt="Album" />
        </div>
        <div className="col-sm">
          <p>
            <strong>Author:</strong> {props.artist}
          </p>
          <p>
            <strong>Title:</strong> {props.title}
          </p>
          <p>
            <strong>Album:</strong> {music.album}
          </p>
          <p>
            <strong>Year:</strong> {music.year}
          </p>
          <button className="btn btn-outline-primary" onClick={props.click}>
            Show lyrics
          </button>
          <hr />
          {props.show && <p className="wraper">{text}</p>}
        </div>
      </div>
    </>
  );
};

export default MusicShow;
