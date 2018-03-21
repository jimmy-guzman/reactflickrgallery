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

  //clear photos state and then fetch new photos and set state
  updateResults = async query => {
    this.setState(() => ({
      query,
      photos: null
    }));
    const photos = await fetchResults(query);
    this.setState(() => ({ photos }));
  };

  //fetch photos by current params when Results component mounts
  componentDidMount() {
    this.updateResults(this.props.match.params.query);
  }

  //if there's a change in query params fetch photos
  componentWillReceiveProps = nextProps => {
    if (this.state.query !== nextProps.match.params.query) {
      this.updateResults(nextProps.match.params.query);
    }
  };

  render() {
    const { photos, query } = this.state;
    return (
      <div className="photo-container">
        {/* wait for flickr api request then if there's photos render Photos if not render NotFound */}
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
