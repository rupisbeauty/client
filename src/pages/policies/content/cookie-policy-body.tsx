import { chakra } from '@chakra-ui/react';

const companyName = 'Rupi Beauty Studio';
const domain = 'https://www.rupibeautystudio.com';

export const CookiePolicyBody = () => (
  <>
    <chakra.p pb={12} textAlign="center" color="gray.500">
      {`This is the Cookie Policy for ${companyName}, accessible from
      ${domain}/policies/cookie`}
    </chakra.p>

    <chakra.h2 py={4} fontFamily="body">
      <strong>What Are Cookies</strong>
    </chakra.h2>

    <chakra.p py={4}>
      As is common practice with almost all professional websites this site uses
      cookies, which are tiny files that are downloaded to your computer, to
      improve your experience. This page describes what information they gather,
      how we use it and why we sometimes need to store these cookies. We will
      also share how you can prevent these cookies from being stored however
      this may downgrade or &apos;break&apos; certain elements of the sites
      functionality.
    </chakra.p>

    <chakra.h2 py={4} fontFamily="body">
      <strong>How We Use Cookies</strong>
    </chakra.h2>

    <chakra.p py={4}>
      We use cookies for a variety of reasons detailed below. Unfortunately in
      most cases there are no industry standard options for disabling cookies
      without completely disabling the functionality and features they add to
      this site. It is recommended that you leave on all cookies if you are not
      sure whether you need them or not in case they are used to provide a
      service that you use.
    </chakra.p>

    <chakra.h2 py={4} fontFamily="body">
      <strong>Disabling Cookies</strong>
    </chakra.h2>

    <chakra.p py={4}>
      You can prevent the setting of cookies by adjusting the settings on your
      browser (see your browser Help for how to do this). Be aware that
      disabling cookies will affect the functionality of this and many other
      websites that you visit. Disabling cookies will usually result in also
      disabling certain functionality and features of the this site. Therefore
      it is recommended that you do not disable cookies. This Cookies Policy was
      created with the help of the{' '}
      <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
        Cookies Policy Generator
      </a>
      .
    </chakra.p>
    <chakra.h2 py={4} fontFamily="body">
      <strong>The Cookies We Set</strong>
    </chakra.h2>

    <ul>
      <li>
        <chakra.h3 py={4} fontFamily="body">
          Account related cookies
        </chakra.h3>
        <chakra.p>
          If you create an account with us then we will use cookies for the
          management of the signup process and general administration. These
          cookies will usually be deleted when you log out however in some cases
          they may remain afterwards to remember your site preferences when
          logged out.
        </chakra.p>
      </li>

      <li>
        <chakra.h3 py={4} fontFamily="body">
          Login related cookies
        </chakra.h3>
        <chakra.p>
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </chakra.p>
      </li>

      <li>
        <chakra.h3 py={4} fontFamily="body">
          Email newsletters related cookies
        </chakra.h3>
        <chakra.p>
          This site offers newsletter or email subscription services and cookies
          may be used to remember if you are already registered and whether to
          show certain notifications which might only be valid to
          subscribed/unsubscribed users.
        </chakra.p>
      </li>

      <li>
        <chakra.h3 py={4} fontFamily="body">
          Forms related cookies
        </chakra.h3>
        <chakra.p>
          When you submit data to through a form such as those found on contact
          pages or comment forms cookies may be set to remember your user
          details for future correspondence.
        </chakra.p>
      </li>

      <li>
        <chakra.h3 py={4} fontFamily="body">
          Site preferences cookies
        </chakra.h3>
        <chakra.p>
          In order to provide you with a great experience on this site we
          provide the functionality to set your preferences for how this site
          runs when you use it. In order to remember your preferences we need to
          set cookies so that this information can be called whenever you
          interact with a page is affected by your preferences.
        </chakra.p>
      </li>
    </ul>

    <chakra.h2 py={4} fontFamily="body">
      <strong>Third Party Cookies</strong>
    </chakra.h2>

    <chakra.p py={4}>
      In some special cases we also use cookies provided by trusted third
      parties. The following section details which third party cookies you might
      encounter through this site.
    </chakra.p>

    <ul>
      <li>
        <chakra.p py={4}>
          Third party analytics are used to track and measure usage of this site
          so that we can continue to produce engaging content. These cookies may
          track things such as how long you spend on the site or pages you visit
          which helps us to understand how we can improve the site for you.
        </chakra.p>
      </li>

      <li>
        <chakra.p py={4}>
          From time to time we test new features and make subtle changes to the
          way that the site is delivered. When we are still testing new features
          these cookies may be used to ensure that you receive a consistent
          experience whilst on the site whilst ensuring we understand which
          optimisations our users appreciate the most.
        </chakra.p>
      </li>

      <li>
        <chakra.p py={4}>
          As we sell products it&apos;s important for us to understand
          statistics about how many of the visitors to our site actually make a
          purchase and as such this is the kind of data that these cookies will
          track. This is important to you as it means that we can accurately
          make business predictions that allow us to monitor our advertising and
          product costs to ensure the best possible price.
        </chakra.p>
      </li>

      <li>
        <chakra.p py={4}>
          We also use social media buttons and/or plugins on this site that
          allow you to connect with your social network in various ways. For
          these to work the following social media sites including; Instagram,
          Twitter, Facebook, Pintrest, among others, will set cookies through
          our site which may be used to enhance your profile on their site or
          contribute to the data they hold for various purposes outlined in
          their respective privacy policies.
        </chakra.p>
      </li>
    </ul>

    {/* <chakra.h2 py={4} fontFamily="body">
      <strong>More Information</strong>
    </chakra.h2>

    <chakra.p py={4}>
      Hopefully that has clarified things for you and as was previously
      mentioned if there is something that you aren&apos;t sure whether you need
      or not it&apos;s usually safer to leave cookies enabled in case it does
      interact with one of the features you use on our site.
    </chakra.p>

    <chakra.p py={4}>
      For more general information on cookies, please read{' '}
      <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
        the Cookies Policy article
      </a>
      .
    </chakra.p>

    <chakra.p py={4}>
      However if you are still looking for more information then you can contact
      us through one of our preferred contact methods:
    </chakra.p>

    <chakra.ul
      p={3}
      border="1px solid"
      borderRadius="md"
      borderColor="gray.300"
    >
      <li>
        <strong>Email:</strong> <em>{email}</em>
      </li>
    </chakra.ul> */}
  </>
);
