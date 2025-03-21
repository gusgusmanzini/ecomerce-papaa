"use client";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductDetails.module.css";

//importa imagenes

import bloque1 from "/bloque1 (2).jpg";
import bloque2 from "/bloque2 (2).jpg";
import caños1 from "/caños1_square.jpg";
import caños2 from "/caños2_square.jpg";
import bloqueu from "/bloqueu.jpg";

const products = [
  {
    id: 1,
    name: "Bloque Vibroprensado",
    description: "Bloque Vibroprensado de 12 × 19 × 39 cm.",

    images: [bloque1, bloque2],
  },
  {
    id: 2,
    name: "Caño De Hormigon Vibrocomprimido",
    description:
      "Caños de hormigon vibrocomprimidos con medidas de: 300x1000MM, 400x1000MM y 500x1000MM.",

    images: [caños1, caños2],
  },
  {
    id: 3,
    name: "Bloque U De Hormigon Vibrocomprimido",
    description: "Bloques U de Hormigon Vibrocomprimidos con medidas de: ",
    images: [bloqueu],
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number.parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

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
                className={`${styles.indicator} ${
                  index === currentImageIndex ? styles.activeIndicator : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>{product.price}</p>

          <p className="precio">
            Para consultar precio comunicarse a 095 028 993
          </p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
