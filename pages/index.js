import Layout from "../components/layout/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.heading2Xl}>
        <h1 className="title">🤑 Hourly</h1>
      </section>
    </Layout>
  );
}
