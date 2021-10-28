import './app-filter.css';

const AppFilter = () => {
  return(
    <div className="btn-group">
      <button 
        className="btn btn-light"
        type='button'>
          Show all
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'>
          Need promotion
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'>
          1000$ and up
      </button>
    </div>
  )
}

export default AppFilter;