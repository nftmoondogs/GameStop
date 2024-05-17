import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import TwitterVideoEmbeds from '@/components/TwitterVideoEmbeds';
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import image1 from '@/images/photos/image-1.png';
import image2 from '@/images/photos/image-2.png';
import image3 from '@/images/photos/image-3.png';
import image4 from '@/images/photos/image-4.png';
import pumpFunImage from '@/images/photos/pump.gif';
import logoAirbnb from '@/images/logos/airbnb.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoStarbucks from '@/images/logos/starbucks.svg';
import logoDevProtocol from '@/images/logos/devprotocol.png';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-8 w-8 fill-red-500 transition group-hover:fill-red-700 dark:fill-red-400 dark:group-hover:fill-red-600" />
    </Link>
  );
}

function Resume() {
  let resume = [
    {
      company: 'Dev Protoocol',
      title: 'Program Manager',
      logo: logoDevProtocol,
      start: 'Jan 2022',
      end: 'Nov 2022',
    },
    {
      company: 'Dev Protocol',
      title: 'Developer Relations',
      logo: logoDevProtocol,
      start: 'Oct 2021',
      end: '2019',
    },
    {
      company: 'Dev Protocol',
      title: 'DevRel Intern',
      logo: logoDevProtocol,
      start: 'Jul 2021',
      end: 'Oct 2021',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="./Villafuerte-Vincent_Resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-white dark:bg-white sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          $GME - GameStop
        </title>
        <meta
          name="description"
          content=" Hi, I&apos;m Vincent, an Octocat-loving developer community enthusiast based in the Philippines."
        />
      </Head>
      <Container className="mt-9 flex flex-col items-center text-center relative">
        <Link href="https://pump.fun/AjEXy1rdYvwWvvtJBai13xBVV6D98jXx51Sc795e1RRu" className="absolute top-0 right-0 mt-4 mr-4">
          <Image
            src={pumpFunImage}
            alt="Pump Fun"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </Link>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className="text-red-500">$GME</span> Token
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className="text-red-500">I like the token!</span>
          </h1>

          <p className="mt-6 text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500">
          Future generations will look back and say Good men stood here

good men fought and died on this ground...

As they worked as a collective force buying and hodling $GME

since the spawn of crypto market

two classes of people have been pitted against each other...

Eternal enemies, forever forced and fated to combat: lions and hyenas.

These lions... these Whales have it all

Billions of dollars

bailouts for reckless trades, these dirty fking crimal bastards.

And then theres us.

The working man, The average joe.

What do we have?

What the fk do we have?

They literally call us Degens.

These lions, these whales guys, were born with a silver spoons in their mouths.

The Top 1% of the 1%.

They have massive bank accounts, eat medium rare grade A Wagyu steak.

What the fk is that?

That sounds delicious.

With truffle shaving for launch.

Thats fk!

They have blow and escorts on their yacht parties.

Why do we hate these guys?

Then you know what they will tell these escorts?

When the smoking hot blonde asks them, Like, how do you have so much money?

You know what they say? They say Ha, Degen money, babe. Degen Money.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <SocialLink
              href="https://twitter.com/gmesoltoken"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://t.me/gmecommunity"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Photos />
        </div>

          <TwitterVideoEmbeds />

      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
