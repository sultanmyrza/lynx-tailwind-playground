This HTML matches `MainContent.tsx`. Compare it on play. https://tailwindcss.com (Tailwind v3) to spot differences with `@lynx-js/tailwind-preset`.

```html
<div class="w-full h-full pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
  <div class="w-full h-full overflow-y-auto">
    <!-- Header Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between">
        <h1 class="text-4xl font-bold text-white">
          Tailwind<span class="text-blue-400">UI</span>
        </h1>
        <div class="flex gap-2">
          <a href="#" class="text-gray-300 hover:text-white cursor-pointer transition-colors">
            Home
          </a>
          <a href="#" class="text-gray-300 hover:text-white cursor-pointer transition-colors">
            About
          </a>
          <a href="#" class="text-gray-300 hover:text-white cursor-pointer transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Responsive Design
          </h2>
          <p class="text-gray-600">
            Tailwind's responsive modifiers make it easy to build adaptive
            interfaces.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-blue-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h2 class="text-2xl font-bold text-white mb-4">
            Color System
          </h2>
          <p class="text-blue-100">
            Beautiful, accessible color palette with a wide range of
            options.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h2 class="text-2xl font-bold text-white mb-4">
            Gradients
          </h2>
          <p class="text-white">
            Create stunning gradients with simple utility classes.
          </p>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <button
          class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer">
          Get Started
        </button>
      </div>
    </div>

    <!-- Footer -->
    <div class="container mx-auto px-4 py-8 mt-12">
      <p class="text-center text-gray-400">
        Built with Tailwind CSS
      </p>
    </div>
  </div>
</div>
  ```

---

Note: The Tailwind CSS configuration in this project follows the setup guide from Gearbox's technical article: "Setting up Tailwind CSS with Lynx". You can find the complete setup instructions at https://gearboxgo.com/articles/tech-talk/setting-up-tailwind-with-lynx