var React = require('react');
var Album = require('./Album');
var _ = require('lodash');

var TopAlbumsList = React.createClass({
  render: function() {
    var album_components = this.props.albums.map(function(album) {
      return <Album key={ album.id } album_id={ album.id } title={ album.title } artist={ album.artist } cover={ album.cover } preview={ album.preview } />;
    });
    return (
      <ul className="album_list">
        {album_components}
      </ul>
    );
  }
});

var albums = _.shuffle(data);

React.render(
  <TopAlbumsList albums={ albums } />,
  document.getElementById('content')
);
