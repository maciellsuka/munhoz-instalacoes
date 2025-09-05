import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Obras = () => {
  const projects = [
    {
      id: 1,
      title: "Modernização Elétrica - Indústria Metalúrgica",
      category: "Instalações Elétricas",
      client: "Metalúrgica ABC Ltda",
      year: "2023",
      description: "Projeto completo de modernização do sistema elétrico industrial, incluindo quadros de comando, cabeamento e sistemas de proteção.",
      image: project1,
      details: ["Potência: 500kW", "Prazo: 45 dias", "Equipe: 8 técnicos"]
    },
    {
      id: 2,
      title: "Sistema Hidráulico Industrial",
      category: "Hidráulica",
      client: "Fábrica de Componentes XYZ",
      year: "2023",
      description: "Instalação completa de sistema hidráulico para linha de produção, incluindo bombas, tubulações e sistemas de controle.",
      image: project2,
      details: ["Pressão: 150 bar", "Prazo: 30 dias", "Extensão: 2.000m"]
    },
    {
      id: 3,
      title: "Montagem de Equipamentos Eletromecânicos",
      category: "Eletromecânica",
      client: "Indústria Química DEF",
      year: "2023",
      description: "Montagem e instalação de equipamentos eletromecânicos para processo produtivo, incluindo motores, redutores e sistemas de automação.",
      image: project3,
      details: ["Equipamentos: 12 unidades", "Prazo: 60 dias", "Potência total: 800kW"]
    },
    {
      id: 4,
      title: "Retrofit Elétrico Industrial",
      category: "Modernização",
      client: "Petroquímica GHI S.A.",
      year: "2022",
      description: "Modernização completa do sistema elétrico existente, adequação às normas atuais e implementação de sistemas de monitoramento.",
      image: project1,
      details: ["Área: 5.000m²", "Prazo: 90 dias", "Economia: 30%"]
    },
    {
      id: 5,
      title: "Sistema Integrado - Nova Planta",
      category: "Projeto Completo",
      client: "Indústria Alimentícia JKL",
      year: "2022",
      description: "Projeto completo de instalações elétricas e hidráulicas para nova planta industrial, desde o projeto até a entrega final.",
      image: project2,
      details: ["Área: 3.000m²", "Prazo: 120 dias", "Investimento: R$ 2,5M"]
    },
    {
      id: 6,
      title: "Manutenção Preventiva - Complexo Industrial",
      category: "Manutenção",
      client: "Grupo Industrial MNO",
      year: "2022",
      description: "Contrato de manutenção preventiva e corretiva para complexo industrial com 10 unidades produtivas.",
      image: project3,
      details: ["Unidades: 10", "Contrato: 24 meses", "Disponibilidade: 99.5%"]
    }
  ];

  const categories = ["Todos", "Instalações Elétricas", "Hidráulica", "Eletromecânica", "Modernização", "Projeto Completo", "Manutenção"];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio de Obras
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que executamos com excelência ao longo dos nossos 
            mais de 25 anos de experiência no mercado industrial.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Cliente: {project.client}
                  </p>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    {project.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        • {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Números que Falam por Si
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados conquistados ao longo de nossa trajetória
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <p className="text-muted-foreground">Projetos Executados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer Conhecer Mais Detalhes dos Nossos Projetos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e solicite uma apresentação personalizada
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to="/contato">Solicitar Apresentação</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Obras;