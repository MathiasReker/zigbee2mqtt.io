"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9829],{564187:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-2df294f8","path":"/devices/RTCGQ11LM.html","title":"Aqara RTCGQ11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara RTCGQ11LM control via MQTT","description":"Integrate your Aqara RTCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]},{"level":3,"title":"Note about occupancy_timeout option","slug":"note-about-occupancy-timeout-option","link":"#note-about-occupancy-timeout-option","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706958456000},"filePathRelative":"devices/RTCGQ11LM.md"}')},971666:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var n=i(166252);const o=(0,n._)("h1",{id:"aqara-rtcgq11lm",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#aqara-rtcgq11lm","aria-hidden":"true"},"#"),(0,n.Uk)(" Aqara RTCGQ11LM")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"RTCGQ11LM")],-1),c=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Motion sensor")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, occupancy, device_temperature, voltage, illuminance_lux, illuminance, power_outage_count, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCGQ11LM.jpg",alt:"Aqara RTCGQ11LM"})])],-1),d=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2450 battery.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><p>In some cases where users are using a CC2531 USB stick (see https://github.com/Koenkk/zigbee2mqtt/issues/839) performing a shutdown of Zigbee2MQTT, removing and reinserting the USB stick, then restarting Zigbee2MQTT has proven successful for pairing via the above method when it has not been working.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul>',9),h={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},p=(0,n._)("h3",{id:"note-about-occupancy-timeout-option",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#note-about-occupancy-timeout-option","aria-hidden":"true"},"#"),(0,n.Uk)(" Note about "),(0,n._)("code",null,"occupancy_timeout"),(0,n.Uk)(" option")],-1),m=(0,n._)("code",null,"occupancy_timeout",-1),b=(0,n._)("code",null,"occupancy: true",-1),g=(0,n._)("code",null,"occupancy: true",-1),f={href:"https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973",target:"_blank",rel:"noopener noreferrer"},v={href:"https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806",target:"_blank",rel:"noopener noreferrer"},y=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),k=(0,n.uE)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),w={},_=(0,i(983744).Z)(w,[["render",function(e,t){const i=(0,n.up)("RouterLink"),w=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[r,(0,n._)("tr",null,[c,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Aqara"},{default:(0,n.w5)((()=>[(0,n.Uk)("Aqara")])),_:1})])]),l,s,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,(0,n._)("p",null,[(0,n.Uk)("More detailed information about this can be found "),(0,n._)("a",h,[(0,n.Uk)("here"),(0,n.Wm)(w)]),(0,n.Uk)(".")]),p,(0,n._)("p",null,[m,(0,n.Uk)(" should not be set to lower than 60 seconds. The reason is this: after detecting a motion the sensor ignores any movements for exactly 60 seconds. In case there are movements after this 60 seconds, a new message ("),b,(0,n.Uk)(") will be sent and the sensor will go to sleep for another minute, and so on. Therefore, in order to sustain "),g,(0,n.Uk)(", you need a reasonable window after this 60s sleep to determine continued occupancy. This is expected behaviour (see "),(0,n._)("a",f,[(0,n.Uk)("#270"),(0,n.Wm)(w)]),(0,n.Uk)("). To work around this, a "),(0,n._)("a",v,[(0,n.Uk)("hardware modification"),(0,n.Wm)(w)]),(0,n.Uk)(" is needed.")]),(0,n.kq)(" Notes END: Do not edit below this line "),y,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);