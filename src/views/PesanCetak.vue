<template>
    <div class="pl-10 pr-16 py-8">
        <div class="flex flex-col gap-2 bg-white rounded-lg px-8 py-4">
            <h1 class="text-orange-500 font-semibold text-xl">Pesan Cetak</h1>
            <div class="flex items-end gap-8">
                <div class="w-full flex flex-col gap-2">
                    <div class="flex flex-col gap-1 w-full">
                        <label for="nama-pesanan" class="font-md text-base text-slate-700">
                            Nama Pesanan
                        </label>
                        <input type="text" name="nama-pesanan" id="nama-pesanan"
                            class="w-full border border-slate-300 rounded-md py-0.5">
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label for="deskripsi" class="font-md text-base text-slate-700">
                            Deskripsi
                        </label>
                        <textarea type="text" name="deskripsi" id="deskripsi"
                            class="w-full border border-slate-300 rounded-md text-slate-700 focus:outline-none px-2 py-1"></textarea>
                    </div>
                </div>
                <button class="rounded-md bg-orange-500 text-white px-5 py-1 h-fit">Pesan</button>
            </div>
        </div>
        <h1 class="text-green-400">Tes</h1>
    </div>
</template>

<script setup>

</script>