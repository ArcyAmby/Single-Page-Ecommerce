# Single-Page-Ecommerce

============================================

Singe-page e-commerce landing page with Cart Options 

This is the single-page landing page of an e-commerce website called Threader for my application to Ehrlich IT Services.

============================================
Please make sure the following are readily available on your device:

>Node JS NPM Latest version (Latest LTS Version: 18.17.0 (includes npm 9.6.7)

============================================

TAILWINDCSS INSTALLATION

Once ready, please do the following to install TailwindCSS via CLI Tool:

1. Install TailwindCSS via npm, and create your tailwind.config.js file (run the following code in the terminal, make sure you are in the projects root folder)

>npm install -D tailwindcss
>npx tailwindcss init

2. Add the paths to all of your template files in your tailwind.config.js file.
       
>/** @type {import('tailwindcss').Config} */
   module.exports = {
   content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
   }

3. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

>@tailwind base;
@tailwind components;
@tailwind utilities;

4. Run the CLI tool in the terminal to scan your template files for classes and build your CSS.

>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

5. Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

Alternatively, you can use PlayCDN to use TailwindCSS. Please visit the official documentation here:

>https://tailwindcss.com/docs/installation

============================================

FLOWBITE INSTALLATION

Make sure that you have Node.js and Tailwind CSS installed.

Then do the following:

1. Install Flowbite as a dependency using NPM by running the following command:

>npm install flowbite

2. Require Flowbite as a plugin inside the tailwind.config.js file.
   
3. Additionally to your own content data you should add FlowBite to apply the classes from the interactive elements in the tailwind.config.js file.

4. Require the JavaScript code that powers the interactive elements before the end of your <body> tag:
   
><script src="../path/to/flowbite/dist/flowbite.min.js"></script>

Alternatively, you can also use CDN to use FlowBite. Please visit the official documentation here:

>https://flowbite.com/docs/getting-started/quickstart/

============================================

THANK YOU AND HAPPY CODING!

============================================


