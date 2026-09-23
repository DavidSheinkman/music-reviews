import classes from './loading.module.css';

export default function ReviewLoadingPage() {
  return (
    <p className={classes.loading}>Fetching reviews...</p>
  );
}