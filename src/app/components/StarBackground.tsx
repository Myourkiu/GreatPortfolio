"use client"
import React, { useRef, useEffect } from 'react';

interface Star {
  orbitRadius: number;      // distância do centro
  angle: number;            // ângulo atual (em radianos)
  angularVelocity: number;  // velocidade angular de rotação
  radius: number;           // tamanho da estrela (raio)
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let stars: Star[] = [];

  // Função para criar as estrelas com parâmetros de órbita
  const createStars = (numStars: number, width: number, height: number): Star[] => {
    const starsArray: Star[] = [];
    const centerX = width / 2;
    const centerY = height / 2;
    // Distância máxima a partir do centro (até o canto da tela)
    const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
    for (let i = 0; i < numStars; i++) {
      // Distribuição radial (raiz para uniformizar na área)
      const orbitRadius = Math.sqrt(Math.random()) * maxRadius;
      starsArray.push({
        orbitRadius,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.002, // velocidade de rotação (pode ser negativa)
        radius: Math.random() * 1.5 + 0.5,
      });
    }
    return starsArray;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;
    const numStars = 300;

    // Ajusta o tamanho do canvas e recria as estrelas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars(numStars, canvas.width, canvas.height);
    };

    setCanvasSize();

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      context.fillStyle = 'white';

      stars.forEach((star) => {
        // Atualiza o ângulo para criar o efeito de giro
        star.angle += star.angularVelocity;
        // Calcula a nova posição com base nas coordenadas polares
        const x = centerX + star.orbitRadius * Math.cos(star.angle);
        const y = centerY + star.orbitRadius * Math.sin(star.angle);
        
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    />
  );
};

export default StarBackground;
