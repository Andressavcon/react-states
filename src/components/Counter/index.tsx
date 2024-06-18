import { Dispatch, SetStateAction, useState } from 'react';
import styles from './counter.module.css';

interface CounterProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export function Counter({ counter, setCounter }: CounterProps): JSX.Element {
  const [showAlert, setShowAlert] = useState(false);

  function subNumber() {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        setShowAlert(true);
        return prevCounter;
      } else {
        setShowAlert(false);
        return prevCounter - 1;
      }
    });
  }

  function addNumber() {
    setCounter((prevCounter) => {
      setShowAlert(false);
      return prevCounter + 1;
    });
  }

  const formattedCounter = String(counter).padStart(3, '0');

  return (
    <section className={styles.container}>
      <div className={styles.value}>
        <h2>Value:</h2>
        <div className={styles.value__number}>
          {formattedCounter.split('').map((digit, index) => (
            <span key={index} className={styles.value__digit}>
              {digit}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.alertContainer}>
        {showAlert && (
          <h3 className={styles.alert}>The counter cannot be negative!</h3>
        )}
      </div>

      <div className={styles.btn}>
        <button onClick={subNumber} className={styles['btn-sub']}>
          Decrement
        </button>

        <button onClick={addNumber} className={styles['btn-add']}>
          Increment
        </button>
      </div>
    </section>
  );
}
