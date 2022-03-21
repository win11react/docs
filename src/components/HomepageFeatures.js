import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Recreation of windows 11',
    Svg: require('../../static/img/win11.svg').default,
    description: (
      <>
        Win11React is designed to look like windows 11.
      </>
    ),
  },
  {
    title: 'Community Maintained',
    Svg: require('../../static/img/git.svg').default,
    description: (
      <>
        Come on help out.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/reactjs-icon.svg').default,
    description: (
      <>
        Win11React is built using the react framework.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
