import { FileDrop } from 'react-file-drop'
import React from 'react'
import PrevCanvas from './PrevCanvas'
import MenuBar from './MenuBar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasVideo: false, videoUrl: '' }
    this.setVideo = this.setVideo.bind(this)
  }

  setVideo = (url) => {
    this.setState({
      hasVideo: true,
      videoUrl: url
    })
  }

  render_preview_canvas = () => {
    return <PrevCanvas videoUrl={this.state.videoUrl} />
  }

  render_preview_canvas_placehodler = () => {
    return (
      <div id="prev-placeholder-text">
        <FileDrop onDrop={(e) => this.upload_file(e)} onTargetClick={() => document.getElementById('upload-file').click()}>
          Create or Open a project
        </FileDrop>
      </div>
    )
  }

  render = () => {
    return (
      <React.Fragment>
        <MenuBar setVideo={this.setVideo} />
        {this.state.hasVideo ? this.render_preview_canvas() : this.render_preview_canvas_placehodler()}
      </React.Fragment>
    )
  }
}

export default App
