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
            Você acabou de dar um passo importante para transformar sua jornada profissional.
          </p>

          {/* Barra de Progresso */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Acesso ao Produto</span>
              <span className="text-[#9177FF] font-medium">100%</span>
            </div>
            <div className="h-2 bg-white rounded-full shadow-inner">
              <div className="h-full bg-gradient-to-r from-[#9177FF] to-[#7B61FF] rounded-full transition-all duration-1000 ease-out"
                   style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-xl font-serif font-medium text-gray-900 mb-6">
            Próximos passos
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#9177FF] font-medium">1</span>
              </div>
              <p className="text-gray-600">
                Acesse seu email para ver as instruções de acesso à plataforma
              </p>
            </div>
            <div className="flex items-center gap-4 text-left">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#9177FF] font-medium">2</span>
              </div>
              <p className="text-gray-600">
                Entre no nosso grupo exclusivo do WhatsApp para receber suporte
              </p>
            </div>
            <div className="flex items-center gap-4 text-left">
              <div className="w-8 h-8 bg-[#9177FF] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#9177FF] font-medium">3</span>
              </div>
              <p className="text-gray-600">
                Comece sua jornada de transformação agora mesmo!
              </p>
            </div>
          </div>
        </div>

        {/* Botão do WhatsApp */}
        <div className="mb-12">
          <a href="https://chat.whatsapp.com/InGI2c8jH8928jRjcjyPJ1" 
             className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            ENTRAR NO GRUPO DO WHATSAPP
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Fique tranquila, o grupo está silenciado!
          </p>
        </div>

        {/* Assinatura */}
        <div className="text-center">
          <p className="text-xl text-gray-700">
            Nos vemos em breve!<br />
            <span className="font-medium">Equipe Pluma</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>Pluma © 2024 Todos os direitos reservados</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-[#9177FF] hover:text-[#7B61FF] transition-colors">
            Termos de uso
          </a>
          <span>·</span>
          <a href="#" className="text-[#9177FF] hover:text-[#7B61FF] transition-colors">
            Política de Privacidade
          </a>
        </div>
      </footer>
    </main>
  )
} 