<template>
    <aside class="bg-stone-50 w-[266px] flex flex-col items-center gap-6 py-3 shadow-lg shadow-slate-400 z-10">
        <div class="text-orange-500 text-[32px] font-bold">CetaKuy</div>
        <div class="flex flex-col w-full px-6 gap-4">
            <RouterLink
                to="/pesan"
                @click="$emit('ubahActivePage', 'pesan')"
                :class="[activePage == 'pesan' ? 'text-orange-400 shadow-orange-300 border-orange-500' : 'text-neutral-400 shadow-slate-300 border-slate-500 hover:text-orange-300 hover:-translate-y-0.5 hover:border-orange-500 hover:border-opacity-25 hover:shadow-orange-200']"
                class="bg-stone-50 font-medium w-full py-2 text-center rounded-md shadow-lg ease-in duration-300 border border-opacity-25">
                Pesan
            </RouterLink>
            <RouterLink
            to="/pengerjaan"
                @click="$emit('ubahActivePage', 'pengerjaan')"
                :class="[activePage == 'pengerjaan' ? 'text-orange-400 shadow-orange-300 border-orange-500' : 'text-neutral-400 shadow-slate-300 border-slate-500 hover:text-orange-300 hover:-translate-y-0.5 hover:border-orange-500 hover:border-opacity-25 hover:shadow-orange-200']"
                class="bg-stone-50 font-medium w-full py-2 text-center rounded-md shadow-lg ease-in duration-300 border border-opacity-25">
                Pengerjaan
            </RouterLink>
            <RouterLink
            to="/riwayat"
                @click="$emit('ubahActivePage', 'riwayat')"
                :class="[activePage == 'riwayat' ? 'text-orange-400 shadow-orange-300 border-orange-500' : 'text-neutral-400 shadow-slate-300 border-slate-500 hover:text-orange-300 hover:-translate-y-0.5 hover:border-orange-500 hover:border-opacity-25 hover:shadow-orange-200']"
                class="bg-stone-50 font-medium w-full py-2 text-center rounded-md shadow-lg ease-in duration-300 border border-opacity-25">
                Riwayat
            </RouterLink>
        </div>
    </aside>
</template>

<script setup>
const props = defineProps({
    activePage: String
})

</script>