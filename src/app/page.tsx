import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8F6FF] to-[#F0EDFF] px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* Ícone de Sucesso */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-[#9177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Cabeçalho */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            Parabéns!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Você acabou de dar um passo em direção a uma rotina mais leve!
          </p>

          {/* Barra de Progresso */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Acesso ao produto</span>
              <span className="text-[#9177FF] font-medium">94%</span>
            </div>
            <div className="h-2 bg-white rounded-full shadow-inner">
              <div className="h-full bg-gradient-to-r from-[#9177FF] to-[#7B61FF] rounded-full transition-all duration-1000 ease-out"
                   style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8 text-center">
          Próximos passos
        </h2>

        {/* Cards de Próximos Passos */}
        <div className="space-y-6">
          {/* Card 1 - Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-[#9177FF] font-medium">1</span>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-gray-600 text-lg mb-4">
                Acesse seu email para ver as instruções de acesso à plataforma
              </p>
              <div className="text-sm text-gray-500">
                Verifique também sua caixa de spam
              </div>
            </div>
          </div>

          {/* Card 2 - WhatsApp */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-[#9177FF] font-medium">2</span>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-gray-600 text-lg mb-4">
                Entre no grupo exclusivo do WhatsApp e faça parte da Comunidade de Psicólogas Empreendedoras
              </p>
              <a href="https://chat.whatsapp.com/InGI2c8jH8928jRjcjyPJ1" 
                 className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                ENTRAR NO GRUPO
              </a>
              <div className="text-sm text-gray-500 mt-3">
                Fique tranquila, o grupo está silenciado!
              </div>
            </div>
          </div>

          {/* Card 3 - Instagram */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-[#9177FF] font-medium">3</span>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-gray-600 text-lg mb-4">
                Siga a Pluma no Instagram e acompanhe nossos projetos
              </p>
              <a href="https://www.instagram.com/sejapluma/" 
                 className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                SEGUIR NO INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Assinatura */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700">
            Nos vemos em breve!<br />
            <span className="font-medium">Equipe Pluma</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p className="mb-2">Todos os direitos reservados</p>
        <p>© 2025 - SejaPluma | Leveza e eficiência para psicólogas</p>
      </footer>
    </main>
  )
} 