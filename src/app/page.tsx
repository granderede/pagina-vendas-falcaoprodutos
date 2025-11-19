"use client";

import { Check, TrendingUp, Shield, Zap, Star, Clock, Target, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FalcaoMetodos() {
  const handleCheckout = () => {
    window.location.href = "https://app.monetizze.com.br/checkout/DXP365721";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5554999934232", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section - SIMPLIFICADO E ORGANIZADO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
        
        <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            
            {/* Logo do Falcão */}
            <div className="flex justify-center mb-6">
              <img 
                src="https://falcaodabet.com/wp-content/uploads/2024/10/Design-sem-nome-47-e1729739463120.png" 
                alt="Falcão da Bet" 
                className="h-24 sm:h-32 md:h-40 w-auto object-contain"
              />
            </div>

            {/* Badge Simples */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Método Comprovado</span>
            </div>

            {/* Headline Limpo */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ganhe Dinheiro Todos os Dias com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                Oportunidades Reais
              </span>
            </h1>

            {/* Subtítulo Direto */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bugs, superodds e estratégias exclusivas que extraem lucro das casas de apostas.
              <br />
              <span className="text-emerald-400 font-semibold">Sem risco, sem enrolação.</span>
            </p>

            {/* CTA Único e Forte */}
            <div className="pt-4">
              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg px-12 py-7 rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <DollarSign className="w-6 h-6 mr-2" />
                Começar Agora por R$ 59,90/mês
              </Button>
            </div>

            {/* Social Proof Organizado */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                    alt="Membro" 
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
                    alt="Membro" 
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" 
                    alt="Membro" 
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
                    alt="Membro" 
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                </div>
                <span className="text-sm font-medium">+2.847 membros</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 (1.234 avaliações)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-20 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              O Que Você Recebe no <span className="text-emerald-400">FalcãoMétodos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oportunidades diárias entregues direto no seu celular
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Bugs e Falhas Identificadas",
                description: "Encontramos erros nos sites e mapas de jogos ao vivo que geram oportunidades de lucro garantido"
              },
              {
                icon: TrendingUp,
                title: "SuperOdds Exclusivas",
                description: "Odds infladas e com valor real, identificadas pela nossa equipe antes que sejam corrigidas"
              },
              {
                icon: Clock,
                title: "Delay ao Vivo",
                description: "Método exclusivo para assistir jogos à frente das casas de apostas e aproveitar o delay"
              },
              {
                icon: DollarSign,
                title: "Promoções Lucrativas",
                description: "Estratégias para extrair dinheiro real de bônus, rodadas grátis e promoções das casas"
              },
              {
                icon: Shield,
                title: "Sem Risco Real",
                description: "Todas as oportunidades são de baixo risco ou risco zero, focadas em falhas do sistema"
              },
              {
                icon: Zap,
                title: "Alertas em Tempo Real",
                description: "Notificações instantâneas quando surgem novas oportunidades para você agir rápido"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-emerald-500/50">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              O Que Nossos Membros Dizem
            </h2>
            <p className="text-xl text-gray-400">Resultados reais de pessoas reais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos M.",
                role: "Membro há 4 meses",
                text: "Já fiz mais de R$ 8.500 usando os métodos do Falcão. As oportunidades chegam todo dia e são muito fáceis de executar. Melhor investimento que já fiz!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Juliana S.",
                role: "Membro há 2 meses",
                text: "Estava cética no início, mas os bugs e superodds realmente funcionam. Já paguei a assinatura 15x só no primeiro mês. Recomendo demais!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Roberto P.",
                role: "Membro há 6 meses",
                text: "O método do delay ao vivo é sensacional. Consigo ver os gols antes das casas ajustarem as odds. Lucro consistente todo mês!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Amanda L.",
                role: "Membro há 3 meses",
                text: "Nunca tinha conseguido lucrar com apostas até conhecer o FalcãoMétodos. Agora tenho uma renda extra garantida todo mês. Obrigada, Falcão!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Felipe R.",
                role: "Membro há 5 meses",
                text: "As estratégias de promoções são incríveis. Já extraí mais de R$ 3.000 só de bônus e rodadas grátis. Vale cada centavo da assinatura!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Mariana T.",
                role: "Membro há 1 mês",
                text: "Entrei faz 1 mês e já recuperei o investimento na primeira semana. Os alertas em tempo real fazem toda diferença. Estou muito satisfeita!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=faces"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30"
                  />
                  <div>
                    <p className="text-base font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Como Funciona?
            </h2>
            <p className="text-xl text-gray-400">Simples, rápido e eficiente</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Assine o App",
                description: "Faça sua assinatura mensal por apenas R$ 59,90 e tenha acesso imediato ao aplicativo"
              },
              {
                step: "2",
                title: "Receba Oportunidades",
                description: "Todo dia você recebe alertas com bugs, superodds e estratégias prontas para usar"
              },
              {
                step: "3",
                title: "Execute e Lucre",
                description: "Siga as instruções simples e comece a lucrar com as oportunidades identificadas"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-2xl font-bold text-white mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 border-emerald-500/30 p-12 max-w-4xl mx-auto text-center">
            <Shield className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Garantia de 7 Dias
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Se você não ficar satisfeito com as oportunidades ou não conseguir lucrar nos primeiros 7 dias, 
              devolvemos 100% do seu dinheiro. <span className="text-emerald-400 font-semibold">Sem perguntas, sem burocracia.</span>
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto Para Começar a <span className="text-emerald-400">Lucrar Hoje?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Junte-se a mais de 2.800 membros que já estão lucrando com o FalcãoMétodos
            </p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 mb-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-base mb-2">Assinatura Mensal</p>
                  <p className="text-5xl font-bold text-white">R$ 59,90<span className="text-xl text-gray-400">/mês</span></p>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  {[
                    "Oportunidades diárias ilimitadas",
                    "Alertas em tempo real",
                    "Suporte exclusivo",
                    "Atualizações constantes",
                    "Garantia de 7 dias"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                size="lg" 
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <DollarSign className="w-6 h-6 mr-2" />
                GARANTIR MINHA VAGA AGORA
              </Button>

              <p className="text-sm text-gray-400 mt-4">
                Pagamento seguro • Cancele quando quiser • Suporte 24/7
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">FalcãoMétodos</h3>
          <p className="text-base text-gray-400 mb-4">Por Falcão dos Métodos</p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6">
            © 2024 FalcãoMétodos. Todos os direitos reservados. 
            Este produto não garante lucros e os resultados podem variar. 
            Aposte com responsabilidade.
          </p>
          
          {/* WhatsApp de Suporte */}
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <MessageCircle className="w-5 h-5" />
            <span className="text-base font-medium">Suporte WhatsApp:</span>
            <button 
              onClick={handleWhatsApp}
              className="text-base font-bold hover:text-emerald-300 transition-colors underline"
            >
              (54) 99993-4232
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
