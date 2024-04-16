import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Gradle",
    image: require("@site/static/img/gradle.png").default,
    description: (
      <>
        Stay ahead of the curve by building your projects with the newest and
        most advanced <b>Gradle build system</b>.
      </>
    ),
  },
  {
    title: "Code Editor",
    image: require("@site/static/img/code-editor.png").default,
    description: (
      <>
        Upgrade your coding game with our IDE's smart code editor that offers{" "}
        <b>code completions</b>, <b>actions</b>, and <b>analysis</b> to help you
        write better code quickly.
      </>
    ),
  },
  {
    title: "Studio Project Support",
    image: require("@site/static/img/studio-project-support.png").default,
    description: (
      <>
        Effortlessly build{" "}
        <a
          href="https://developer.android.com/studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android Studio
        </a>{" "}
        projects in AndroidIDE without any modifications, making your
        development process smoother and more streamlined!
      </>
    ),
  },
  {
    title: "Terminal",
    image: require("@site/static/img/terminal-sm.png").default,
    description: (
      <>
        Seamlessly access a full Linux environment with AndroidIDE's built-in
        terminal, based on the powerful{" "}
        <a href="https://termux.dev" target="_blank" rel="noopener noreferrer">
          Termux
        </a>{" "}
        project.
      </>
    ),
  },
  {
    title: "AAB Support",
    image: require("@site/static/img/aab-support.png").default,
    description: (
      <>
        Make your app available to millions of users by effortlessly exporting
        it as AAB files and publishing it on the Play Store!
      </>
    ),
  },
  {
    title: "Open Source",
    image: require("@site/static/img/open-source.png").default,
    description: (
      <>
        Explore endless innovation possibilities with <br />
        <a
          href="https://github.com/AndroidIDEOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          our open-source project
        </a>
        , where transparency and collaboration are the key!
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div
      className={clsx("col col--4 margin-vert--md", styles.featureContainer)}
    >
      <div className="text--center">
        <img src={image} className={styles.featureImage} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
