import './topbar.css';

export default function TopBar() {
  return (
      <div className="top">
        <div className="topLeft">
          <ul className="groupList">
            <li className="groupListItem">Brandon Sur</li>
            <li className="groupListItem">Alex Le</li>
            <li className="groupListItem">Ricky Phung</li>
            <li className="groupListItem">Jared Eye</li>
            </ul>
          </div>
        <div className="topCenter">
          <h1 className="title">REM RENDEZVOUS</h1>
          </div>
        <div className="topRight">
        <ul className="navList">
            <li className="navListItem">HOME</li>
            <li className="navListItem">Write</li>  
            <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
      </div>
  )
}