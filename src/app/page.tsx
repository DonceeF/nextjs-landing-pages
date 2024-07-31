import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles/pages/_page.module.scss";
import Image from "next/image";

const ContactForm = dynamic(() => import("./components/home/ContactForm"), {
  ssr: false,
});
const ErrorBoundary = dynamic(() => import("./errorBoundary/ErrorBoundary"), {
  ssr: false,
});
const Paragraph = dynamic(() => import("./components/common/Paragraph"), {
  ssr: false,
});
const SliderItems = dynamic(() => import("./components/home/SliderItems"), {
  ssr: false,
});
const IconComponent = dynamic(() => import("./components/home/IconComponent"), {
  ssr: false,
});
const DemandeDemonstration = dynamic(
  () => import("./components/common/DemandeDemonstration"),
  { ssr: false }
);
const DemandeFormSection = dynamic(
  () => import("./components/common/DemandeFormSection"),
  { ssr: false }
);
const DemandeForm = dynamic(() => import("./components/home/DemandeForm"), {
  ssr: false,
});

import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

// ------------------- Images
import acceuil1 from "../../public/img/acceuil-img-1.png";
import acceuil2 from "../../public/img/acceuil-img-2.png";
import acceuil3 from "../../public/img/acceuil-img-3.png";
import acceuil4 from "../../public/img/acceuil-img-4.png";
import acceuil5 from "../../public/img/acceuil-img-5.png";
import acceuil6 from "../../public/img/acceuil-img-6.png";
import acceuil7 from "../../public/img/acceuil-img-7.png";
import acceuil8 from "../../public/img/acceuil-img-8.png";
import acceuil9 from "../../public/img/acceuil-img-9.png";
import icon1 from "../../public/img/icon-acceuil-1.png";
import icon2 from "../../public/img/icon-acceuil-2.png";
import icon3 from "../../public/img/icon-acceuil-3.png";
import icon4 from "../../public/img/icon-acceuil-4.png";
import icon5 from "../../public/img/icon-acceuil-5.png";
import icon6 from "../../public/img/icon-acceuil-6.png";

