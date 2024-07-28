import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crypto Wallet',
    Svg: require('@site/static/img/crypto-wallet-blockchain.svg').default,
    description: (
      <>
        Find out the benefits of using a crypto wallet to interact with the blockchain.
      </>
    ),
  },
  {
    title: 'Transactions on Blockchain',
    Svg: require('@site/static/img/transactional-blockchain.svg').default,
    description: (
      <>
        Examine the flow of transactions on the blockchain.
      </>
    ),
  },
  {
    title: 'Transferring Test Coins',
    Svg: require('@site/static/img/coins.svg').default,
    description: (
      <>
        Configure access to test coins, and step through the process of sending 
        and receiving coins into a wallet.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
