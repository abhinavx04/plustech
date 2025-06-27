giimport React, { useState, useRef } from 'react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Watch Our</span>
            <br />
            Company Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover PlusTech's journey from a startup to a leading industrial finishing company, 
            our innovative solutions, and the team behind our success.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                src="/video-output-472464DB-7FD9-46E2-8FC6-82BEFA18E6DD.mov"
                className="w-full h-full object-cover"
                poster="/plustechlogo.jpeg"
                controls
                muted={isMuted}
                playsInline
                preload="metadata"
              />
              
              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-full hover:bg-white transition-colors shadow-lg pointer-events-auto">
                  <Play className="h-16 w-16 text-blue-600" />
                </div>
              </div>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>

            {/* Video Info */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    PlusTech: Leading Industrial Finishing Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our corporate video showcases our state-of-the-art facilities, innovative 
                    robotic applications, and the dedicated team that makes PlusTech a trusted 
                    partner for blue-chip clients across automotive and industrial sectors.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">HD Quality</span>
                    </div>
                    <div className="flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">2:30 min</span>
                    </div>
                    <div className="flex items-center bg-purple-50 text-purple-800 px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">English</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll see:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Our manufacturing facilities and capabilities
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Robotic applications and smart factory solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Team expertise and customer testimonials
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Quality assurance and ISO certification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to learn more about our solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
              Request a Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal for Full Screen */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">PlusTech Company Overview</h3>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src="/video-output-472464DB-7FD9-46E2-8FC6-82BEFA18E6DD.mov"
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted={isMuted}
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection; 