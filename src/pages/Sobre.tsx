import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sobre = () => {
  const achievements = [
    { year: "1996", title: "Fundação da Empresa", description: "Início das atividades em Sorocaba" },
    { year: "2000", title: "Expansão Regional", description: "Ampliação dos serviços para toda a região" },
    { year: "2010", title: "Certificações", description: "Obtenção de certificações de qualidade" },
    { year: "2020", title: "Modernização", description: "Implementação de novas tecnologias" },
  ];

  const values = [
    { title: "Segurança", description: "Prioridade máxima em todos os projetos", icon: "🛡️" },
    { title: "Qualidade", description: "Excelência técnica em cada serviço", icon: "⭐" },
    { title: "Experiência", description: "Mais de 25 anos no mercado", icon: "📈" },
    { title: "Confiança", description: "Relacionamento duradouro com clientes", icon: "🤝" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a Munhoz Instalações
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Uma empresa familiar que cresceu junto com a indústria brasileira, 
            sempre mantendo os valores de qualidade, segurança e confiabilidade.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Fundada em 1996 em Sorocaba, a Munhoz Instalações nasceu da visão de 
                  oferecer serviços especializados em instalações industriais com o mais 
                  alto padrão de qualidade e segurança.
                </p>
                <p className="text-lg leading-relaxed">
                  Ao longo de mais de 25 anos, construímos uma sólida reputação no mercado, 
                  atendendo desde pequenas empresas até grandes complexos industriais em 
                  Sorocaba e região.
                </p>
                <p className="text-lg leading-relaxed">
                  Nossa equipe técnica especializada está sempre atualizada com as mais 
                  modernas tecnologias e normas de segurança, garantindo projetos executados 
                  com excelência.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-corporate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Badge variant="secondary" className="text-sm font-bold">
                        {achievement.year}
                      </Badge>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os princípios que norteiam nossa conduta e garantem a satisfação de nossos clientes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer soluções em instalações industriais com excelência técnica, 
                  segurança e pontualidade, superando as expectativas dos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👁️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a principal referência em instalações industriais 
                  na região de Sorocaba, expandindo nossa atuação com sustentabilidade.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Compromisso, integridade, inovação e responsabilidade social e ambiental 
                  em todos os nossos projetos e relacionamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;