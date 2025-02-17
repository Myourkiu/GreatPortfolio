'use client'
import React, { useRef, useEffect } from 'react';
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion';
import { slideInFromRight } from '../../utils/motion';

interface Skill {
  x: number;
  y: number;
  text: string;
  eaten: boolean;
}

const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "Bootstrap",
    "TailwindCSS",
    "SASS",
    "React",
    "Next.js",
    "React Router Dom",
    "React Hook Form",
    "Next Auth",
    "Zod",
    "Node.js",
    "C#",
    ".NET",
    "JWT",
    "MySQL",
    "SQL Server",
    "PostgreSQL",
    "Selenium",
    "Git",
    "GitHub",
    "Azure DevOps",
    "Docker",
    "JSON",
    "SignalR",
    "Middleware",
    "WebHook"
  ];
  
const PacmanSkills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lapSkillGroupsRef = useRef<Skill[][]>([]);
  const currentLapRef = useRef<number>(0);
  const pacmanRef = useRef({
    x: 50,
    y: 0,
    radius: 20,
    speed: 1.3,
    mouthAngle: 0.2,
    mouthOpening: 0.02,
    mouthDirection: 1,
  });

  const setCanvasSizeAndSkills = (canvas: HTMLCanvasElement) => {
    const width = window.innerWidth;
    const height = window.innerHeight < 400 ? window.innerHeight * 0.5 : 300;
    canvas.width = width;
    canvas.height = height;

    const desiredSpacing = 60;
    const maxSkillsPerLap = Math.floor(width / desiredSpacing);
    const numberOfLaps = Math.ceil(skillsData.length / maxSkillsPerLap);

    lapSkillGroupsRef.current = [];
    for (let lap = 0; lap < numberOfLaps; lap++) {
      const lapSkillsData = skillsData.slice(lap * maxSkillsPerLap, (lap + 1) * maxSkillsPerLap);
      const lapSkillCount = lapSkillsData.length;
      const spacing = width / (lapSkillCount + 1);
      const lapY = height * (lap + 1) / (numberOfLaps + 1);
      const skills = lapSkillsData.map((skill, index) => ({
        x: spacing * (index + 1),
        y: lapY,
        text: skill,
        eaten: false,
      }));
      lapSkillGroupsRef.current.push(skills);
    }

    currentLapRef.current = 0;
    pacmanRef.current.x = -pacmanRef.current.radius;
    pacmanRef.current.y = canvas.height * (currentLapRef.current + 1) / (lapSkillGroupsRef.current.length + 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setCanvasSizeAndSkills(canvas);

    let animationFrameId: number;

    const drawSkills = () => {
      const currentSkills = lapSkillGroupsRef.current[currentLapRef.current];
      ctx.fillStyle = 'white';
      ctx.font = '14px Arial';
      currentSkills.forEach((skill, index) => {
        if (!skill.eaten) {
          // Círculo representando a skill
          ctx.beginPath();
          ctx.arc(skill.x, skill.y, 5, 0, Math.PI * 2);
          ctx.fill();
          const textWidth = ctx.measureText(skill.text).width;
          const offsetY = index % 2 === 0 ? -15 : 20;
          ctx.fillText(skill.text, skill.x - textWidth / 2, skill.y + offsetY);
        }
      });
    };

    const drawPacman = (pacman: typeof pacmanRef.current) => {
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      const startAngle = pacman.mouthAngle;
      const endAngle = Math.PI * 2 - pacman.mouthAngle;
      ctx.arc(pacman.x, pacman.y, pacman.radius, startAngle, endAngle, false);
      ctx.lineTo(pacman.x, pacman.y);
      ctx.fill();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSkills();
      drawPacman(pacmanRef.current);

      pacmanRef.current.mouthAngle += pacmanRef.current.mouthOpening * pacmanRef.current.mouthDirection;
      if (pacmanRef.current.mouthAngle > 0.4 || pacmanRef.current.mouthAngle < 0.1) {
        pacmanRef.current.mouthDirection *= -1;
      }

      pacmanRef.current.x += pacmanRef.current.speed;

      const currentSkills = lapSkillGroupsRef.current[currentLapRef.current];
      currentSkills.forEach(skill => {
        if (!skill.eaten && Math.abs(pacmanRef.current.x - skill.x) < pacmanRef.current.radius) {
          skill.eaten = true;
        }
      });

      if (pacmanRef.current.x - pacmanRef.current.radius > canvas.width) {
        if (currentLapRef.current < lapSkillGroupsRef.current.length - 1) {
          // Avança para a próxima volta
          currentLapRef.current += 1;
          pacmanRef.current.x = -pacmanRef.current.radius;
          pacmanRef.current.y = canvas.height * (currentLapRef.current + 1) / (lapSkillGroupsRef.current.length + 1);
        } else {
          currentLapRef.current = 0;
          pacmanRef.current.x = -pacmanRef.current.radius;
          lapSkillGroupsRef.current.forEach(lap => {
            lap.forEach(skill => (skill.eaten = false));
          });
          pacmanRef.current.y = canvas.height * (currentLapRef.current + 1) / (lapSkillGroupsRef.current.length + 1);
        }
      }
      animationFrameId = requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      setCanvasSizeAndSkills(canvas);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="w-full flex flex-col items-start px-12 my-4 md:px-20">
      <motion.h1 
      variants={slideInFromRight(0.5)} 
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 w-full text-center text-4xl my-4">Skills</motion.h1>
      <motion.canvas 
      variants={slideInFromLeft(0.8)} 
      ref={canvasRef} 
      className="w-full block button-primary py-3 rounded-xl" />
    </motion.div>
  );
};

export default PacmanSkills;
