<script>
export default {
  name: "PageChatView"
}
</script>

<template>
  <div class="flex gap-0 justify-center bg-neutral-950 max-md:flex-wrap">
    <!-- Sidebar Section -->
    <aside class="flex flex-col py-20 border-r bg-neutral-950 border-neutral-900 max-md:hidden">
      <nav class="flex flex-col items-center">
        <a class="flex items-center justify-center px-4 py-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b29dd362198d8be1849f933337056af4850c72c03751783c03d567db5d1bc646?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 1" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/000756d8c61543ba13f4bf403067e0c5a20f52a66735c44e22fd81b7b9aff071?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 2" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7158777285afd0430f5bae8e0354e8f59e4eb5316431d9088558ec8b08752ef0?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 3" />
        </a>
      </nav>
      <section class="flex flex-col items-center mt-8 pt-8">
        <a class="flex items-center justify-center px-4 py-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3957459846434a3838927a6a327deb1e7a135ffe115f6ac3bffe200691718b17?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 4" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16abf5ee93cd1c969d76107d684e2f961b12ada4f3a5a5f14cc56de1a985c3c0?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 5" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 6" />
        </a>
      </section>
      <section class="flex flex-col items-center mt-8 pt-8">
        <a class="flex items-center justify-center px-4 py-2 bg-red-700 rounded-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae209181622ab63cee7d5f017607bedde08be6571c0055aa661334b74aba039c?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6 border-2 border-white rounded-full" alt="Icon 7" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 8" />
        </a>
        <a class="flex items-center justify-center px-4 py-2 mt-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad65cfda22d5bf901e4ed8de5d000f52ece88ad852a9a4a57fba29bfdcb352e4?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="w-6" alt="Icon 9" />
        </a>
      </section>
    </aside>

    <!-- Chat List Section -->
    <main class="flex flex-col pt-8 border-r bg-neutral-950 border-neutral-900 leading-[150%]">
      <header class="flex flex-col px-6 max-md:px-5">
        <h1 class="text-xl font-semibold text-white">Chat</h1>
        <div class="flex items-center gap-3 px-3 py-2 mt-6 text-base rounded-lg border bg-neutral-900 border-neutral-700 text-neutral-500">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d180ede1e5a24e1790ffc4498c2d09888ca77d75df2507d9db1d38978cc0fcb?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Search Icon" />
          <input type="search" placeholder="Search chats" class="outline-none bg-transparent flex-1 text-ellipsis" />
        </div>
      </header>
      <section class="flex flex-col mt-6 overflow-y-auto">
        <!-- Chat List Items -->
        <article class="flex gap-4 px-4 py-3 font-medium bg-red-700 focus:outline-none hover:bg-red-600 cursor-pointer" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac53774414684ed52e6c05de75128928a61728870293cbb31c0ffd97e169bc2?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-16 rounded-full" alt="Helena Hills" />
          <div class="flex flex-col flex-1 my-auto">
            <h2 class="text-xl text-white">Helena Hills</h2>
            <p class="text-base text-ellipsis text-neutral-300">Will head to the Help Center...</p>
          </div>
        </article>
        <article class="flex gap-4 px-4 py-3 rounded-lg bg-neutral-900 focus:outline-none hover:bg-neutral-800 cursor-pointer" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b4d659f0b57dd68422c7c1c0013db36f6d99bb2e23a7633460785cd93356203?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-16 rounded-full" alt="Carlo Emilio" />
          <div class="flex flex-col flex-1 my-auto">
            <h2 class="text-xl font-medium text-white">Carlo Emilio</h2>
            <p class="text-base text-ellipsis text-neutral-500">Let’s go</p>
          </div>
        </article>
        <article class="flex gap-4 px-4 py-3 rounded-lg bg-neutral-900 focus:outline-none hover:bg-neutral-800 cursor-pointer" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1044473a14cda1e936ac1cdb8aee5a91f637e1513449bedd86b469242dc56bd?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-16 rounded-full" alt="Oscar Davis" />
          <div class="flex flex-col flex-1 my-auto">
            <h2 class="text-xl font-medium text-white">Oscar Davis</h2>
            <p class="text-base text-ellipsis text-neutral-500">Trueeeeee</p>
          </div>
        </article>
        <!-- More chat items ... -->
      </section>
    </main>

    <!-- Chat Section -->
    <section class="flex flex-col px-6 py-7 text-base leading-6 bg-neutral-950 max-md:px-5 max-md:max-w-full flex-1">
      <header class="flex flex-col max-md:max-w-full">
        <div class="flex z-10 gap-5 justify-between items-start px-6 pt-4 -mt-8 w-full border-b bg-neutral-950 border-neutral-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div class="flex gap-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f1919f8880a433a8737762b18775f8696788800f713a52b619d9e443c48724?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-12 rounded-full" alt="Helena Hills" />
            <div class="flex flex-col">
              <h2 class="font-medium text-white">Helena Hills</h2>
              <p class="text-ellipsis text-neutral-500">Active 20m ago</p>
            </div>
          </div>
        </div>
        <div class="justify-center self-end px-4 py-3 mt-2 font-medium text-white bg-red-700 rounded-2xl">
          This is the main chat template
        </div>
      </header>
      <div class="mt-9 text-center text-neutral-500 max-md:max-w-full">
        Nov 30, 2023, 9:41 AM
      </div>
      <section class="flex flex-col items-start pr-20 mt-9 font-medium text-white max-md:pr-5 max-md:max-w-full">
        <div class="justify-center px-4 py-3 whitespace-nowrap rounded-3xl bg-neutral-800">
          Oh?
        </div>
        <div class="justify-center px-4 py-3 mt-2 whitespace-nowrap rounded-3xl bg-neutral-800">
          Cool
        </div>
        <div class="justify-center px-4 py-3 mt-2 rounded-3xl bg-neutral-800">
          How does it work?
        </div>
      </section>
      <section class="flex flex-col items-end pl-20 mt-9 font-medium text-white max-md:pl-5 max-md:max-w-full">
        <div class="justify-center px-4 py-3 whitespace-nowrap bg-red-700 rounded-2xl">
          Simple
        </div>
        <div class="justify-center px-4 py-3 mt-2 max-w-full leading-6 bg-red-700 rounded-2xl w-[480px] max-md:max-w-full">
          You just edit any text to type in the conversation you want to show, and delete any bubbles you don’t want to use
        </div>
        <div class="justify-center px-4 py-3 mt-2 whitespace-nowrap bg-red-700 rounded-2xl">
          Boom
        </div>
      </section>
      <section class="flex flex-col items-start pr-20 mt-9 font-medium text-white max-md:pr-5 max-md:max-w-full">
        <div class="justify-center px-4 py-3 whitespace-nowrap rounded-3xl bg-neutral-800">
          Hmmm
        </div>
        <div class="justify-center px-4 py-3 mt-2 rounded-3xl bg-neutral-800">
          I think I get it
        </div>
        <div class="justify-center px-4 py-3 mt-2 rounded-3xl bg-neutral-800 max-md:max-w-full">
          Will head to the Help Center if I have more questions tho
        </div>
      </section>
      <form class="flex gap-4 px-4 py-2 mt-8 rounded-lg border bg-neutral-900 border-neutral-700 text-neutral-500 max-md:flex-wrap">
        <label for="messageInput" class="sr-only">Enter your message</label>
        <input id="messageInput" type="text" placeholder="Enter your message" aria-label="Enter your message" class="flex-1 text-ellipsis max-md:max-w-full bg-transparent outline-none" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d34024ace1cc1678261f6d2af027ed44e4ce1a0a3b5384349c7772c4da405e1?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Send Icon 1" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9432ba68df7a4aa97d33ac355c8e33e288f6afba050db4410438593ee51fbc1f?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Send Icon 2" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0de5d4861d3d36a4402a46c2e5a595b5d66c24acbd0a2df3042bf3759bc5748d?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Send Icon 3" />
      </form>
    </section>

    <!-- Profile Section -->
    <aside class="flex flex-col px-2 pt-6 pb-20 border-l bg-neutral-950 border-neutral-900 leading-[150%]">
      <div class="flex flex-col mx-4 text-center max-md:mx-2.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34e6291c3a6d2c974637ae3ce1611fb92250d94fe1ad31fdb2c5bef8eda2dfd6?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="self-center w-32 max-w-full rounded-full" alt="Profile Image" />
        <div class="flex flex-col mt-6">
          <h2 class="text-xl font-medium text-white">Helena</h2>
          <p class="text-base text-ellipsis text-neutral-500">Active 20m ago</p>
        </div>
      </div>
      <button class="justify-center px-4 py-2 mx-4 mt-6 text-base font-medium text-white bg-red-700 rounded-lg max-md:px-5 max-md:mx-2.5">
        View profile
      </button>
      <section class="flex flex-col mt-4 text-base font-medium text-white">
        <div class="flex gap-4 px-4 py-2 rounded-lg bg-neutral-900">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/000756d8c61543ba13f4bf403067e0c5a20f52a66735c44e22fd81b7b9aff071?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Search Icon" />
          <p class="flex-1 text-ellipsis">Search chat</p>
        </div>
        <div class="flex gap-4 px-4 py-2 whitespace-nowrap rounded-lg bg-neutral-900">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0b7379b43d80c3c47d87dd7d424cef2aad0572c4e132d4a6d51a4f00092d04?apiKey=11da4ba8aa9d4e709b5a9d1712cae12f&" class="shrink-0 w-6" alt="Media Icon" />
          <p class="flex-1 text-ellipsis">Media</p>
        </div>
      </section>
    </aside>
  </div>
</template>
