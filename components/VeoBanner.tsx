
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import Modal from './Modal';

const VeoBanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadingMessages = [
    "Iniciando síntese de dinâmica de rede...",
    "Modelando fluxos de energia HVDC-VSC...",
    "Renderizando compensação reativa de STATCOM...",
    "Otimizando visualização de conversores de potência...",
    "Finalizando simulação cinemática Veo...",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setVideoUrl(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!selectedImage) return;

    try {
      // Check for API Key selection for Veo
      // @ts-ignore
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        // Proceeding after triggering openSelectKey due to race condition documentation
      }

      setIsGenerating(true);
      setError(null);
      
      let msgIndex = 0;
      const msgInterval = setInterval(() => {
        setLoadingMessage(loadingMessages[msgIndex % loadingMessages.length]);
        msgIndex++;
      }, 5000);

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = selectedImage.split(',')[1];
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Cinematic animation of this power system equipment with energy flows and professional lighting, high tech atmosphere',
        image: {
          imageBytes: base64Data,
          mimeType: 'image/jpeg',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      clearInterval(msgInterval);

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        throw new Error("Vídeo não gerado corretamente.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }
      setError("Ocorreu um erro na geração. Verifique sua chave de API e tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#006633,transparent)] opacity-30"></div>
        <div className="grid grid-cols-10 h-full w-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-emerald-500/10"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Laboratório de Visualização IA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Anime sua Infraestrutura <br/> com <span className="text-emerald-400">Google Veo</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Faça o upload de uma foto de um projeto de HVDC, STATCOM ou SVC e veja nossa IA transformar sua imagem em uma visualização dinâmica de alta tecnologia para o evento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Selecionar Imagem
              </button>
              
              {selectedImage && !isGenerating && (
                <button 
                  onClick={generateVideo}
                  className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40"
                >
                  Animar Projeto
                </button>
              )}
            </div>
            
            {error && <p className="mt-4 text-red-400 text-sm font-medium">{error}</p>}
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <div className="aspect-video bg-gray-800 rounded-2xl border-2 border-dashed border-gray-700 flex items-center justify-center relative overflow-hidden shadow-2xl group">
              {videoUrl ? (
                <video 
                  src={videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : selectedImage ? (
                <div className="relative w-full h-full">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover opacity-50 grayscale" />
                  {isGenerating && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-6"></div>
                      <p className="text-white font-bold text-lg animate-pulse">{loadingMessage}</p>
                      <p className="text-gray-400 text-sm mt-2">Isso pode levar alguns minutos...</p>
                    </div>
                  )}
                  {!isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">Imagem Carregada</div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-gray-500 font-medium">O vídeo gerado aparecerá aqui</p>
                  <p className="text-gray-600 text-sm mt-2">Suporta HVDC, STATCOM, SVC e mais.</p>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <img src="/Imgs/cigre_brazil_pos_rgb.png" alt="CIGRE" className="h-8 brightness-0 invert opacity-50" />
                  <div className="w-px h-6 bg-gray-700"></div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">Powered by Google Gemini 3.1</span>
               </div>
               <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-emerald-400/60 hover:text-emerald-400 text-xs transition-colors">Faturamento e Chaves de API</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeoBanner;
