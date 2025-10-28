import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'download'>('home');
  const navigate = useNavigate();

  const portalBlocks = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <nav className="relative z-10 border-b-4 border-card bg-card/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pixel text-xl md:text-2xl text-card-foreground">AETHER</h1>
            <div className="flex gap-2">
              <Button
                onClick={() => setActiveSection('home')}
                variant={activeSection === 'home' ? 'default' : 'secondary'}
                className="font-pixel text-xs md:text-sm border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all"
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                ГЛАВНАЯ
              </Button>
              <Button
                onClick={() => setActiveSection('download')}
                variant={activeSection === 'download' ? 'default' : 'secondary'}
                className="font-pixel text-xs md:text-sm border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all"
              >
                <Icon name="Download" className="mr-2 h-4 w-4" />
                ЗАГРУЗИТЬ
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-pixel-fade">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="mb-8">
                <img
                  src="https://cdn.poehali.dev/files/9431a762-7134-40fd-8b14-76c341acb93a.png"
                  alt="Minecraft Logo"
                  className="w-full max-w-2xl mx-auto animate-float"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-2xl animate-portal-pulse" />
                <div className="relative grid grid-cols-4 gap-1 p-8 bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                  {portalBlocks.map((block) => (
                    <div
                      key={block}
                      className="w-12 h-12 md:w-16 md:h-16 bg-primary border-2 border-primary-foreground/30 animate-portal-pulse"
                      style={{
                        animationDelay: `${block * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <h2 className="font-pixel text-3xl md:text-5xl mb-6 text-foreground animate-float">
                AETHER
              </h2>
              <p className="font-pixel text-xs md:text-sm max-w-2xl text-muted-foreground leading-relaxed mb-8">
                ДОБРО ПОЖАЛОВАТЬ В 2D МИР MINECRAFT! ИССЛЕДУЙ НЕБЕСНЫЕ ОСТРОВА, СТРОЙТЕ ПОРТАЛЫ И ПОГРУЗИТЕСЬ В ПРИКЛЮЧЕНИЯ.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card 
                className="p-6 border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate('/crafting')}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary border-2 border-foreground flex items-center justify-center">
                    <Icon name="Pickaxe" size={32} className="text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="font-pixel text-sm md:text-base mb-3 text-center text-card-foreground">КРАФТ</h3>
                <p className="font-pixel text-xs text-center text-muted-foreground leading-relaxed">
                  СОЗДАВАЙ ИНСТРУМЕНТЫ И ОРУЖИЕ
                </p>
              </Card>

              <Card 
                className="p-6 border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate('/portals')}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary border-2 border-foreground flex items-center justify-center">
                    <Icon name="Zap" size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-pixel text-sm md:text-base mb-3 text-center text-card-foreground">ПОРТАЛЫ</h3>
                <p className="font-pixel text-xs text-center text-muted-foreground leading-relaxed">
                  ПУТЕШЕСТВУЙ МЕЖДУ МИРАМИ
                </p>
              </Card>

              <Card className="p-6 border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent border-2 border-foreground flex items-center justify-center">
                    <Icon name="Swords" size={32} className="text-accent-foreground" />
                  </div>
                </div>
                <h3 className="font-pixel text-sm md:text-base mb-3 text-center text-card-foreground">БИТВЫ</h3>
                <p className="font-pixel text-xs text-center text-muted-foreground leading-relaxed">
                  СРАЖАЙСЯ С МОНСТРАМИ
                </p>
              </Card>
            </div>

            <div className="flex justify-center">
              <img
                src="https://cdn.poehali.dev/files/d9beef82-6a27-4359-82ba-0501821a847e.jpg"
                alt="Aether Portal"
                className="max-w-md w-full border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] pixelated"
              />
            </div>
          </div>
        )}

        {activeSection === 'download' && (
          <div className="animate-pixel-fade max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-4 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="text-center mb-8">
                <div className="inline-block p-6 bg-primary border-4 border-foreground mb-6 animate-float">
                  <Icon name="Download" size={48} className="text-primary-foreground" />
                </div>
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 text-card-foreground">
                  СКАЧАТЬ AETHER
                </h2>
                <p className="font-pixel text-xs md:text-sm text-muted-foreground leading-relaxed mb-8">
                  ВЕРСИЯ 1.0.0 - WINDOWS, MAC, LINUX
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full font-pixel text-sm md:text-base border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 py-6"
                >
                  <a href="https://drive.google.com/drive/folders/1zE8P83yX5PD_4kh-wEX-X9Rl9jRvDLok" target="_blank" rel="noopener noreferrer">
                    <Icon name="Monitor" className="mr-3 h-5 w-5" />
                    WINDOWS 64-BIT
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full font-pixel text-sm md:text-base border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 py-6"
                >
                  <Icon name="Apple" className="mr-3 h-5 w-5" />
                  MAC OS
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full font-pixel text-sm md:text-base border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 py-6"
                >
                  <Icon name="Laptop" className="mr-3 h-5 w-5" />
                  LINUX
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted border-2 border-foreground">
                <p className="font-pixel text-xs text-muted-foreground text-center leading-relaxed">
                  МИНИМАЛЬНЫЕ ТРЕБОВАНИЯ: 2GB RAM, 500MB ДИСК
                </p>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="relative z-10 border-t-4 border-card bg-card/90 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="font-pixel text-xs text-muted-foreground">
            © 2024 AETHER - 2D MINECRAFT ADVENTURE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;