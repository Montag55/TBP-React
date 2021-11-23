import { enableRipple } from '@syncfusion/ej2-base'
import { MenuComponent } from '@syncfusion/ej2-react-navigations'

function OnSelect(args) {
  switch (args.item.text) {
    case 'File':
      OnFileSave()
      break
    case 'Open':
      OnFileOpen()
      break
    case 'New':
      OnFileNew()
      break
    default:
      console.log('evnt not handeled:' + args.item.text)
      break
  }
}

function OnFileOpen() {
  console.log('file open')
}

function OnFileSave() {
  console.log('file save')
}

function OnFileNew() {
  console.log('file new')
}

export default function MenuBar() {
  enableRipple(true)
  const menuItems = [
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

  return (
    <div id="menu-bar">
      <MenuComponent items={menuItems} select={OnSelect} />
    </div>
  )
}
