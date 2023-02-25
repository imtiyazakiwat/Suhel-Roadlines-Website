function generateFooter() {
    return `
    <footer class="bg-gray-900 py-4">
      <div class="container mx-auto px-4">
        <div class="mb-6 text-center">
          <a href="#" class="text-xl font-bold text-gray-800">Suhelroadlines</a>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-4">
            <h4 class="text-lg font-bold mb-4 text-white">About Us</h4>
            <p class="text-gray-500">
              We are a transportation company providing reliable and affordable
              transportation services to customers in the local area.
            </p>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-4">
            <h4 class="text-lg font-bold mb-4 text-white">Services</h4>
            <ul class="list-disc pl-6">
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >Airport transportation</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >City tours</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >Corporate transportation</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >Wedding transportation</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >Special events transportation</a
                >
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-4">
            <h4 class="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul class="list-disc pl-6">
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >123 Main Street</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >Anytown, USA 12345</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >(555) 555-5555</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-white"
                  >info@mylocaltransport.com</a
                >
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-8 border-gray-500" />
        <div class="text-center text-gray-500">
          &copy; 2023 Suhelroadlines. All rights reserved.
        </div>
      </div>
    </footer>
    `;
}
