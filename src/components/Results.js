import React from "react";
import Photos from "./Photos";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { fetchResults } from "../utils/api";

class Results extends React.Component {
  state = {
    photos: null,
    query: ""
  };
  updateResults = async query => {
    this.setState(() => ({
      query,
      photos: null
    }));
    const photos = await fetchResults(query);
    this.setState(() => ({ photos }));
  };
  componentDidMount() {
    this.updateResults(this.props.match.params.query);
  }
  componentWillReceiveProps = nextProps => {
    const currentQuery = this.props.match.params.query;
    const nextQuery = nextProps.match.params.query;

    if (currentQuery !== nextQuery) {
      this.updateResults(nextQuery);
    }
  };

  render() {
    const { photos, query } = this.state;
    return (
      <div className="photo-container">
        {!photos ? (
          <Loading />
        ) : photos.length > 0 ? (
          <div>
            <h2>"{query}" Results</h2>
            <Photos photos={photos} />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default Results;
