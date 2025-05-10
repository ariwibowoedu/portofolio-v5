<template>
  <div class="container mx-auto max-w-xl text-center my-8 shadow-sm rounded px-4">
    <h1 class="text-2xl font-semibold mb-4">Generate QR Code</h1>
    <!-- input url -->
    <div class="flex items-center gap-2 my-4">
      <input
        v-model="qrValue"
        type="text"
        placeholder="Enter text or URL"
        class="my-4 py-2 px-4 border rounded w-full focus:outline-none focus:ring-indigo-500 text-sm"
      />
      <button
        @click="resetQRCode"
        class="px-4 py-2 rounded bg-gray-400 hover:opacity-90 transition-colors duration-200 shadow-sm"
      >
        <FeatherIcon icon="repeat" classes="w-4 h-4 text-white" />
      </button>
    </div>

    <div class="flex flex-col md:flex-row justify-around items-center">
      <!-- Button to generate qr code -->
      <button
        :disabled="!qrValue"
        @click="genereateQRCode"
        class="px-4 py-2 w-full tracking-wide md:w-auto mb-2 text-white rounded hover:bg-opacity-90"
        :class="qrValue ? 'bg-gray-400 hover:bg-opacity-90' : 'bg-gray-300 cursor-not-allowed'"
      >
        Generate
      </button>
      <!-- download buttn -->
      <button
        :disabled="!qrGenerate"
        @click="downloaQRCode"
        class="px-4 py-2 w-full tracking-wide md:w-auto mb-2 bg-blueberry text-white rounded hover:bg-opacity-90"
        :class="
          qrGenerate ? 'bg-blueberry hover:bg-opacity-90' : 'bg-blueberry/50 cursor-not-allowed'
        "
      >
        Download
      </button>
    </div>
    <!-- display the barcode -->
    <div class="mt-6 flex justify-center">
      <canvas ref="qrCanvas" class="mx-auto"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import QRCode from 'qrcode'
import FeatherIcon from '@/components/featherIcon/FeatherIcon.vue'

const qrCanvas = ref(null)
const qrValue = ref('')
const qrGenerate = ref(false)

// generate qr code
const genereateQRCode = async () => {
  try {
    // ensure the DOM is upadate before using canvas
    await nextTick()
    await QRCode.toCanvas(qrCanvas.value, qrValue.value, {
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      width: 300,
      errorCorrectionLevel: 'H',
    })
    qrValue.value = ''
    qrGenerate.value = true
  } catch (error) {
    console.error('Error generating qr code', error)
    qrGenerate.value = false
  }
}

// download qr code
const downloaQRCode = () => {
  if (qrCanvas.value) {
    const link = document.createElement('a')
    link.href = qrCanvas.value.toDataURL('image/png')
    link.download = 'qr-code.png'
    link.click()
  }
}

const resetQRCode = () => {
  qrValue.value = ''
  qrGenerate.value = false
}
</script>

<style>
</style>