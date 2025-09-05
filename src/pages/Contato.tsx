import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "(15) 3233-4455",
      subtitle: "(15) 99999-8888"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: "contato@munhozinstalacoes.com.br",
      subtitle: "orcamento@munhozinstalacoes.com.br"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      content: "Rua Industrial, 123",
      subtitle: "Sorocaba - SP, CEP: 18000-000"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      content: "Segunda à Sexta: 8h às 18h",
      subtitle: "Sábado: 8h às 12h"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades em instalações industriais. 
            Solicite um orçamento sem compromisso.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-corporate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {info.content}
                  </p>
                  {info.subtitle && (
                    <p className="text-muted-foreground text-sm">
                      {info.subtitle}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Solicite seu Orçamento
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        type="text"
                        required
                        placeholder="Sua cidade"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servico">Serviço de Interesse</Label>
                    <select
                      id="servico"
                      name="servico"
                      className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="instalacoes-eletricas">Instalações Elétricas</option>
                      <option value="sistemas-hidraulicos">Sistemas Hidráulicos</option>
                      <option value="montagem-eletromecanica">Montagem Eletromecânica</option>
                      <option value="projetos-eletricos">Projetos Elétricos</option>
                      <option value="manutencao">Manutenção Industrial</option>
                      <option value="modernizacao">Modernização/Retrofit</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Nossa Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Mapa interativo em breve
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Rua Industrial, 123<br />
                        Sorocaba - SP, CEP: 18000-000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Área de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Atendemos toda a região de Sorocaba e cidades vizinhas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sorocaba", "Votorantim", "Salto de Pirapora", "Piedade", 
                      "Ibiúna", "Mairinque", "Alumínio", "Araçariguama"
                    ].map((city) => (
                      <Badge key={city} variant="secondary">{city}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Atendimento de Emergência</h3>
                  <p className="mb-4 opacity-90">
                    Para situações urgentes, oferecemos atendimento 24/7
                  </p>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">(15) 99999-0000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;