import styles from "./page.module.css";
import Image from "next/image";
import {
  adultDirections,
  aboutPortrait,
  archivedReviews,
  approachSteps,
  certificates,
  childDirections,
  clinics,
  courses,
  contactPortrait,
  doctor,
  education,
  faq,
  heroFloatingObjects,
  heroPortrait,
  navigation,
  reviewSources,
  reviews,
  serviceImages,
  universeU,
} from "@/data/site-content";

const combine = (...names: string[]) => names.filter(Boolean).join(" ");
const siteBasePath = process.env.GITHUB_PAGES === "true" ? "/kate" : "";
const withBasePath = (path: string) => `${siteBasePath}${path}`;
// Keep unfinished media sections in local preview, but don't ship their placeholders.
const showDraftSections = process.env.NODE_ENV !== "production";

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={combine(styles.sectionHeading, centered ? styles.centered : "")}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className={styles.sectionIntro}>{description}</p> : null}
    </div>
  );
}

function EmptyState({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className={styles.emptyState}>
      <span className={styles.emptyMark} aria-hidden="true">✳</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Перейти к содержанию</a>

      <header className={styles.header}>
        <div className={combine(styles.container, styles.headerInner)}>
          <a href="#hero" className={styles.wordmark} aria-label="Екатерина Романова — на главную">
            <span className={styles.wordmarkSymbol} aria-hidden="true">Е</span>
            <span>Екатерина Романова<small>врач-стоматолог</small></span>
          </a>
          <nav className={styles.desktopNav} aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <details className={styles.mobileNav}>
            <summary>Меню</summary>
            <nav className={styles.mobileNavPanel} aria-label="Основная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>
          </details>
          <a className={styles.headerCta} href={doctor.personalTelegram} target="_blank" rel="noreferrer">Связаться</a>
        </div>
      </header>

      <main id="main">
        <section className={styles.heroSection} id="hero" aria-labelledby="hero-title">
          <div className={combine(styles.container, styles.hero)}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>СТОМАТОЛОГ-ТЕРАПЕВТ · ВЗРОСЛЫМ И ДЕТЯМ</p>
              <h1 id="hero-title">Качественное лечение начинается <em>с доверия.</em></h1>
              <p className={styles.heroLead}>
                Екатерина Романова — стоматолог-терапевт. Принимаю взрослых и детей,
                объясняю ситуацию простым языком и обсуждаю каждый следующий шаг.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.buttonPrimary} href="#services">Направления работы <span aria-hidden="true">↗</span></a>
                <a className={styles.textLink} href="#approach">Узнать о подходе <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroPortraitFrame}>
                <Image
                  src={withBasePath(heroPortrait.src)}
                  alt={heroPortrait.alt}
                  width={heroPortrait.width}
                  height={heroPortrait.height}
                  sizes="(max-width: 400px) calc(100vw - 36px), (max-width: 640px) 360px, (max-width: 880px) 42vw, 520px"
                  priority
                  className={styles.heroPortrait}
                />
              </div>
              <Image
                src={withBasePath(heroFloatingObjects.child.src)}
                alt=""
                aria-hidden="true"
                width={heroFloatingObjects.child.width}
                height={heroFloatingObjects.child.height}
                sizes="(max-width: 640px) 80px, 120px"
                className={combine(styles.heroFloatingObject, styles.heroFloatingChild)}
              />
              <Image
                src={withBasePath(heroFloatingObjects.adult.src)}
                alt=""
                aria-hidden="true"
                width={heroFloatingObjects.adult.width}
                height={heroFloatingObjects.adult.height}
                sizes="(max-width: 640px) 88px, 124px"
                className={combine(styles.heroFloatingObject, styles.heroFloatingAdult)}
              />
              <div className={styles.heroTrustPanel} id="trust" role="group" aria-label="Ключевые факты о Екатерине">
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustValue}>{doctor.experienceYears}</span>
                  <span className={styles.heroTrustLabel}>лет практики</span>
                </div>
                <div className={styles.heroTrustItem}>
                  <span className={combine(styles.heroTrustValue, styles.heroTrustValueWide)}>Взрослым<br />и детям</span>
                  <span className={styles.heroTrustLabel}>стоматолог-терапевт</span>
                </div>
                <div className={styles.heroTrustItem}>
                  <span className={styles.heroTrustValue}>У</span>
                  <span className={styles.heroTrustLabel}>соавтор «Вселенной У»</span>
                </div>
              </div>
            </div>

            <a className={styles.heroScroll} href="#trust"><span aria-hidden="true">↓</span> ЛИСТАЙТЕ</a>
          </div>
        </section>

        <section className={combine(styles.section, styles.aboutSection)} id="about">
          <div className={combine(styles.container, styles.aboutGrid)}>
            <div className={styles.aboutAside}>
              <Image
                src={withBasePath(aboutPortrait.src)}
                alt={aboutPortrait.alt}
                width={aboutPortrait.width}
                height={aboutPortrait.height}
                sizes="(max-width: 640px) 290px, (max-width: 880px) 42vw, 330px"
                className={styles.aboutPhoto}
              />
              <div className={styles.aboutScrim} aria-hidden="true" />
              <p className={styles.eyebrow}>О ВРАЧЕ</p>
              <div className={styles.aboutInfo}>
                <p className={styles.asideCaption}>Екатерина Романова</p>
                <p className={styles.asideMeta}>Врач-стоматолог · стоматолог-терапевт</p>
              </div>
            </div>
            <div className={styles.aboutText}>
              <SectionHeading
                eyebrow="ЗНАКОМСТВО"
                title="В центре внимания — человек"
                description="Я работаю со взрослыми и детьми. Мне важно, чтобы пациент понимал, что и зачем мы делаем, и мог спокойно задать вопросы."
              />
              <p>
                Я выслушиваю, что беспокоит, объясняю ситуацию простым языком, а затем
                мы обсуждаем план и следующие шаги.
              </p>
              <p>
                В проекте «Обнажённые сердца» я помогала детям с особенностями развития
                адаптироваться к стоматологическому приёму и проходить лечение.
              </p>
              <div className={styles.quoteBlock}>
                <span aria-hidden="true">“</span>
                <blockquote>{doctor.closingQuote}</blockquote>
                <p>Мой ориентир — ясность на каждом этапе.</p>
              </div>
            </div>
          </div>
        </section>

        {showDraftSections ? (
          <section className={combine(styles.section, styles.videoSection)} id="video">
            <div className={combine(styles.container, styles.videoPanel)}>
              <div className={styles.videoCopy}>
                <p className={styles.eyebrow}>ВИДЕО</p>
                <h2>Познакомимся поближе</h2>
                <p>Здесь будет короткое видео о Екатерине и её подходе к приёму.</p>
              </div>
              <div className={styles.videoPlaceholder} role="note" aria-label="Место для видеовизитки Екатерины">
                <span className={styles.videoPlaceholderMark} aria-hidden="true">Е</span>
                <div>
                  <p>ВИДЕОВИЗИТКА</p>
                  <h3>Ролик пока не добавлен</h3>
                </div>
                <span className={styles.videoPlaceholderSpark} aria-hidden="true">✦</span>
              </div>
            </div>
          </section>
        ) : null}

        <section className={combine(styles.section, styles.approachSection)} id="approach">
          <div className={styles.container}>
            <SectionHeading
              eyebrow="МОЙ ПОДХОД"
              title="Понятный путь, шаг за шагом"
              description="Важно не только качество самой процедуры, но и то, как человек проходит весь путь лечения."
              centered
            />
            <div className={styles.approachGrid}>
              {approachSteps.map((step) => (
                <article className={styles.approachCard} key={step.number}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={combine(styles.section, styles.servicesSection)} id="services">
          <div className={styles.container}>
            <SectionHeading
              eyebrow="НАПРАВЛЕНИЯ"
              title="Взрослым и детям"
              description="Терапевтическая стоматология для взрослых и детская стоматология. Иллюстрации показывают консультацию и знакомство с приёмом."
              centered
            />
            <div className={styles.serviceGrid}>
              <article className={combine(styles.serviceCard, styles.adultCard)}>
                <Image
                  src={withBasePath(serviceImages.adults.src)}
                  alt={serviceImages.adults.alt}
                  width={serviceImages.adults.width}
                  height={serviceImages.adults.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 880px) 85vw, 48vw"
                  className={styles.serviceImage}
                />
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTopline}><span>01</span><span>ВЗРОСЛЫМ</span></div>
                  <h3>Терапевтическая<br />стоматология</h3>
                  <p>Разбираем ситуацию, обсуждаем возможные шаги и план лечения.</p>
                  <ul>{adultDirections.map((direction) => <li key={direction}>{direction}</li>)}</ul>
                </div>
              </article>
              <article className={combine(styles.serviceCard, styles.childCard)}>
                <Image
                  src={withBasePath(serviceImages.children.src)}
                  alt={serviceImages.children.alt}
                  width={serviceImages.children.width}
                  height={serviceImages.children.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 880px) 85vw, 48vw"
                  className={styles.serviceImage}
                />
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTopline}><span>02</span><span>ДЕТЯМ</span></div>
                  <h3>Детский<br />приём</h3>
                  <p>Знакомство с приёмом и общение с учётом возраста и индивидуальных особенностей.</p>
                  <ul>{childDirections.map((direction) => <li key={direction}>{direction}</li>)}</ul>
                </div>
              </article>
            </div>
            <p className={styles.serviceNote}>Возможность и условия проведения конкретного лечения зависят от клиники и уточняются при записи.</p>
          </div>
        </section>

        <section className={combine(styles.section, styles.adaptationSection)} id="child-adaptation">
          <div className={combine(styles.container, styles.adaptationPanel)}>
            <div className={styles.adaptationArt} aria-hidden="true">
              <span className={styles.bookOrbit} />
              <span className={combine(styles.bookSparkle, styles.bookSparkleOne)}>✦</span>
              <span className={combine(styles.bookSparkle, styles.bookSparkleTwo)}>✧</span>
              <span className={combine(styles.bookSparkle, styles.bookSparkleThree)}>✦</span>
              <div className={styles.bookMockup}>
                <span className={styles.bookPages} />
                <Image
                  src={withBasePath(universeU.bookCover.src)}
                  alt={universeU.bookCover.alt}
                  width={universeU.bookCover.width}
                  height={universeU.bookCover.height}
                  sizes="(max-width: 640px) 76vw, (max-width: 880px) 34vw, 360px"
                  className={styles.bookCover}
                />
              </div>
            </div>
            <div className={styles.adaptationCopy}>
              <p className={styles.eyebrow}>ДЕТЯМ И РОДИТЕЛЯМ</p>
              <h2>Знакомство с приёмом — тоже часть заботы</h2>
              <p>
                Перед визитом можно вместе рассмотреть журнал «Вселенная У» и поговорить
                о заботе о зубах через истории и персонажей.
              </p>
              <p className={styles.adaptationFootnote}>
                Формат приёма и доступность условий зависят от места приёма.
              </p>
              <a className={styles.textLink} href="#universe-u">О проекте «Вселенная У» <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className={combine(styles.section, styles.universeSection)} id="universe-u">
          <div className={combine(styles.container, styles.universePanel)}>
            <div className={styles.universeText}>
              <p className={styles.eyebrow}>МИР, КОТОРЫЙ ПОМОГАЕТ ОБЪЯСНЯТЬ</p>
              <h2>Добро пожаловать<br />во <em>«Вселенную У»</em></h2>
              <p className={styles.universeDescription}>{universeU.description}</p>
              <p className={styles.universeCredit}>{universeU.credit}</p>
              <a className={styles.buttonLight} href={universeU.telegram} target="_blank" rel="noreferrer">
                Перейти в Telegram <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.universeArt}>
              <div className={styles.universeLogo}>
                <Image
                  src={withBasePath("/images/universe-u-cover.webp")}
                  alt="Обложка проекта «Вселенная У»: Екатерина и детские персонажи в мире стоматологии"
                  width={640}
                  height={640}
                  sizes="(max-width: 640px) 260px, (max-width: 880px) 34vw, 390px"
                />
              </div>
            </div>
          </div>
        </section>

        {showDraftSections ? (
          <section className={combine(styles.section, styles.casesSection)} id="cases">
            <div className={styles.container}>
              <SectionHeading
                eyebrow="КЛИНИЧЕСКИЕ ИСТОРИИ"
                title="Работа в деталях"
                description="В клинических историях важны задача, обсуждённые варианты и логика следующих шагов."
                centered
              />
              <EmptyState
                title="Истории лечения пока не опубликованы"
                text="Реальные клинические материалы появятся только после согласования с пациентами."
              />
            </div>
          </section>
        ) : null}

        <section className={combine(styles.section, styles.educationSection)} id="education">
          <div className={combine(styles.container, styles.educationGrid)}>
            <div className={styles.educationIntro}>
              <p className={styles.eyebrow}>ОБРАЗОВАНИЕ</p>
              <h2>Профессиональный путь</h2>
              <p>Подтверждённые этапы обучения и переподготовки.</p>
              <span className={styles.educationStamp} aria-hidden="true">12<span>лет практики</span></span>
            </div>
            <div className={styles.timeline}>
              {education.map((item) => (
                <article className={styles.timelineItem} key={item.year + item.title}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <div><h3>{item.title}</h3><p>{item.place}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className={combine(styles.container, styles.coursesWrap)}>
            <details className={styles.coursesDetails}>
              <summary>
                <span>Курсы и повышение квалификации</span>
                <span className={styles.summaryIcon} aria-hidden="true">+</span>
              </summary>
              <ol className={styles.courseList}>
                {courses.map((course, index) => (
                  <li key={course.year + course.title}>
                    <span>{course.year}</span>
                    <p>{course.title}{course.place ? <small>{course.place}</small> : null}</p>
                    <span className={styles.courseIndex}>{String(index + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </section>

        <section className={combine(styles.section, styles.certificatesSection)} id="certificates">
          <div className={combine(styles.container, styles.certificateInner)}>
            <SectionHeading
              eyebrow="ПОДТВЕРЖДЕНИЯ"
              title="Сертификаты и документы"
              description="Диплом и сертификат специалиста. Нажмите на изображение, чтобы открыть его в полном размере."
            />
            <div className={styles.certificateGallery}>
              {certificates.map((certificate) => (
                <article className={styles.certificateCard} key={certificate.src}>
                  <a
                    className={styles.certificateLink}
                    href={withBasePath(certificate.src)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Открыть документ «${certificate.title}» в полном размере`}
                    title="Открыть в полном размере"
                  >
                    <Image
                      src={withBasePath(certificate.src)}
                      alt={certificate.alt}
                      width={certificate.width}
                      height={certificate.height}
                      sizes="(max-width: 640px) 44vw, 230px"
                    />
                    <span>Открыть ↗</span>
                  </a>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={combine(styles.section, styles.reviewsSection)} id="reviews">
          <div className={styles.container}>
            <SectionHeading
              eyebrow="ОТЗЫВЫ ПАЦИЕНТОВ"
              title="Слова пациентов"
              description="В отзывах отмечают внимательное отношение, понятные объяснения и контакт с детьми."
              centered
            />
            <div className={styles.reviewGrid}>
              {reviews.map((review) => (
                <article className={styles.reviewCard} key={review.date + review.source}>
                  <div className={styles.reviewMeta}>
                    {review.rating ? (
                      <span className={styles.reviewRating} aria-label={`Оценка ${review.rating} из 5`}>
                        <span aria-hidden="true">★</span> {review.rating}
                      </span>
                    ) : (
                      <span className={styles.reviewUnrated}>Без указанной оценки</span>
                    )}
                    <time dateTime={review.dateTime}>{review.date}</time>
                  </div>
                  <blockquote>{review.excerpt}</blockquote>
                  <a href={review.sourceUrl} target="_blank" rel="noreferrer">
                    {review.source} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <details className={styles.reviewArchive}>
              <summary>
                <span>Ещё отзывы · 2017–2019</span>
                <span className={styles.summaryIcon} aria-hidden="true">+</span>
              </summary>
              <div className={styles.reviewArchiveGrid}>
                {archivedReviews.map((review) => (
                  <article className={styles.archiveReviewCard} key={review.date}>
                    <div className={styles.reviewMeta}>
                      {review.rating ? (
                        <span className={styles.reviewRating} aria-label={`Оценка ${review.rating} из 5`}>
                          <span aria-hidden="true">★</span> {review.rating}
                        </span>
                      ) : (
                        <span className={styles.reviewUnrated}>Гостевой отзыв · без рейтинга</span>
                      )}
                      <time dateTime={review.dateTime}>{review.date}</time>
                    </div>
                    <p>{review.summary}</p>
                    <a href="https://prodoctorov.ru/moskva/vrach/376129-romanova/" target="_blank" rel="noreferrer">
                      {"source" in review ? review.source : "ПроДокторов"} <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                ))}
              </div>
            </details>
            <div className={styles.reviewSources}>
              <p>Профили и отзывы на площадках</p>
              <div>
                {reviewSources.map((source) => (
                  <a key={source.label} href={source.href} target="_blank" rel="noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={combine(styles.section, styles.faqSection)} id="faq">
          <div className={combine(styles.container, styles.faqGrid)}>
            <div className={styles.faqIntro}>
              <p className={styles.eyebrow}>ВОПРОСЫ</p>
              <h2>Частые вопросы</h2>
              <p>Что обсудить перед приёмом, как записаться и что уточнить в клинике.</p>
              <span className={styles.faqDecoration} aria-hidden="true">?</span>
            </div>
            <div className={styles.faqList}>
              {faq.map((item, index) => (
                <details className={styles.faqItem} key={item.question}>
                  <summary>
                    <span className={styles.faqNumber}>0{index + 1}</span>
                    <span>{item.question}</span>
                    <span className={styles.faqToggle} aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={combine(styles.section, styles.locationsSection)} id="locations">
          <div className={styles.container}>
            <SectionHeading
              eyebrow="МЕСТА ПРИЁМА"
              title="Где проходит приём"
              description="Подтверждённые места приёма Екатерины в Москве."
              centered
            />
            <div className={styles.clinicGrid}>
              {clinics.map((clinic) => (
                <article className={styles.clinicCard} key={clinic.name}>
                  <span className={styles.clinicPin} aria-hidden="true">⌖</span>
                  <p className={styles.eyebrow}>МОСКВА</p>
                  <h3>{clinic.name}</h3>
                  <p className={styles.clinicAddress}>{clinic.address}</p>
                  <div className={styles.clinicLinks}>
                    <a href={clinic.clinicUrl} target="_blank" rel="noreferrer">
                      Сайт клиники <span aria-hidden="true">↗</span>
                    </a>
                    <a href={clinic.doctorUrl} target="_blank" rel="noreferrer">
                      Профиль врача <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.locationNote}>Актуальное расписание и доступность приёма уточняйте у Екатерины или в выбранной клинике.</p>
          </div>
        </section>

        <section className={combine(styles.section, styles.contactSection)} id="contact">
          <div className={combine(styles.container, styles.contactPanel)}>
            <div className={styles.contactOrb} aria-hidden="true"><span>Е</span></div>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>СЛЕДУЮЩИЙ ШАГ</p>
              <h2>Есть вопрос или хотите записаться?</h2>
              <p>Чтобы записаться, напишите Екатерине в личный Telegram. Можно также позвонить по телефону.</p>
              <a className={combine(styles.buttonLight, styles.contactCta)} href={doctor.personalTelegram} target="_blank" rel="noreferrer">
                Связаться <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.contactPhone} href={doctor.phoneHref}>{doctor.phoneDisplay}</a>
            </div>
            <Image
              src={withBasePath(contactPortrait.src)}
              alt={contactPortrait.alt}
              width={contactPortrait.width}
              height={contactPortrait.height}
              sizes="(max-width: 640px) 145px, (max-width: 880px) 205px, 250px"
              className={styles.contactPortrait}
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={combine(styles.container, styles.footerInner)}>
          <a href="#hero" className={styles.wordmark}>
            <span className={styles.wordmarkSymbol} aria-hidden="true">Е</span>
            <span>Екатерина Романова<small>врач-стоматолог</small></span>
          </a>
          <p>Качественное лечение начинается с доверия.</p>
          <a className={styles.footerTop} href="#hero">Наверх ↑</a>
        </div>
      </footer>
    </>
  );
}
