<template>
  <Head>
    <Link :href="useBaseURL('/favicon/apple-touch-icon.png')" rel="apple-touch-icon" sizes="180x180" />
    <Link :href="useBaseURL('/favicon/favicon-32x32.png')" rel="icon" sizes="32x32" type="image/png" />
    <Link :href="useBaseURL('/favicon/favicon-16x16.png')" rel="icon" sizes="16x16" type="image/png" />
    <Link :href="useBaseURL('/favicon/site.webmanifest')" rel="manifest" />
    <Link color="#5bbad5" :href="useBaseURL('/assets/favicon/safari-pinned-tab.svg')" rel="mask-icon" />
    <Link :href="useBaseURL('/favicon/favicon.ico')" rel="shortcut icon" />
    <Meta name="msapplication-TileColor" content="#b91d47" />
    <Meta name="msapplication-config" :content="useBaseURL('/favicon/browserconfig.xml')" />
    <Meta name="theme-color" content="#424242" />
  </Head>
</template>
