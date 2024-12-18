import type { NextPage } from 'next';
import Head from 'next/head';
import AutomationLanding from '../components/AutomationLanding';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ultimate Business Automation Blueprint - Free Guide</title>
        <meta name="description" content="Transform your business operations with our comprehensive guide to automating repetitive tasks and streamlining workflows" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AutomationLanding />
      </main>
    </div>
  );
};

export default Home;