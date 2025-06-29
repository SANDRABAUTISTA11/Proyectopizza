import { useState } from "react";
import styles from './owner-style.module.css';

const Owner = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Shrek 1" },
    { id: 2, title: "Toy Story 1" },
    { id: 3, title: "Leo" },
    { id: 4, title:"Shrek 2"},
    { id: 5, title:"Shrek 3"},
    { id: 6, title:"Shrek 4"},
    { id: 7, title:"Shrek cuentos de terror"},
    { id: 8, title:"Shrek cuentos de navidad"},
    { id: 9, title:"Jurassic World"},
    { id: 10, title:"Campamento cretacico"},
  ]);

  const agregarPelicula = () => {
    const nuevaPelicula = {
      id: movies.length + 1,
      title: ` ${setMovies.length + 1}`,
    };
    setMovies([...movies, nuevaPelicula]);
  };

  const eliminarPelicula = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <h1>Sobre mí</h1>
      </header>

      <section className={styles.infoPersonal}>
        <img
          src="/images/pizzas/foto de perfil Sandra.jpg"
          alt="Foto de perfil"
          className={styles.fotoPerfil}
        />
        <h2>Nombre: Sandra Bautista</h2>
        <p>Correo: sandra@outlook.com</p>
        <p>Descripción: Soy estudiante de programación en generation México</p>
      </section>

     
      <section className={styles.peliculas}>
        <h2>Mis películas favoritas</h2>
        <ul className={styles.listaPeliculas}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.peliculaItem}>
              {movie.title}
              <button
                className={styles.btnEliminar}
                onClick={() => eliminarPelicula(movie.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.btnAgregar} onClick={agregarPelicula}>
          Agregar película
        </button>
      </section>


      <footer className={styles.footer}>
        <p> 2025 Sandra Bautista</p>
      </footer>
    </div>
  );
};

export default Owner;



