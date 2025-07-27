import styles from './CohortDetails.module.css';
import { CohortsData } from './Cohort';
import CohortDetails from './CohortDetails'; 

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>
      <div className={styles.container}>
        {CohortsData.map(cohort => <CohortDetails cohort={cohort} key={cohort.cohortCode} />)}
      </div>
    </div>
  );
}

export default App;