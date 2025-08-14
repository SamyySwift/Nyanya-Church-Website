import { useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GrainyBackground from "../components/GrainyBackground";
import { RenderText } from "../components/RenderRichText";
import Transition from "../utils/transition";

function ReadMore() {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState(state?.message || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const messageId = searchParams.get('id');

  // If no message in state but we have an ID in URL, fetch the data
  useEffect(() => {
    if (!message && messageId) {
      setLoading(true);
      
      // Try multiple approaches to fetch the message
      const fetchMessage = async () => {
        try {
          // First try: fetch by ID
          let response = await fetch(`https://nyanya-church-website-backend.onrender.com/api/daily-words/${messageId}?populate=*`);
          
          if (!response.ok) {
            // Second try: fetch all and find by ID
            response = await fetch(`https://nyanya-church-website-backend.onrender.com/api/daily-words?populate=*`);
            const allData = await response.json();
            
            if (allData.data) {
              // Try to find message by different ID formats
              const foundMessage = allData.data.find(msg => 
                msg.id == messageId || 
                msg.documentId == messageId || 
                msg.slug == messageId ||
                encodeURIComponent(msg.title) == messageId
              );
              
              if (foundMessage) {
                setMessage(foundMessage);
                return;
              }
            }
            throw new Error('Message not found');
          }
          
          const data = await response.json();
          if (data.data) {
            setMessage(data.data);
          } else {
            throw new Error('Message not found');
          }
        } catch (err) {
          console.error('Error fetching message:', err);
          setError('Message not found or failed to load');
        } finally {
          setLoading(false);
        }
      };
      
      fetchMessage();
    }
  }, [messageId, message]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center font-karla">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Loading your message...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center font-karla">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 font-anton">Message Not Found</h2>
            <p className="text-gray-600 mb-6">{error}</p>
          </div>
          <a 
            href="/daily-word" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Daily Words
          </a>
        </div>
      </div>
    );
  }

  if (!message) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center font-karla">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 font-anton">No Message Available</h2>
            <p className="text-gray-600 mb-6">We couldn't find the message you're looking for.</p>
          </div>
          <a 
            href="/daily-word" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Daily Words
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 font-karla">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            {/* Date Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 mb-8">
              <svg className="w-4 h-4 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Daily Word</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-anton">
              {message.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Preacher:</span>
                <span className="ml-2">{message.preacher}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-medium">Scripture:</span>
                <span className="ml-2">{message.portion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed">
                <RenderText content={message.content} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-12 text-center">
          <a 
            href="/daily-word" 
            className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Daily Words
          </a>
        </div>
      </div>
    </div>
  );
}

export default Transition(ReadMore);
