import { Link } from "react-router-dom"
import styles from "./ProductList.module.css"

const products = [
  {
    id: 1,
    name: "Bloque ",
    description: "bloque de hormigon.",
    price: "$59.99",
    images: ["/bloque1 (2).jpg", "/bloque2 (2).jpg"],
  },
  {
    id: 2,
    name: "caño",
    description: "caño de hormigon",
    price: "$99.99",
    images: ["/caños1_square.jpg", "/caños2_square.jpg"],
  },
]

function ProductList() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Nuestros Productos</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
            <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>{product.price}</p>
          </Link>
        ))}
      </div>

      <div>
        {/* ponemos lo que papa quiera
         */}
      </div>
    </main>
  )
}

export default ProductList
