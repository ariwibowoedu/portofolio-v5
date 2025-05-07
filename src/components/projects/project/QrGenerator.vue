<template>
  <div
    class="container mx-auto max-w-xl text-center my-8 shadow-md rounded px-4"
  >
    <h1 class="text-2xl font-semibold mb-4">Generate QR Code</h1>
    <!-- Input for the QR code value -->
    <input
      v-model="qrValue"
      type="text"
      placeholder="Enter text or URL"
      class="my-4 py-2 px-4 border rounded w-full focus:outline-none focus:ring-indigo-500 text-sm"
    />

    <div class="flex flex-col md:flex-row justify-around items-center">
      <!-- Button to generate the QR code -->
      <button
        @click="generateQRCode"
        class="px-4 py-2 w-full md:w-auto mb-2 bg-blueberry text-white rounded hover:bg-opacity-90"
      >
        Generate QR Code
      </button>
      <!-- download button -->
      <button
        @click="downloadQRCode"
        :disabled="!qrCanvas"
        class="px-4 py-2 w-full md:w-auto mb-2 bg-primary text-white rounded hover:bg-opacity-90"
      >
        Download QR Code
      </button>
    </div>

    <!-- Display the QR code -->
    <div class="mt-6 flex justify-center">
      <canvas ref="qrCanvas" class="mx-auto"></canvas>
    </div>
    <div class="footer border-t border-gray-400">
      <p class="text-center text-sm py-4">&copy; ariwibowo.edu - 2024</p>
    </div>
  </div>
</template>
    
    <script setup>
import QRCode from "qrcode";
import { ref, nextTick } from "vue";

const qrCanvas = ref(null); // Reference for the canvas element
const qrValue = ref(""); // Input value for the QR code

// Function to generate the QR code
const generateQRCode = async () => {
  try {
    // Ensure the DOM is updated before using the canvas
    await nextTick();
    await QRCode.toCanvas(qrCanvas.value, qrValue.value, {
      color: {
        dark: "#000000", // Foreground color
        light: "#ffffff", // Background color
      },
      width: 300,
      errorCorrectionLevel: "H", // High error correction level
    });
    qrValue.value = "";
  } catch (error) {
    console.error("Error generating QR code: ", error);
  }
};

const downloadQRCode = () => {
  if (qrCanvas.value) {
    const link = document.createElement("a");
    link.href = qrCanvas.value.toDataURL("image/png");
    link.download = "qr-code.png";
    link.click();
  }
};
</script>
    
    <style scoped>
/* Add optional styles here if necessary */
</style>
    