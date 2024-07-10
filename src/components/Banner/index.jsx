import { useState } from "react";
import styles from "./Banner.module.css";

export function Banner({ card, categoryLookup }) {
  const [showDescription, setShowDescription] = useState(false);

  if (
    !card ||
    !card.category ||
    !categoryLookup ||
    !categoryLookup[card.category]
  ) {
    return null;
  }

  const { title, link, description, photo } = card;
  const { name, primaryColor } = categoryLookup[card.category];

  const titleStyle = {
    backgroundColor: primaryColor,
  };

  const back = {
    backgroundColor: '#000',
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <main
      id="banner"
      className={styles.layer}
      style={{
        backgroundImage: `url(${photo})`,
        "--primary-color": primaryColor,
      }}
    >
      <div className={styles.gradient} style={back}></div>
      <section className={styles.content}>
        <h1 className={styles.name} style={titleStyle}>
          {name}
        </h1>
        <h2 className={styles.title}>Challenge React</h2>
        <p className={styles.subtitle}>
          Este desafio é uma forma de aprendizagem. É um mecanismo onde você
          será capaz de se comprometer a resolver um problema para aplicar todos
          os conhecimentos adquiridos no treinamento React.
        </p>
        <button onClick={toggleDescription} className={styles.toggleButton}>
          {showDescription ? "Ocultar Descrição" : "Mostrar Descrição..."}
        </button>
        {showDescription && (
          <div className={styles.description}>
            <h2 className={styles.title2}>{title}</h2>
            <p className={styles.subtitle2}>{description}</p>
          </div>
        )}
      </section>
      <section className={styles.containerBanner}>
        <iframe
          width="560"
          height="315"
          src={link}
          title={title}
          frameborder="0"
          className={styles.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </main>
  );
}
