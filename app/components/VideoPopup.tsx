"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoSrc: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoSrc,
}) => {
  return (
    <AnimatePresence>
      {isVideoOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