const titles = [
  {
    title: (
      <h2>
        La solution qui vous accompagne <span>durant </span>
        <span>tout </span>
        <span>le </span>
        <span>processus</span> de vos consultations
      </h2>
    ),
    paragraph:
      "Pilotez le parcours de vos patients de la prise de rendez-vous jusqu’à la facturation, en passant par la consultation, la prescription médicale sur ordonnance digitale et la constitution du dossier patient. ",
  },
  {
    title: (
      <h2>
        Vous êtes proches de vos patients, <span>nous </span>
        <span>somme </span>
        <span>proche </span>
        <span>de </span>
        <span>vous</span>
      </h2>
    ),
    paragraph:
      "Profitez de l’expertise de notre service client. Performant, rapide et toujours à l’écoute pour répondre immédiatement à vos demandes et questions. ",
  },
  {
    title: (
      <h2>
        Les <span>dossiers </span>
        <span>de </span>
        <span>vos </span>
        <span>patients </span>
        n&apos;ont jamais été aussi simple à gérer
      </h2>
    ),
    paragraph:
      "Digitalisez vos dossiers patients et ayez une meilleure visibilité sur leur état de santé.",
  },
  {
    title: (
      <h2>
        <span>L&apos;économie </span>
        <span>du </span>
        <span>temps </span>est possible grâce au digital
      </h2>
    ),
    paragraph:
      "Faites évoluer votre méthode de travail et gagnez un temps précieux sur l’ensemble de vos actions : la constitution des dossiers médicaux, la consultation, la prescription et la facturation. ",
  },
  {
    title: (
      <h2>
        Une <span>large </span>
        <span>base </span>
        <span>de </span>
        <span>données </span>
        <span>nationale </span>des médicaments pour une fficacité garantie
      </h2>
    ),
    paragraph:
      "Restez à jour grâce à notre large base de données produits qui compte plus de 82.000 médicaments et produits parapharmaceutiques mise à jour quotidiennement, tout en ayant une entière visibilité sur leur disponibilité sur le marché. ",
  },
  {
    title: (
      <h2>
        Une <span>large </span>
        <span>base </span>
        <span>de </span>
        <span>données </span>
        internationale recensant toutes les maladies, fiable et mondialement
        reconnue
      </h2>
    ),
    paragraph:
      "Profitez du glossaire des maladies intégré, avec plus de 16.000 maladies référencées par l’organisation mondiale de la santé, pour plus de rapidité et d’efficacité.",
  },
];

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.Section1}>
        <div className={styles.textPart}>
          <h2>
            Sobrus MED au service de la digitalisation des{" "}
            <span>cabinets </span>
            <span>médicaux.</span>
          </h2>
          <h5>
            La solution idéale pour gérer efficacement votre cabinet médical.
          </h5>
          <div className={styles.Form}>
            <h5>Je souhaite être contacté</h5>
            <ErrorBoundary fallback="Something went wrong with the contact form.">
              <ContactForm />
            </ErrorBoundary>
          </div>
        </div>
        <div className={styles.imageAcceuil1}>
          <Image src={acceuil1} alt="" />
        </div>
      </div>

      <div className={styles.Definition}>
        <div className={styles.imgAcceuil}>
          <Image src={acceuil2} alt="page d'acceuil 2" />
        </div>
        <div className={styles.paragraph}>
          <h1>Qu&apos;est-ce que Sobrus MED ?</h1>
          <p>
            <span>
              Sobrus MED est la solution Cloud idéale à la gestion des{" "}
            </span>
            cabinets médicaux. La solution se caractérise par une sécurité et
            une confidentialité maximales pour toutes vos données et ceux de vos
            patients.
          </p>
          <p>
            <span>
              Sobrus MED vous donne la possibilité de profiter d&apos;une{" "}
            </span>
            panoplie d&apos;avantages dédiée aux médecins pour les accompagner
            dans leur transition digitale avec une interface simple, des
            formations personnalisées et un service client disponible pour vous
            aider à exceller dans votre transformation.
          </p>
        </div>
      </div>

      <div className={styles.Solution}>
        <Paragraph title={titles[0].title} paragraph={titles[0].paragraph} />
        <Image src={acceuil3} alt="page d'acceuil 3" />
      </div>

      <div className={styles.Section4}>
        <div className={styles.image}>
          <Image src={acceuil4} alt="" />
          <div className={styles.bigRec}></div>
          <div className={styles.smallRec}></div>
        </div>
        <Paragraph title={titles[1].title} paragraph={titles[1].paragraph}>
          <div className={styles.icons}>
            <div className={styles.iconsFirstPart}>
              <IconComponent src={icon1} title="Rapide" />
              <IconComponent src={icon2} title="Performant" />
            </div>
            <IconComponent src={icon3} title="Toujours à l’écoute" />
          </div>
        </Paragraph>
      </div>

      <div className={styles.Section5}>
        <Paragraph title={titles[2].title} paragraph={titles[2].paragraph} />
        <div className={styles.image}>
          <Image src={acceuil5} alt="" />
          <div className={styles.bigRec}></div>
          <div className={styles.icon}>
            <Image src={icon4} alt="" />
          </div>
        </div>
      </div>

      <DemandeDemonstration
        background="linear-gradient(to right, #1ab0d1 , #0c7c94)"
        backgroundButton="#fff"
        color="#fff"
        colorButton="#19b0d2"
        lightUnderLine={true}
      />

      <div className={styles.Section6}>
        <div className={styles.image}>
          <Image src={acceuil6} alt="" />
          <div className={styles.bigRec}></div>
        </div>
        <Paragraph title={titles[3].title} paragraph={titles[3].paragraph} />
      </div>

      <div className={styles.Section7}>
        <Paragraph title={titles[4].title} paragraph={titles[4].paragraph} />
        <div className={styles.image}>
          <Image src={acceuil7} alt="" />
          <div className={styles.bigRec}></div>
          <div className={styles.contentSection}>
            <IconComponent
              src={icon5}
              statistic="+87.000*"
              definition="médicaments et produits parapharmaceutiques"
            />
            <p>
              *Le nombre augmente à raison <br /> e 100 produits chaque jour
            </p>
          </div>
        </div>
      </div>

      <div className={styles.Section8}>
        <div className={styles.image}>
          <Image src={acceuil8} alt="" />
          <div className={styles.bigRec}></div>
        </div>
        <Paragraph title={titles[5].title} paragraph={titles[5].paragraph}>
          <div className={styles.icons}>
            <IconComponent
              src={icon6}
              statistic="+16.000"
              definition="maladies référencées"
            />
          </div>
        </Paragraph>
      </div>

      <div className={styles.Section9}>
        <div className={styles.paragraph}>
          <h2>
            <span>Résolution </span>
            <span>efficace </span>
            <span>par </span>notre <br />
            service client
          </h2>
          <div className={styles.firstDescri}>
            <h2>98,16%*</h2>
            <p>Taux de réponse</p>
            <p>
              * Les <span>1,84%</span> sont toujours rappelés
            </p>
          </div>
          <div className={styles.secondDescri}>
            <h2>4 secondes</h2>
            <p>Moyenne d’attente</p>
          </div>
          <div className={styles.iconsPart}>
            <h2>Présence omni-canal</h2>
            <div className={styles.icons}>
              <FaFacebookSquare
                style={{
                  color: "#4a66ab",
                  fontSize: "2rem",
                }}
              />
              <FaLinkedin
                style={{
                  color: "#0374b3",
                  fontSize: "2rem",
                }}
              />
              <MdCall
                style={{
                  color: "#1dc651",
                  fontSize: "2rem",
                }}
              />
              <IoMdMail
                style={{
                  color: "#ffbf63",
                  fontSize: "2rem",
                }}
              />
              <FaWhatsappSquare
                style={{
                  color: "#46c655",
                  fontSize: "2rem",
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={acceuil9} alt="" />
          <div className={styles.bigRec}></div>
        </div>
        <div></div>
      </div>

      <div className={styles.Section2}>
        <div>
          <h4>Témoignages</h4>
          <h2>Ce que les médecins en pensent ?</h2>
        </div>
        <div>
          <ErrorBoundary fallback="Something went wrong with the slider.">
            <SliderItems />
          </ErrorBoundary>
        </div>
      </div>
      <DemandeFormSection form={<DemandeForm />} />
    </div>
  );
};

export default Home;
