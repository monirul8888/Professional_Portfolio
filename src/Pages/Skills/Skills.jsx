import React from 'react';
import { Code, Brain, Bot, Workflow, Cog , Eye, Cloud, BarChart3, Database, Layers, MessageSquare } from 'lucide-react';

export const SkillsSection = ({ id = 'skills' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Skills
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Full-stack AI, ML & MLOps toolkit
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I work across the entire AI lifecycle — from data and modeling to
              evaluation, deployment, and scalable production systems.
            </p>
          </div>

          {/* Skill Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <SkillCard
              title="Programming & Development"
              icon={Code}
              skills={[
                'Python', 'C',  'Java', 'JavaScript',
                'SQL', 'MATLAB',
                 'Git', 'Linux',
              ]}
            />
             <SkillCard
              title="AI Automation"
              icon={Workflow}
              skills={[
                'n8n', "Zapier", 'Make.com', "Google Gemini Chat Model", "OpenAI"
              ]}
            />

            <SkillCard
              title="Machine Learning & AI "
              icon={Brain}
              skills={[
                'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch',
                 'Feature Engineering',
                 'OpenAI',
              ]}
            />

            <SkillCard
              title="Computer Vision"
              icon={Eye}
              skills={[
                'CNN', 'Vision Transformers', 'OpenCV',
                
              ]}
            />

           

            <SkillCard
              title="Cloud & Deployment"
              icon={Cloud}
              skills={[
                'Render', 'Vercel', 'Netify', 'Google Cloud', 'Surge',
                 'Docker',
              ]}
            />

            <SkillCard
              title="Data Science & Tools"
              icon={BarChart3}
              skills={[
                'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
                'Power BI', 'Jupyter',
                'Google Colab', 'Kaggle',
                'Roboflow',
              ]}
            />

            <SkillCard
              title="Databases & Big Data"
              icon={Database}
              skills={[
                'PostgreSQL', 'MongoDB', 'SQL',
  ,
              ]}
            />

              <SkillCard
              title="Documentation"
              icon={Database}
              skills={[
                'LaTeX', 'MS Office', 'Canva',
              ]}
            />

          
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icon: Icon }) => (
  <div
    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-5 transition-all hover:border-gray-300 hover:shadow-md"
  >
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-600 group-hover:text-gray-900 transition-colors">
        {title}
      </p>
      {Icon && (
        <div>
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
      )}
    </div>

    <div className="relative mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="cursor-default rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillsSection;
