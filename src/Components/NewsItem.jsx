

const NewsItem = ({title,description,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"It is information about something that has just happened"}</p>
    <a href={url} className="btn btn-primary">Details</a>
  </div>
</div>
  )
}

export default NewsItem
