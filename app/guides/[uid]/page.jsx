import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { FiCalendar, FiUser, FiTag, FiChevronsRight, FiExternalLink } from "react-icons/fi";

import { createClient } from "../../../prismicio"; // Adjust this path if needed
import styles from "../../../styles/GuideDetailPage.module.css"; // Adjust this path if needed

// --- Rich Text Components for Custom Styling ---
const richTextComponents = {
  paragraph: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  list: ({ children }) => <ul className={styles.list}>{children}</ul>,
  oList: ({ children }) => <ol className={styles.oList}>{children}</ol>,
  image: ({ node }) => (
    <figure className={styles.richImageWrapper}>
      <PrismicNextImage field={node} className={styles.richImage} />
      {node.alt && <figcaption className={styles.richImageCaption}>{node.alt}</figcaption>}
    </figure>
  ),
  embed: ({ node }) => (
    <div
      data-oembed={node.oembed.embed_url}
      data-oembed-type={node.oembed.type}
      data-oembed-provider={node.oembed.provider_name}
      className={styles.embedWrapper}
      dangerouslySetInnerHTML={{ __html: node.oembed.html ?? "" }}
    />
  ),
};


// --- Helper component for rendering comparison links ---
const ComparisonLink = ({ prisLink }) => (
  <PrismicNextLink field={prisLink} className={styles.comparisonButton}>
    {prisLink.text || "View Deal"} <FiExternalLink />
  </PrismicNextLink>
);

// --- Main Page Component ---
export default async function Page({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());
  const { data } = page;
  //console.log(data.comparisons[0].link1);

  const publicationDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className={styles.guideDetailPageContainer}>
      {data.image && data.image.url && (
        <figure className={styles.guideHeaderImageWrapper}>
          <PrismicNextImage
            field={data.image}
            fill
            className={styles.guideHeaderImage}
            priority
          />
          {data.image.alt && (
            <figcaption className={styles.headerImageCaption}>
              {data.image.alt}
            </figcaption>
          )}
        </figure>
      )}

      <div className="container">
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <a href="/">Home</a> <FiChevronsRight size={12} />
            <a href="/guides">Guides</a> <FiChevronsRight size={12} />
            <span>{data.title}</span>
        </nav>

        <header className={styles.guideHeader}>
          <h1 className={styles.guideTitle}>{data.title}</h1>
          <div className={styles.guideMeta}>
            {data.author && <span><FiUser className={styles.metaIcon} /> By {data.author}</span>}
            {publicationDate && <span><FiCalendar className={styles.metaIcon} /> {publicationDate}</span>}
          </div>
        </header>

        <div className={styles.articleBody}>
          <PrismicRichText field={data.guide} components={richTextComponents} />
        </div>

        {data.comparisons && data.comparisons.length > 0 && data.comparisons.title1 && (
          <section className={styles.comparisonsSection}>
            <h2 className={styles.sectionTitle}>Our Top Picks Compared</h2>
            {data.comparisons.map((item, index) => {
              const isThreeCard = item.title3;
              return (
                <div key={index} className={`${styles.comparisonBlock} ${isThreeCard ? styles.threeCard : styles.twoCard}`}>
                  <ComparisonCard item={item} cardNumber={1} />
                  <ComparisonCard item={item} cardNumber={2} />
                  {isThreeCard && <ComparisonCard item={item} cardNumber={3} />}
                </div>
              );
            })}
          </section>
        )}

        {data.endguide && (
             <div className={styles.articleBody}>
                <PrismicRichText field={data.endguide} components={richTextComponents} />
             </div>
        )}

        {data.links && data.links.length > 0 && (
            <div className={styles.finalLinksSection}>
            {/*<h3 className={styles.sectionTitle}>Further Reading & Sources</h3>*/}
                <div className={styles.finalLinksGrid}>
                    {data.links.map((linkItem, index) => (
                        <PrismicNextLink key={index} field={linkItem} className={styles.finalLinkButton}>
                            <span>{linkItem.text || "View more"}</span>
                            <FiExternalLink />
                        </PrismicNextLink>
                    ))}
                </div>
            </div>
        )}

        {page.tags && page.tags.length > 0 && (
            <div className={styles.tagsSection}>
                <h4 className={styles.tagsTitle}><FiTag /> Tags:</h4>
                <div className={styles.tagsList}>
                {page.tags.map(tag => (
                    <a key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tagLink}>
                    {tag}
                    </a>
                ))}
                </div>
            </div>
        )}
      </div>
    </article>
  );
}

// --- Comparison Card Sub-component ---
const ComparisonCard = ({ item, cardNumber }) => {
    const rank = item[`rank${cardNumber}`];
    const image = item[`image${cardNumber}`];
    const title = item[`title${cardNumber}`];
    const nameLink = item[`name${cardNumber}`];
    //const nameText = item[`name${cardNumber}Text`];
    const paragraph = item[`paragraph${cardNumber}`];
    const links = item[`link${cardNumber}`];

    if (!title) return null;

    return (
        <div className={styles.comparisonCard}>
            {rank && <div className={styles.rankBadge}>{rank}</div>}
            <div className={styles.cardImageWrapper}>
                <PrismicNextImage field={image} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {nameLink && nameLink.link_type !== 'Any' &&
                    <PrismicNextLink field={nameLink} className={styles.productNameLink}>
                        <h4>{nameLink.text || 'Learn More'}</h4>
                    </PrismicNextLink>
                }
                <div className={styles.cardParagraph}>
                    {paragraph}
                </div>
                <div className={styles.cardLinks}>
                    {links && links.map((linkItem, linkIndex) => (
                        <ComparisonLink key={linkIndex} prisLink={linkItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Metadata Functions ---
export async function generateMetadata({ params }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("guide");

  return pages.map((page) => ({ uid: page.uid }));
}


