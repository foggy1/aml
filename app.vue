<script lang="ts" setup>
  import 'tailwindcss/tailwind.css'
</script>
<template>
  <Head>
    <Title>Austin Lanari</Title>
    <Meta name="description" content="Los Angeles" />
    <Link rel="icon" type="image/png" href="/favicon.png" />
    <!-- Fathom - beautiful, simple website analytics -->
    <Script src="https://cdn.usefathom.com/script.js" data-site="RUMVOGCC" defer />
    <!-- / Fathom -->
  </Head>
  <main class='text-lg p-4 max-w-lg'>
    <div class='mb-6'>
      <h1 class=''>Austin Lanari</h1>
      <p class=''>Programmer / Writer</p>
      <p class=''>Los Angeles, CA</p>
    </div>
    <div class='mb-6 grid grid-cols-3 gap cols'>
        <time class='col-span-1'>2022 - 2023</time>
        <div class='col-span-2'>
            <span class='underline'><a rel="noreferrer" target="_blank" href='https://dockyard.com'>Dockyard</a></span><span class='mr-4'> (contract)</span>
            <span class='text-slate-500'>Senior Elixir Consultant on a Dockyard-led team for their Adobe contract</span>
        </div>
      <time class='col-span-1'>2021 - 2022</time>
        <div class='col-span-2'>
        <span class='underline mr-4'><a rel="noreferrer" target="_blank" href='https://versussystems.com'>Versus Systems</a></span>
        <span class='text-slate-500'>Driving user engagement with advertisers</span>
      </div>
      <time class='col-span-1'>2016 - 2021</time>
      <div class='col-span-2'>
        <span class='underline mr-4'><a rel="noreferrer" target="_blank" href='https://vody.com'>Vody</a></span>
        <span class='text-slate-500'>Collating streaming media metadata to support machine learning</span>
      </div>
    </div>
    <div class='mb-6 space-y-4'>
      <p>Software engineer with large scale production experience of Elixir-powered backends, React-powered frontends, and more. Excited about making things that work for users and future developers.</p>
      <p>Published non-fiction in the Eisner-nominated <a class='underline' el="noreferrer" target="_blank" href='https://www.fantagraphics.com/products/the-comics-journal-304'>The Comics Journal #304</a>.</p>
    </div>
    <div class='underline'>
      <a rel="noreferrer" target="_blank" href='mailto:austin@foggy.llc'>austin@foggy.llc</a>
    </div>
  </main>
</template>
