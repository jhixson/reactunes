var React = require('react');

var Album = React.createClass({
  getInitialState: function() {
    return { playing: false };
  },
  imagePath: function() {
    return 'images/'+this.props.cover;
  },
  playPause: function(e) {
    e.preventDefault();
    //console.log(this.props.preview)
    var clip = document.getElementById('music_clip');
    clip.pause();
    if(!this.state.playing) {
      clip.src = this.props.preview;
      clip.volume = .5;
      clip.play();
      this.setState({ playing: true });
    }
    else {
      this.setState({ playing: false });
    }
  },
  render: function() {
    var icon = this.state.playing ? 'icon-pause': 'icon-play';
    return (
      <li className="album">
        <img src={ this.imagePath() } alt={ this.props.title } onClick={ this.playPause } />
        <a href="#" className="play" onClick={ this.playPause }><i className={ icon }></i></a>
      </li>
    );
  }
});

module.exports = Album;
