import React from 'react'
import { enableRipple } from '@syncfusion/ej2-base'
import { MenuComponent } from '@syncfusion/ej2-react-navigations'

enableRipple(true)
class MenuBar extends React.Component {
  constructor(props) {
    super(props)
    this.menuItems = [
      {
        iconCss: 'em-icons e-file',
        items: [
          { text: 'New', iconCss: 'em-icons e-plus' },
          { text: 'Open', iconCss: 'em-icons e-open' },
          { text: 'Save', iconCss: 'e-icons e-save' }
        ],
        text: 'File'
      },
      { text: 'Help' }
    ]
  }

  OnFileNew = () => {
    document.getElementById('upload-file').click()
  }

  OnFileOpen = () => {
    document.getElementById('upload-file').click()
  }

  OnFileSave = () => {
    console.log('file save')
  }

  OnSelect = (args) => {
    var self = this
    switch (args.item.text) {
      case 'Save':
        self.OnFileSave()
        break
      case 'Open':
        self.OnFileOpen()
        break
      case 'New':
        self.OnFileNew()
        break
      default:
        console.log('evnt not handeled:' + args.item.text)
        break
    }
  }

  upload_file = (fileInput) => {
    console.log(fileInput)
    let url = window.URL.createObjectURL(fileInput[0])
    this.props.setVideo(url)
  }

  render = () => {
    return (
      <div id="menu-bar">
        <input onChange={(e) => this.upload_file(e.target.files)} type="file" className="hidden" id="upload-file" />
        <MenuComponent items={this.menuItems} select={this.OnSelect} />
      </div>
    )
  }
}

export default MenuBar
