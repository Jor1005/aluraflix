import "./Categories.css"

const Category = (props) => {

const bg = {
    backgroundColor: props.data.color
}


return <section className="category-content" style={bg}>
    <h1>{props.data.title}</h1>
    <div className="videos">
    </div>
</section>
}

export default Category