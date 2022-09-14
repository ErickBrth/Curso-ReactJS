import styles from "./Car.module.css";

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h2>{car.brand}</h2>
      <p>KM: {car.km}</p>
      <p>Cor: {car.color}</p>
    </div>
  );
};

export default Car;