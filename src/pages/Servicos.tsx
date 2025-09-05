import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      title: "Instalações Elétricas Industriais",
      icon: "⚡",
      description: "Projetos e execução de sistemas elétricos completos para indústrias",
      features: [
        "Projeto elétrico detalhado",
        "Instalação de quadros de comando",
        "Cabeamento estruturado",
        "Sistemas de proteção",
        "Iluminação industrial",
        "Sistemas de emergência"
      ],
      applications: ["Indústrias de grande porte", "Fábricas", "Complexos industriais"]
    },
    {
      title: "Sistemas Hidráulicos",
      icon: "🔧",
      description: "Soluções completas em hidráulica para processos industriais",
      features: [
        "Projeto hidráulico",
        "Instalação de tubulações",
        "Bombas e sistemas de pressão",
        "Sistemas de filtragem",
        "Controle de fluxo",
        "Manutenção preventiva"
      ],
      applications: ["Processos químicos", "Sistemas de refrigeração", "Tratamento de água"]
    },
    {
      title: "Montagem Eletromecânica",
      icon: "⚙️",
      description: "Montagem e instalação de equipamentos eletromecânicos",
      features: [
        "Montagem de equipamentos",
        "Instalação de motores",
        "Sistemas de transmissão",
        "Alinhamento de máquinas",
        "Comissionamento",
        "Testes funcionais"
      ],
      applications: ["Linhas de produção", "Equipamentos rotativos", "Sistemas automatizados"]
    },
    {
      title: "Projetos Elétricos",
      icon: "📐",
      description: "Desenvolvimento de projetos elétricos conforme normas técnicas",
      features: [
        "Projetos executivos",
        "Cálculos elétricos",
        "Dimensionamento",
        "Adequação às normas",
        "Memorial descritivo",
        "As built"
      ],
      applications: ["Novas instalações", "Modernização", "Adequação normativa"]
    },
    {
      title: "Manutenção Industrial",
      icon: "🛠️",
      description: "Serviços de manutenção preventiva e corretiva",
      features: [
        "Manutenção preventiva",
        "Manutenção corretiva",
        "Diagnósticos técnicos",
        "Termografia",
        "Análise de vibração",
        "Relatórios técnicos"
      ],
      applications: ["Contratos de manutenção", "Paradas programadas", "Emergências"]
    },
    {
      title: "Modernização e Retrofit",
      icon: "🔄",
      description: "Modernização de instalações existentes para maior eficiência",
      features: [
        "Análise da instalação atual",
        "Projeto de modernização",
        "Substituição de equipamentos",
        "Adequação normativa",
        "Otimização energética",
        "Documentação técnica"
      ],
      applications: ["Plantas antigas", "Adequação de normas", "Eficiência energética"]
    }
  ];

  const certifications = [
    "NR-10 - Segurança em Instalações Elétricas",
    "NR-12 - Segurança no Trabalho em Máquinas",
    "ISO 9001 - Gestão da Qualidade",
    "Certificação CREA"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em instalações industriais com mais de 25 anos 
            de experiência e equipe técnica especializada.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-2xl text-white">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Serviços Inclusos:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Aplicações:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary">{app}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Metodologia comprovada que garante qualidade e pontualidade em todos os projetos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Análise</h3>
                <p className="text-muted-foreground text-sm">
                  Estudo detalhado das necessidades e especificações do projeto
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Projeto</h3>
                <p className="text-muted-foreground text-sm">
                  Desenvolvimento do projeto técnico conforme normas e regulamentações
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Execução</h3>
                <p className="text-muted-foreground text-sm">
                  Implementação do projeto com equipe especializada e materiais de qualidade
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Entrega</h3>
                <p className="text-muted-foreground text-sm">
                  Testes, comissionamento e entrega com documentação completa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Certificações e Qualificações
            </h2>
            <p className="text-muted-foreground text-lg">
              Nossa equipe possui todas as certificações necessárias para garantir segurança e qualidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-corporate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium text-primary text-sm">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Algum Desses Serviços?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e receba uma proposta personalizada para seu projeto
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to="/contato">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Servicos;