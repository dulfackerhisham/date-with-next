const Page = ({params}) => {
    return (
      <div className="blog-name-page">
          <h1>{params.slug[0]} / {params.slug[1]}</h1>
      </div>
    )
  }
  
  export default Page