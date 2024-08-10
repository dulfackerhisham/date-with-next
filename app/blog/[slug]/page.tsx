const Page = ({params}) => {
  return (
    <div className="blog-name-page">
        <h1>{params.slug}</h1>
    </div>
  )
}

export default Page