<<<<<<< HEAD
import styles from "@/styles/FilterableList.module.css";

console.log(styles.primary);
=======
import styles from '@/styles/FilterableList.module.css';
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944

function FilterableList() {
  return (
    <>
      <form>
<<<<<<< HEAD
        <div>
          <label htmlFor="todo"></label>
          <input 
            id="todo"
            type="text" 
            placeholder="휴일에 할 일" 
            className={`${styles.accent}`} />
        </div>
        <button type="submit" className="accent">추가</button>
      </form>
    </>
  );
}

export default FilterableList;
=======
        <div className={styles.accent}>
          <label htmlFor="todo"></label>
          <input
            id="todo"
            type="text"
            placeholder="휴일에 할 일"
          />
        </div>
        <button type="submit">추가</button>
      </form>
    </>
  )
}

export default FilterableList
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
