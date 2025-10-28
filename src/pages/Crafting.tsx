import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Crafting = () => {
  const navigate = useNavigate();

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
            <Button
              onClick={() => navigate('/')}
              variant="secondary"
              className="font-pixel text-xs md:text-sm border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all"
            >
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              НАЗАД
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="animate-pixel-fade max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-foreground">
              КРАФТ
            </h2>
            <p className="font-pixel text-xs md:text-sm text-muted-foreground leading-relaxed">
              Рецепт огнива
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn.poehali.dev/files/54b24b28-2af6-4742-a17d-f06da865ef9b.jpg"
              alt="Crafting Recipe"
              className="max-w-2xl w-full border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] bg-card p-8"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
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

export default Crafting;