import { ArrowRight, HandCoins, Heart, Shield, Zap } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center">
          <div className="flex items-center text-amber-500 font-bold text-xl">
            <HandCoins className='h-6 w-6 mr-2' />
            <span>ApoiaTec</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Plataforma para criadores de conteúdo
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400">
                Monetize seu publico de forma descomplicada
              </h1>
              <p className="text-lg tex-gray-600 max-w-2xl mx-auto">
                Receba doações diretamente dos seus seguidores através de uma pagina personalizada e elegante, sem complicações.
              </p>
              <div className="pt-4">
                <form>
                  <Button
                  type='submit'
                  size='lg'
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 h-12"
                  >
                    Começar Agora
                    <ArrowRight className='ml-12 h-4 w-4' />
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
              icon={<Zap className="h-8 w-8 text-amber-600" />}
              title="Rápido e Simples"
              description="Configure sua página em minitos e começe a receber doações imediatamente."
              />
              <FeatureCard
              icon={<Heart className="h-8 w-8 text-amber-600" />}
              title="Conexão direta"
              description="Crie uma conexão mais próxima com seus apoiadores através de mensagens personalizadas."
              />

              <FeatureCard
              icon={<Shield className="h-8 w-8 text-amber-600" />}
              title="Pagamento seguros"
              description="Transações protegidas e transferências automáticas para sua conta bancária."
              />
              
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
