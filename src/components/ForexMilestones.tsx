import React from 'react';
import { TrendingUp, Target, DollarSign, Trophy, Star } from 'lucide-react';
import photo from "../images/shamEdward.jpg";
import photo1 from "../images/saron.jpg";

const ForexMilestones: React.FC = () => {
  const milestones = [
    { amount: 5000, completed: false, icon: Star }, // Currently in progress
    { amount: 10000, completed: false, icon: Target },
    { amount: 25000, completed: false, icon: TrendingUp },
    { amount: 50000, completed: false, icon: Trophy },
    { amount: 100000, completed: false, icon: DollarSign }
  ];

  const currentMilestone = 5000;
  const nextMilestone = 5000; // Currently working on the first milestone
  const progress = 46; // 46% completed

  return (
    <section id="forex" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Forex Trading Journey
            </h2>
            <p className="text-gray-400 text-lg">
              Building wealth through strategic market analysis and disciplined trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Trading Partners</h3>
                <div className="flex justify-center space-x-8">
                  <div className="group text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={photo}
                        alt="J. Sham Edward"
                        className="w-full h-full object-cover rounded-full border-2 border-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-emerald-400 font-semibold">J. Sham Edward</p>
                    <p className="text-gray-400 text-sm">Lead Trader</p>
                  </div>
                  
                  <div className="group text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={photo1}
                        alt="Trading Partner"
                        className="w-full h-full object-cover rounded-full border-2 border-blue-400 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-blue-400 font-semibold">Trading Partner</p>
                    <p className="text-gray-400 text-sm">Lead Trader</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Current Challenge</h3>
                      <p className="text-gray-400">Funding Pips Challenge</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-blue-400 mb-2">$5,000</div>
                  <p className="text-gray-300">46% progress towards first milestone!</p>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: '46%' }}
                      ></div>
                    </div>
                    <span className="text-blue-400 text-sm font-semibold">46%</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Trading Partnership</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Trading alongside my brother, we combine analytical skills with disciplined 
                    risk management to navigate the forex markets strategically and profitably.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-center mb-6 text-white">
                Milestone Progress
              </h4>
              
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isCurrent = milestone.amount === currentMilestone;
                
                return (
                  <div
                    key={milestone.amount}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      milestone.completed
                        ? 'bg-emerald-500/20 border border-emerald-500/50'
                        : isCurrent
                        ? 'bg-blue-500/20 border border-blue-500/50 animate-pulse'
                        : 'bg-gray-800 border border-gray-700'
                    } hover:transform hover:scale-105`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      milestone.completed
                        ? 'bg-emerald-500'
                        : isCurrent
                        ? 'bg-blue-500'
                        : 'bg-gray-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-white">
                          ${milestone.amount.toLocaleString()}
                        </span>
                        {milestone.completed && (
                          <div className="text-emerald-400 text-sm bg-emerald-500/20 px-2 py-1 rounded-full">
                            ✓ Completed
                          </div>
                        )}
                        {isCurrent && (
                          <div className="text-blue-400 text-sm bg-blue-500/20 px-2 py-1 rounded-full animate-pulse">
                            → In Progress
                          </div>
                        )}
                      </div>
                      
                      {isCurrent && (
                        <div className="mt-2">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Started</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Current target: <span className="text-blue-400 font-semibold">${currentMilestone.toLocaleString()}</span> - 46% complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexMilestones;