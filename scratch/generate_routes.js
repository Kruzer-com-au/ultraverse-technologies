const fs = require('fs');
const path = require('path');

const routes = [
  'technology',
  'contact',
  'privacy',
  'terms',
  'products/ultradata',
  'products/ultraverse',
  'solutions',
  'solutions/white-label-streaming',
  'solutions/privacy-compliance',
  'solutions/creator-economy',
  'solutions/secure-communications',
  'solutions/community-sdk',
  'solutions/city-data',
  'industries',
  'industries/smart-cities',
  'industries/gaming',
  'industries/entertainment',
  'industries/tourism',
  'industries/enterprise',
  'industries/healthcare',
  'industries/education',
  'industries/financial',
  'company',
  'company/leadership',
  'company/careers',
  'company/press',
  'company/partners',
];

const template = (name) => `
export default function ${name}Page() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 capitalize">${name.replace(/-/g, ' ')}</h1>
      <p className="text-gray-400 text-lg">
        This is the ${name.replace(/-/g, ' ')} page content. It is part of the scalable Ultraverse ecosystem.
      </p>
    </div>
  );
}
`;

routes.forEach((route) => {
  const dir = path.join('app', route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileName = path.join(dir, 'page.tsx');
  const componentName = route
    .split('/')
    .pop()
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, template(componentName));
    console.log(`Created ${fileName}`);
  }
});
