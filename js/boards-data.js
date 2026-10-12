/* BoardBench — board dataset (specs are indicative) */
const BOARDS = [
  {
    id: "arduino-uno",
    name: "Arduino Uno R3",
    maker: "Arduino",
    cls: "microcontroller",
    tag: "the classic",
    short: "The board that taught a generation to blink.",
    desc: "If you are brand new to electronics, start here. Huge library support, 5 V logic, and a gazillion tutorials. The ATmega328P is modest, but for LEDs, sensors and servos it is more than enough.",
    specs: {
      "Processor": "ATmega328P @ 16 MHz",
      "Flash / RAM": "32 KB / 2 KB",
      "Voltage": "5 V logic",
      "Digital / Analog": "14 DIO / 6 ADC",
      "Connectivity": "USB-B, UART, I²C, SPI",
      "Wireless": "—",
      "Size": "68.6 × 53.4 mm",
      "Price": "~$28"
    },
    quick: { clock: "16 MHz", io: "14 DIO / 6 ADC", net: "—" }
  },
  {
    id: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    maker: "Raspberry Pi Foundation",
    cls: "sbc",
    tag: "full computer",
    short: "A desktop-class Linux box that fits in your palm.",
    desc: "Quad-core 64-bit CPU, dual 4K display output, PCIe, and NVMe support. Runs a full desktop OS, media centers, home servers, retro consoles — anything a small PC can do.",
    specs: {
      "Processor": "Broadcom BCM2712, 4× Cortex-A76 @ 2.4 GHz",
      "Flash / RAM": "microSD / NVMe, 4–8 GB LPDDR4X",
      "Voltage": "5 V 5 A USB-C PD",
      "Digital / Analog": "40-pin GPIO header",
      "Connectivity": "2× USB 3, 2× USB 2, GbE, 2× micro-HDMI",
      "Wireless": "Wi-Fi 5, Bluetooth 5.0",
      "Size": "85 × 56 mm",
      "Price": "~$60 (4 GB)"
    },
    quick: { clock: "2.4 GHz ×4", io: "40 GPIO", net: "Wi-Fi + BT + GbE" }
  },
  {
    id: "esp32",
    name: "ESP32 DevKit",
    maker: "Espressif",
    cls: "iot",
    tag: "wifi workhorse",
    short: "Dual-core, WiFi and Bluetooth for pocket change.",
    desc: "The go-to chip for connected projects. Two cores, plenty of RAM, and built-in Wi-Fi + BLE — perfect for weather stations, smart-home gadgets and remote sensors.",
    specs: {
      "Processor": "Xtensa LX6, 2× @ 240 MHz",
      "Flash / RAM": "4 MB flash / 520 KB SRAM",
      "Voltage": "3.3 V logic",
      "Digital / Analog": "34 GPIO / 18 ADC (12-bit)",
      "Connectivity": "UART, I²C, SPI, DAC, touch",
      "Wireless": "Wi-Fi 802.11 b/g/n, BLE 4.2",
      "Size": "~55 × 25 mm",
      "Price": "~$5"
    },
    quick: { clock: "240 MHz ×2", io: "34 GPIO / 18 ADC", net: "Wi-Fi + BLE" }
  },
  {
    id: "raspberry-pi-pico",
    name: "Raspberry Pi Pico",
    maker: "Raspberry Pi Foundation",
    cls: "microcontroller",
    tag: "pocket MCU",
    short: "RP2040 magic at the price of a coffee.",
    desc: "Raspberry Pi's microcontroller debut: dual-core M0+, 264 KB RAM, and that clever programmable I/O (PIO). Program it in C/C++ or MicroPython.",
    specs: {
      "Processor": "RP2040, 2× Cortex-M0+ @ 133 MHz",
      "Flash / RAM": "2 MB flash / 264 KB SRAM",
      "Voltage": "3.3 V logic",
      "Digital / Analog": "26 GPIO / 3 ADC (12-bit)",
      "Connectivity": "UART, I²C, SPI, PIO, USB",
      "Wireless": "— (see Pico W)",
      "Size": "51 × 21 mm",
      "Price": "~$4"
    },
    quick: { clock: "133 MHz ×2", io: "26 GPIO / 3 ADC", net: "USB only" }
  },
  {
    id: "arduino-nano",
    name: "Arduino Nano",
    maker: "Arduino",
    cls: "microcontroller",
    tag: "breadboard buddy",
    short: "Full Uno power in a stick you can plug straight in.",
    desc: "Same ATmega328P brain as the Uno but in a compact DIP-style form that straddles a breadboard — ideal for permanent-ish prototypes and small robots.",
    specs: {
      "Processor": "ATmega328P @ 16 MHz",
      "Flash / RAM": "32 KB / 2 KB",
      "Voltage": "5 V logic",
      "Digital / Analog": "22 DIO / 8 ADC",
      "Connectivity": "Mini/micro-USB, UART, I²C, SPI",
      "Wireless": "—",
      "Size": "45 × 18 mm",
      "Price": "~$22"
    },
    quick: { clock: "16 MHz", io: "22 DIO / 8 ADC", net: "—" }
  },
  {
    id: "jetson-orin-nano",
    name: "Jetson Orin Nano",
    maker: "NVIDIA",
    cls: "ai",
    tag: "AI brain",
    short: "Desktop-class AI compute on a credit card.",
    desc: "NVIDIA's entry-level edge AI board. Runs modern neural networks for vision, speech and robots — pair it with a camera and you have got a self-driving cup holder.",
    specs: {
      "Processor": "6× Cortex-A78AE + 1024-core Ampere GPU",
      "Flash / RAM": "NVMe / 8 GB LPDDR5",
      "Voltage": "5 V (DC jack)",
      "Digital / Analog": "40-pin GPIO, CSI camera, PCIe",
      "Connectivity": "GbE, 4× USB 3.2, HDMI, M.2",
      "Wireless": "Optional module",
      "Size": "100 × 79 mm",
      "Price": "~$249"
    },
    quick: { clock: "A78 + Ampere GPU", io: "40 GPIO + CSI", net: "GbE, USB 3.2" }
  },
  {
    id: "microbit-v2",
    name: "micro:bit V2",
    maker: "BBC / Micro:bit Foundation",
    cls: "education",
    tag: "classroom hero",
    short: "5×5 LED grid, sensors and buttons — CS made friendly.",
    desc: "Built for classrooms: snap the alligator clips on, code in MakeCode or Python in the browser, and watch the LEDs light up. mic + speaker + accelerometer on board.",
    specs: {
      "Processor": "Nordic nRF52833, Cortex-M4 @ 64 MHz",
      "Flash / RAM": "512 KB / 128 KB",
      "Voltage": "3.3 V logic",
      "Digital / Analog": "25 GPIO (edge connector) / 6 ADC",
      "Connectivity": "UART, I²C, SPI, USB",
      "Wireless": "BLE + 2.4 GHz radio",
      "Size": "52 × 42 mm",
      "Price": "~$15"
    },
    quick: { clock: "64 MHz", io: "25 GPIO / 6 ADC", net: "BLE + radio" }
  },
  {
    id: "beaglebone-black",
    name: "BeagleBone Black",
    maker: "BeagleBoard.org",
    cls: "sbc",
    tag: "industrial tinkerer",
    short: "Two real-time PRU cores hiding under the hood.",
    desc: "A Linux SBC with two programmable real-time units — great for robotics and motor control where timing must be exact. Runs headless over USB with no monitor needed.",
    specs: {
      "Processor": "TI AM3358, Cortex-A8 @ 1 GHz",
      "Flash / RAM": "4 GB eMMC / 512 MB DDR3",
      "Voltage": "5 V",
      "Digital / Analog": "2× 46-pin headers, 2 PRU cores",
      "Connectivity": "GbE, 2× USB, HDMI, SPI, I²C, UART",
      "Wireless": "— (USB adapters ok)",
      "Size": "86 × 54 mm",
      "Price": "~$55"
    },
    quick: { clock: "1 GHz A8", io: "92 pins + 2 PRU", net: "GbE" }
  },
  {
    id: "stm32-blue-pill",
    name: "STM32 Blue Pill",
    maker: "STMicroelectronics",
    cls: "microcontroller",
    tag: "arm upgrade",
    short: "Your gateway from 8-bit to 32-bit ARM.",
    desc: "A dirt-cheap STM32F103 board that introduces 32-bit performance, proper peripherals and HAL/CubeMX tooling — the natural next step after Arduino.",
    specs: {
      "Processor": "STM32F103C8T6, Cortex-M3 @ 72 MHz",
      "Flash / RAM": "64 KB / 20 KB",
      "Voltage": "3.3 V logic",
      "Digital / Analog": "34 GPIO / 12 ADC (12-bit)",
      "Connectivity": "UART×3, I²C×2, SPI×2, USB",
      "Wireless": "—",
      "Size": "53 × 23 mm",
      "Price": "~$3"
    },
    quick: { clock: "72 MHz", io: "34 GPIO / 12 ADC", net: "USB" }
  }
];
