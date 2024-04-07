OLED.init(128, 64)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Robotescu", "RobotescuWiFi1234")
OLED.writeStringNewLine("Conectat la internet")
basic.showIcon(IconNames.Yes)
basic.pause(2000)
OLED.clear()
basic.forever(function () {
    OLED.writeStringNewLine("Praful este: " + Environment.ReadDust(DigitalPin.P1, AnalogPin.P2))
    OLED.writeStringNewLine("Umiditatea este: " + Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P15))
    OLED.writeStringNewLine("Temperatura este: " + Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15))
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "LVGWR4GYBUJN8GYN",
    Environment.ReadDust(DigitalPin.P1, AnalogPin.P2),
    Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P15),
    Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15)
    )
    ESP8266_IoT.uploadData()
    basic.pause(1000)
    OLED.clear()
})
