import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Site Map */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <Link
            to="/"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Home
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            to="/sobre"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Sobre
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            to="/obras"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Obras
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            to="/servicos"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Serviços
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            to="/contato"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © Munhoz Instalações. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;