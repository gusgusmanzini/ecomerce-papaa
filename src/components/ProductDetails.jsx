"use client"

import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import styles from "./ProductDetails.module.css"

//importa imagenes

import bloque1 from "/bloque1 (2).jpg";
import bloque2  from "/bloque2 (2).jpg";
import caños1 from "/caños1_square.jpg";
import caños2 from "/caños2_square.jpg";

const products = [
  {
    id: 1,
    name: "Zapatillas Deportivas",
    description: "Zapatillas cómodas y ligeras, perfectas para correr o entrenar.",
    price: "$59.99",
    images: [bloque1, bloque2],
  },
  {
    id: 2,
    name: "Reloj Inteligente",
    description: "Reloj inteligente con múltiples funciones y diseño elegante.",
    price: "$99.99",
    images: [caños1, caños2],
  },
]

function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number.parseInt(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  return (
    <main className={styles.main}>
      <Link to="/" className={styles.backLink}>
        &larr; Volver a Productos
      </Link>
      <div className={styles.productContainer}>
        <div className={styles.imageCarousel}>
          <button onClick={prevImage} className={styles.carouselButton}>
            &lt;
          </button>
          <img
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
            className={styles.productImage}
          />
          <button onClick={nextImage} className={styles.carouselButton}>
            &gt;
          </button>

          {/* Agregamos los indicadores aquí */}
          <div className={styles.indicators}>
            {product.images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>{product.price}</p>
          <button className={styles.addToCartButton}>Agregar al Carrito</button>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails

