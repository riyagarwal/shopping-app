import './Card.css'

// 
function Card({img_src, title, price}) {
  return (
    <div>
        <img src={img_src} />
        <p>Title: {title} </p>
        <p>Price: {price} </p>
        <button>Add To Cart</button>
    </div>
  )
}

export default Card

