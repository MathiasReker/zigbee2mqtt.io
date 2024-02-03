"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42337],{371035:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-74c50297","path":"/devices/BAC-002-ALZB.html","title":"HKGK BAC-002-ALZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HKGK BAC-002-ALZB control via MQTT","description":"Integrate your HKGK BAC-002-ALZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-28T13:25:07.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Stop message flooding","slug":"stop-message-flooding","link":"#stop-message-flooding","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Week (enum)","slug":"week-enum","link":"#week-enum","children":[]},{"level":3,"title":"Workdays schedule (text)","slug":"workdays-schedule-text","link":"#workdays-schedule-text","children":[]},{"level":3,"title":"Holidays schedule (text)","slug":"holidays-schedule-text","link":"#holidays-schedule-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706958456000},"filePathRelative":"devices/BAC-002-ALZB.md"}')},997376:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var d=o(166252);const i=(0,d._)("h1",{id:"hkgk-bac-002-alzb",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#hkgk-bac-002-alzb","aria-hidden":"true"},"#"),(0,d.Uk)(" HKGK BAC-002-ALZB")],-1),a=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"BAC-002-ALZB")],-1),s=(0,d._)("td",null,"Vendor",-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"BAC series thermostat")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"lock (state), climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, preset, fan_mode), sensor, week, workdays_schedule, holidays_schedule, linkquality")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BAC-002-ALZB.jpg",alt:"HKGK BAC-002-ALZB"})])],-1),h=(0,d.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.</p><h3 id="stop-message-flooding" tabindex="-1"><a class="header-anchor" href="#stop-message-flooding" aria-hidden="true">#</a> Stop message flooding</h3><p>This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your <code>configuration.yaml</code> file:</p><p>devices: &#39;0x12345678&#39;: friendly_name: thermostat debounce: 1</p>',6),u=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>preset</code>, <code>fan_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>45</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>cool</code>, <code>heat</code>, <code>fan_only</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>hold</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-10</code> and the maximum value is <code>10</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>IN</code>, <code>AL</code>, <code>OU</code>.</p><h3 id="week-enum" tabindex="-1"><a class="header-anchor" href="#week-enum" aria-hidden="true">#</a> Week (enum)</h3><p>Week format user for schedule. Value can be found in the published state on the <code>week</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;week&quot;: NEW_VALUE}</code>. The possible values are: <code>5+2</code>, <code>6+1</code>, <code>7</code>.</p><h3 id="workdays-schedule-text" tabindex="-1"><a class="header-anchor" href="#workdays-schedule-text" aria-hidden="true">#</a> Workdays schedule (text)</h3><p>Workdays schedule, 6 entries max, example: &quot;00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C&quot;. Value can be found in the published state on the <code>workdays_schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;workdays_schedule&quot;: NEW_VALUE}</code>.</p><h3 id="holidays-schedule-text" tabindex="-1"><a class="header-anchor" href="#holidays-schedule-text" aria-hidden="true">#</a> Holidays schedule (text)</h3><p>Holidays schedule, 6 entries max, example: &quot;00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C&quot;. Value can be found in the published state on the <code>holidays_schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holidays_schedule&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[a,(0,d._)("tbody",null,[l,(0,d._)("tr",null,[s,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=HKGK"},{default:(0,d.w5)((()=>[(0,d.Uk)("HKGK")])),_:1})])]),c,n,r])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,d.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);