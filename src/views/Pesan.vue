<template>
    <div class="pl-10 pr-16 py-8">
        <div class="grid grid-cols-2 gap-8">
            <div class="bg-white w-full px-8 py-4 rounded-md border border-slate-500 border-opacity-25">
                <h2 class="text-2xl text-black">Pesan Cetak</h2>
                <p class="text-lg text-black">Cetak dokumen, file atau desainmu sekarang</p>
                <RouterLink to="/pesan/cetak" class="text-xl float-right bg-orange-500 px-6 py-1 text-white rounded-lg shadow-md">Pesan</RouterLink>
            </div>
            <div class="bg-white w-full px-8 py-4 rounded-md border border-slate-500 border-opacity-25">
                <h2 class="text-2xl text-black">Pesan Desain</h2>
                <p class="text-lg text-black">Belum punya desain? Yuk pesan sekarang</p>
                <RouterLink to="/pesan/desain" class="text-xl float-right bg-orange-500 px-6 py-1 text-white rounded-lg shadow-md">Pesan</RouterLink>
            </div>
        </div>
    </div>
</template>