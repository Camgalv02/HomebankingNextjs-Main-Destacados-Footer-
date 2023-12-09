import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main/Main'
import Carroussel from '@/components/Main/Carroussel'
import Destacados from '@/components/Main/Destacados'
import Contacto from '@/components/Main/Contacto'

function index() {
    return (
        <>
            <Header />
            <Carroussel/>
            <Destacados/>
            <Main/>
            <Footer/>
        </>
    )
}

export default index