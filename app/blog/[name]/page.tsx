
const page = ({params}) => {
  return (
    <div className="blog-name-page">
        <h1>{params.name}</h1>
    </div>
  )
}

export default page