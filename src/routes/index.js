import { createRouter, createWebHistory } from 'vue-router'

// import Home from './../views/Home.vue'
// import About from './../views/About.vue'
// import Movies from './../views/Movies.vue'

const Pesan = () => import('./../views/Pesan.vue')
// const About = () => import('./../views/About.vue')
// const Movies = () => import('./../views/Movies.vue')

const routes = [
    { path: '/pesan', component: Pesan },
    { path: '/pesan/cetak', component: () => import('./../views/PesanCetak.vue') },
    { path: '/pesan/desain', component: () => import('./../views/PesanDesain.vue') },
    { path: '/pengerjaan', component: () => import('./../views/Pengerjaan.vue') },
    { path: '/riwayat', component: () => import('./../views/Riwayat.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;