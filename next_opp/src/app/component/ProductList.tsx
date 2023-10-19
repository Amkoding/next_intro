

 type ProductItemProps = {
    id: string
    title: string
    category: string
    price: number
    onClick?: (id: string) => void
  }

  export default function ProductItem(props: ProductItemProps) {
    const { id, title, category, price, onClick } = props


    function handleDelete() {
      onClick?.(id) 
    }
      return (

        <article className="card w-96 bg-base-100 shadow-xl columns-3xl ">

        <section >
          <h2>VareID:{id}</h2>
           <h2  className="card-title">{title}</h2>
        </section >

        <section >
           <h4 >{category}</h4>
        </section>
        <section className="card-body">
          <p>Dette er den beste varen du finner</p>
        </section>

        <section>
           <h4 >{price}</h4>
        </section>
        <button className="btn btn-accent" >
            Buy Now
        </button>

        </article>
      )
    }