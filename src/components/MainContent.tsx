export function MainContent() {
  return (
    <view className="w-full h-full bg-slate-900 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <scroll-view scroll-orientation="vertical" className="w-full h-full">
        {/* Header Section */}
        <view className="container mx-auto px-4 py-8">
          <view className="flex items-center justify-between">
            <text className="text-4xl font-bold text-white">
              Tailwind<text className="text-4xltext-blue-400">UI</text>
            </text>
            <view className="flex gap-2">
              <text className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Home
              </text>
              <text className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                About
              </text>
              <text className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Contact
              </text>
            </view>
          </view>
        </view>

        {/* Main Content */}
        <view className="container mx-auto px-4 py-12">
          {/* Feature Cards */}
          <view className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <view className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <text className="text-2xl font-bold text-gray-800 mb-4">
                Responsive Design
              </text>
              <text className="text-gray-600">
                Tailwind's responsive modifiers make it easy to build adaptive
                interfaces.
              </text>
            </view>

            {/* Card 2 */}
            <view className="bg-blue-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <text className="text-2xl font-bold text-white mb-4">
                Color System
              </text>
              <text className="text-blue-100">
                Beautiful, accessible color palette with a wide range of
                options.
              </text>
            </view>

            {/* Card 3 */}
            <view className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <text className="text-2xl font-bold text-white mb-4">
                Gradients
              </text>
              <text className="text-white">
                Create stunning gradients with simple utility classes.
              </text>
            </view>
          </view>

          {/* Call to Action Section */}
          <view className="mt-16 text-center">
            <text className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </text>
            <view className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer">
              <text>Get Started</text>
            </view>
          </view>
        </view>

        {/* Footer */}
        <view className="container mx-auto px-4 py-8 mt-12">
          <text className="text-center text-gray-400">
            Built with Tailwind CSS & ReactLynx
          </text>
        </view>
      </scroll-view>
    </view>
  );
}
