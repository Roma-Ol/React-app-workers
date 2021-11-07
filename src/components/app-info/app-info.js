import './app-info.css'

const AppInfo = ({ workersAmouth, countPromoted }) => {
  return (
    <div className="app-info">
      <h2>Eployee encountant at our company</h2>
      <h2>Total amouth of workers: { workersAmouth }</h2>
      <h2>Total amout of promoted: { countPromoted }</h2>
    </div>
  )
}

export default AppInfo;