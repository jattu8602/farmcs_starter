'use client'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  Droplets,
  Leaf,
  Bird,
  Sun,
  Camera,
  Smartphone,
  ChevronRight,
  Code,
  Cpu,
  Wrench,
} from 'lucide-react'

// Rest of the component remains exactly the same
const SmartAgricultureSystem = () => {
  const [activeTab, setActiveTab] = useState('process')
  const [activeFeature, setActiveFeature] = useState('irrigation')

  const contentRef = useRef(null)
  const featuresRef = useRef(null)

  const processSteps = [
    {
      title: 'Sensors Collect Data',
      description:
        'Soil moisture and temperature sensors gather real-time information',
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: 'Smart Analysis',
      description: 'Data is processed using cloud-based software',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Automated Action',
      description:
        'Sprinklers and valves distribute water or fertilizers as needed',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Farmer Control',
      description:
        'Farmers can monitor and adjust the system via their smartphone',
      icon: <Smartphone className="w-6 h-6" />,
    },
  ]

  const features = [
    {
      id: 'irrigation',
      title: 'Controlled Irrigation',
      description: 'Smart water management system with precise control',
      icon: <Droplets className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      id: 'fertilization',
      title: 'Smart Fertilization',
      description: 'Automated nutrient distribution based on soil analysis',
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      id: 'security',
      title: 'Bird Deterrence & Security',
      description: 'Integrated security system with bird deterrence',
      icon: <Bird className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      id: 'energy',
      title: 'Energy Efficiency',
      description: 'Solar-powered system for sustainable operation',
      icon: <Sun className="w-6 h-6" />,
      color: 'bg-yellow-500',
    },
    {
      id: 'monitoring',
      title: 'Real-Time Monitoring',
      description: '360° camera coverage with live feed',
      icon: <Camera className="w-6 h-6" />,
      color: 'bg-red-500',
    },
    {
      id: 'interface',
      title: 'Easy-to-Use Interface',
      description: 'Intuitive mobile app for system control',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'bg-indigo-500',
    },
  ]

  const technicalDetails = {
    languages: ['C++ for microcontroller programming'],
    hardware: [
      'ESP32',
      'Soil moisture sensors',
      'Sprinklers',
      'Solenoid valves',
    ],
    software: ['ThinkSpeak', 'Arduino IDE', 'IFTTT', 'Google API'],
  }

  // Animation for tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      )
    }
  }, [activeTab])

  // Animation for process steps
  useEffect(() => {
    if (activeTab === 'process') {
      gsap.fromTo(
        '.process-step',
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      )
    }
  }, [activeTab])

  // Animation for features
  useEffect(() => {
    if (activeTab === 'features') {
      gsap.fromTo(
        '.feature-card',
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        }
      )
    }
  }, [activeTab])

  // Animation for technical details
  useEffect(() => {
    if (activeTab === 'technical') {
      gsap.fromTo(
        '.tech-section',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      )
    }
  }, [activeTab])

  const handleTabChange = (tab:any) => {
    setActiveTab(tab)
  }

  const handleFeatureClick = (featureId:any) => {
    setActiveFeature(featureId)

    // Animate the clicked feature card
    gsap.fromTo(
      `.feature-${featureId}`,
      {
        scale: 0.95,
      },
      {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      }
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-4">
      {/* Custom Tabs */}
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg">
          {['process', 'features', 'technical'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div ref={contentRef}>
          {/* Process Tab Content */}
          {activeTab === 'process' && (
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Step-by-Step Process</h2>
              <div className="grid gap-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="process-step flex items-start space-x-4  p-4 rounded-lg"
                  >
                    <div className="bg-blue-100 p-2 rounded-full">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <ChevronRight className="w-6 h-6 text-gray-400 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab Content */}
          {activeTab === 'features' && (
            <div className="mt-6 bg-white rounded-lg shadow-md p-2 md:p-6 md:h-[500px] ">
              <h2 className="text-2xl font-bold mb-6">
                Features and Innovations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`feature-card feature-${
                      feature.id
                    } p-5 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeFeature === feature.id
                        ? ' '
                        : 'bg-white '
                    }`}
                    onClick={() => handleFeatureClick(feature.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-full text-white ${feature.color}`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Tab Content */}
          {activeTab === 'technical' && (
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">
                Technical Specifications
              </h2>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div className="tech-section  p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2 text-blue-600">
                      Programming Languages
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {technicalDetails.languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-section  p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2 text-green-600">
                      Hardware Components
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {technicalDetails.hardware.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-section  p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-2 text-purple-600">
                      Software Tools
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {technicalDetails.software.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SmartAgricultureSystem
