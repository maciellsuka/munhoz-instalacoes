import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Phone } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Home = () => {
  const clients = [
    "Indústria Metalúrgica ABC",
    "Fábrica de Componentes XYZ",
    "Empresa Química DEF",
    "Metalúrgica GHI",
    "Indústria Alimentícia JKL",
    "Petroquímica MNO",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#001a33]/80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções em instalações industriais
            <br />
            <span className="text-accent-foreground">
              com segurança e eficiência
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Desde 1996 atuando em elétrica, hidráulica e montagem
            eletromecânica.
            <br />
            Projetos, execução e manutenção para indústrias em Sorocaba e
            região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white hover:text-primary"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Clientes que Confiam em Nosso Trabalho
            </h2>
            <p className="text-muted-foreground text-lg">
              Empresas que já contrataram nossos serviços e garantiram qualidade
              e segurança
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-corporate transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <Badge variant="secondary" className="mb-3">
                    Cliente
                  </Badge>
                  <h3 className="font-semibold text-primary">{client}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Nossos Principais Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas para instalações industriais com
              mais de 25 anos de experiência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Instalações Elétricas
                </h3>
                <p className="text-muted-foreground">
                  Projetos e execução de sistemas elétricos industriais com
                  máxima segurança
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Hidráulica Industrial
                </h3>
                <p className="text-muted-foreground">
                  Sistemas hidráulicos completos para processos industriais
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Montagem Eletromecânica
                </h3>
                <p className="text-muted-foreground">
                  Montagem e manutenção de equipamentos eletromecânicos
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="cta" size="lg" asChild>
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar Seu Projeto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e receba uma proposta personalizada
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <Link to="/contato">
              <Phone className="mr-2 h-5 w-5" />
              Falar Conosco
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
