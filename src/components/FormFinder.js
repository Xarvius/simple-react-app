import React from "react";

const FormFinder = props => {
  const { change, click, title, artist } = props;
  return (
    <>
      <form onSubmit={click}>
        <div className="form-group">
          <label htmlFor="artist">Artist: </label>
          Example: Billie Eilish
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            onChange={change}
            value={artist}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          Example: COPYCAT
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={change}
            value={title}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Find
        </button>
      </form>
    </>
  );
};

export default FormFinder;
