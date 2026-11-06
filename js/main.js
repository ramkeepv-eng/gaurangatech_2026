(() => {
/* ================= DATA ================= */
const SOL = [
 {slug:'product-engineering', name:'Product Engineering & R&D', tag:'Engineer', icon:'chip',
  short:'Embedded hardware, firmware and application software — from concept to a production-ready product.',
  hero:'We design and develop embedded systems, application software and end-to-end product solutions, and partner as an OEM for customer-specific requirements.', img:'gen-lab', slides:['site-pcb-gold','gen-lab','site-pcb-blue','gen-rail','gen-bms'],
  body:['Gauranga Technologies offers cost-effective, high-quality solutions for software, hardware and complete turnkey product development projects.','Our teams cover the full product lifecycle — from requirement analysis and schematic design to firmware, application software, field trials and documentation for transfer of technology.'],
  lead:'',
  services:[
   ['Embedded hardware design','Schematic design, PCB layout, component selection, power and communication interface design.',['Schematic','PCB layout','Power'],0],
   ['Firmware development','Microcontroller and RTOS-based firmware, drivers and communication stacks such as UART, SPI, I2C and CAN.',['MCU','RTOS','CAN'],0],
   ['Linux SoC platforms','Board support packages and system programming for Linux-based industrial devices.',['BSP','Embedded Linux'],0],
   ['Application software','Desktop, web and Android applications for monitoring, reporting and plant operations.',['Web','Android','Desktop'],0],
   ['Mechanical & enclosure design','Mechanical design and fitment for prototypes and production hardware.',['Enclosures','Fitment'],0],
   ['OEM partnership','Developing solutions and partnering as an OEM for customer-specific products.',['OEM','Turnkey'],0],
   ['Edge analytics & predictive alerts','Rate-of-change models that warn operators before parameters reach alarm limits.',['Edge','Plant Analyzer'],1]],
  products:['polarix','e-log-book','plant-analyzer','intig','dms'], cases:['25kva-inverter','lamination-machine-controller','ene-box-android-app','mvb-interface'],
  tech:['ARM Cortex-M','Embedded Linux','RTOS','C / C++','Android','Altium']},
 {slug:'industrial-automation-iot', name:'Industrial Automation & IoT', tag:'Connect', icon:'net',
  short:'Data loggers, gateways, alert systems and plant software that connect field devices to people and servers.',
  hero:'Industry 4.0 is the ongoing automation of traditional manufacturing and industrial practices using modern smart technology. We build the devices and software that make it work on the plant floor.', img:'gen-control-room', slides:['gen-control-room','gen-solar','prod-power-meter-gateway','prod-lvs-annunciation'],
  body:['Our IT & OT work integrates information technology systems with the operational technology that monitors plant activities, processes and devices.','Gauranga products collect data from field devices, keep it safe through network outages, and deliver alarms to operators and remote engineers by voice, SMS, call and email.'],
  lead:'Gauranga products collect data from field devices, keep it safe through network outages, and deliver alarms to operators and remote engineers by voice, SMS, call and email.',
  services:[
   ['Industrial data acquisition','Collecting data from Modbus devices, energy meters, sensors and digital/analog inputs.',['Modbus','Energy meters','DI / AI'],0],
   ['Gateways & cloud connectivity','Posting plant data to local or internet-based servers, with local buffering during downtime.',['HTTP','MQTT','Buffering'],0],
   ['Alarm management','Consolidating alarms from multiple plant systems and annunciating them to operators.',['Annunciation','OPC'],0],
   ['Remote alerting','SMS, voice call and localized voice announcements triggered from SCADA, HMI and PLCs.',['SMS','Voice','GSM'],0],
   ['Plant operations software','Electronic log books, annunciation and predictive plant health monitoring.',['E-Log Book','LVS','Plant Analyzer'],0],
   ['Energy & solar monitoring','Energy monitoring and 4G IoT logging for rooftop solar plants.',['4G','Inverters'],0],
   ['Environmental compliance monitoring','Stack and effluent data logging to CPCB/SPCB guidelines, powered by POLARIX.',['CPCB','SPCB','POLARIX'],1]],
  products:['sys-alert','polarix','power-meter-gateway','lvs-annunciation','e-log-book','plant-analyzer'], cases:['solar-4g-iot-logger','alarm-multiplexor','ene-box-android-app'],
  tech:['Modbus RTU','Modbus TCP/IP','RS485','RS232','CAN','Ethernet','MVB','OPC','BACnet','PI/OSI','MQTT','REST APIs','HTTP / HTTPS','SMTP','SNTP','GSM / GPRS / 4G']},
 {slug:'manufacturing-validation', name:'Manufacturing & V&V', tag:'Build & validate', icon:'factory',
  short:'Prototyping, OEM and contract manufacturing, with validation against your requirements.',
  hero:'Partner with us to manufacture your products. We offer multiple variants in our manufacturing segment based on your project requirements — prototyping, OEM or contract manufacturing.', img:'gen-manufacturing', slides:['gen-manufacturing','gen-mvb','gen-rail','photo-intig'],
  body:['From prototype boards for firmware development to production of control boards, we support customers through the transition from design to manufacture.','Validation is built into our engineering work: lab testing, site trials, extended regression runs and testing to the standards a customer specifies.'],
  lead:'From prototype boards for firmware development to production of control boards, we support customers through the move from design to manufacture. Validation is built into our engineering work: lab testing, site trials, extended regression runs and testing to the standards a customer specifies.',
  services:[
   ['Prototyping','Prototype board manufacturing for firmware development and field testing.',['Prototype','Field test'],0],
   ['OEM manufacturing','Manufacturing systems and components for use in a customer\'s end product.',['OEM'],0],
   ['Contract manufacturing','Manufacturing products to a customer\'s design and requirements.',['Build-to-print'],0],
   ['Hardware assembly & repair','Assembly, troubleshooting and repair of electronic and IoT devices.',['Assembly','Repair'],0],
   ['Verification & validation','Validation to customer requirements, site and field trials, and protocol analysis with packet and serial-port monitoring.',['RDSO','72-hour regression','Field trials'],0],
   ['Field support & AMC','Commissioning, remote firmware updates and annual maintenance for installed fleets.',['Commissioning','AMC'],1]],
  vv:['Validation of control systems to customer requirements','Site and field trials in operating conditions','Protocol analysis with packet and serial-port monitoring','Testing as per RDSO standards (25kVA inverter project)','72-hour continuous regression testing on client equipment','Bug identification and resolution across design versions'],
  products:['intig','polarix','modbus-data-logger'], cases:['25kva-inverter','mvb-interface','solar-4g-iot-logger'],
  tech:['ISO 9001:2015','RDSO testing','Regression testing','Protocol analysers','Serial-port monitoring']},
 {slug:'digital-design-development', name:'Digital Design & Development', tag:'Madurai studio', icon:'pen', studio:1,
  short:'Social media design, UI/UX and full-stack development from our Madurai studio.',
  hero:'Social media design, UI/UX and full-stack development from our Madurai studio, for industrial and B2B brands.', img:'gen-studio', slides:['gen-studio','studio-web','studio-dashboard','studio-social'],
  body:['Our Madurai studio creates brand content, product interfaces and full-stack web applications for industrial and B2B companies.','Designers and developers work one call away from the firmware and hardware teams, so interfaces and content come from people who understand the product.'],
  lead:'Our Madurai studio creates brand content, product interfaces and full-stack web applications for industrial and B2B companies.',
  services:[
   ['Social media & content design','Post design, campaign creatives, product-launch content and LinkedIn content for B2B brands.',['Posts','Campaigns','Launch kits'],1],
   ['UI/UX design','Research, wireframes, design systems, web and mobile UI, and HMI dashboards for IoT products.',['Research','Design systems','HMI'],1],
   ['Full-stack development','Websites, web apps, admin panels, IoT dashboards, APIs and cloud deployment.',['Web apps','APIs','Cloud'],1]],
  products:[], cases:[], tech:['Figma','React','Node.js','REST APIs','Cloud hosting']}
];
const FAM = [
 {slug:'industrial-alert-systems', name:'Industrial Alert Systems', kind:'alert', desc:'SMS, voice-call and spoken alarms triggered straight from SCADA, HMI and PLC over Modbus.', sol:'industrial-automation-iot', proto:'Modbus TCP/IP · RTU', out:'SMS · voice · call',
  items:['sys-alert','modbus-call-alert','modbus-sms-alert','modbus-voice-alert']},
 {slug:'data-logging-gateways', name:'Data Logging & Gateways', kind:'logger', desc:'Loggers and gateways that read field devices and meters and post the data where it is needed.', sol:'industrial-automation-iot', proto:'Modbus · RS485 · Ethernet', out:'MQTT · HTTP · REST',
  items:['polarix','intig','modbus-data-logger','power-meter-gateway','pmg-gprs','web-io-module']},
 {slug:'monitoring-protection', name:'Monitoring & Protection', kind:'watch', desc:'Watchdogs for cold storage and server rooms that raise voice, SMS and email alarms.', sol:'manufacturing-validation', proto:'Temp · humidity · smoke', out:'Voice · SMS · email',
  items:['cold-storage-watchdog','server-watchdog']},
 {slug:'industrial-software', name:'Industrial Software', kind:'soft', desc:'Control-room software for alarm prediction, annunciation, shift logs and documents.', sol:'product-engineering', proto:'OPC · PI', out:'Web · Excel export',
  items:['plant-analyzer','lvs-annunciation','e-log-book','dms']}
];
const T = 'TBC';
const PROD = {
 'sys-alert':{n:'SYS Alert',f:'industrial-alert-systems',l:'Adds mobile SMS/call alerts and localized multi-language voice warnings to SCADA and PLC systems over Modbus TCP/IP or Modbus RTU.',b:['Works as Modbus master or slave','SMS, voice call and spoken alerts in one unit','Multi-language voice messages'],t:['Modbus TCP/IP','Modbus RTU','RS485'],s:[['Field protocol','Modbus TCP/IP and RTU (RS485)'],['Mode','Master or slave'],['Alert types','SMS, voice call, spoken message'],['Power supply',T],['Operating temperature',T]],a:['Control-room alarm escalation','Unmanned substations','Pump and utility stations']},
 'modbus-call-alert':{n:'Modbus Call Alert',f:'industrial-alert-systems',l:'Places pre-recorded voice calls to configured mobile numbers on commands from SCADA, HMI or PLC.',b:['Voice calls triggered over Modbus','Inbuilt GSM with 24-bit audio codec','Call logging for audit'],t:['Modbus TCP/IP','GSM','Call log'],s:[['Field protocol','Modbus TCP/IP'],['Network','Inbuilt GSM'],['Audio','24-bit codec'],['Product code','[confirm, currently shares SMSTA]'],['Power supply',T]],a:['After-hours alarm calls','Critical-trip escalation','Remote plant supervision']},
 'modbus-sms-alert':{n:'Modbus SMS Alert',f:'industrial-alert-systems',l:'Sends pre-configured SMS alerts to multiple mobile numbers from SCADA and PLC over Modbus.',b:['Up to 100 configurable SMS messages','Multiple recipients per alarm','Wide 9–32 VDC supply'],t:['Modbus TCP/IP','SMS','9–32 VDC'],s:[['Field protocol','Modbus TCP/IP'],['Power supply','9–32 VDC'],['Storage','4 GB SD card'],['Operating temperature','−20 to +70 °C'],['Messages','Up to 100 configurable SMS']],a:['Operator SMS on alarm','Maintenance team alerts','Remote awareness for managers']},
 'modbus-voice-alert':{n:'Modbus Voice Alert',f:'industrial-alert-systems',l:'Plays pre-recorded voice alerts on Modbus TCP/IP commands so operators hear the alarm, not just see it.',b:['Spoken alarms on the shop floor','Pre-recorded announcements','Compact 132 × 93 × 36 mm box'],t:['Modbus TCP/IP','WAV audio','Speaker out'],s:[['Field protocol','Modbus TCP/IP'],['Audio','Pre-recorded WAV files [confirm format]'],['Enclosure','132 × 93 × 36 mm'],['Power supply',T],['Operating temperature',T]],a:['Shop-floor announcements','Control-room voice annunciation','Evacuation messages']},
 'polarix':{n:'POLARIX',f:'data-logging-gateways',isNew:1,photo:'photo-polarix',l:'Industrial-grade IoT data logger for pollution monitoring and compliance reporting, built to CPCB/SPCB guidelines.',
   long:'POLARIX is an industrial-grade IoT data logger designed specifically for pollution monitoring and compliance reporting. Built to meet CPCB/SPCB guidelines, it ensures accurate data acquisition, secure storage and reliable real-time transmission to cloud platforms. With support for Modbus, MQTT, HTTPS and REST APIs, POLARIX integrates with a wide range of sensors and pollution monitoring systems.',
   b:['Built to CPCB/SPCB online-monitoring guidelines','Accurate acquisition, secure storage, real-time transmission','Modbus in; MQTT, HTTPS and REST APIs out'],t:['CPCB/SPCB','Modbus','MQTT','HTTPS','REST'],s:[['Compliance','Built to CPCB/SPCB guidelines'],['Field protocol','Modbus'],['Upstream protocols','MQTT, HTTPS, REST APIs'],['Transmission','Real-time to cloud platforms'],['Ports seen on unit','USB, 2 × Ethernet, terminal-block I/O, power [confirm]'],['Power supply',T],['Operating temperature',T]],a:['Pollution control','Environmental monitoring','Industrial data logging','Cloud integration'],
   feats:[['Key features',['High performance','Robust connectivity','Industrial design','Wide protocol support']],['Benefits',['Regulatory compliance','Remote management','Flexible scalability','Data reliability']]],brochure:1,scene:'gen-stack'},
 'intig':{n:'INTIG',f:'data-logging-gateways',photo:'photo-intig',l:'Collects data from field devices over RS485 and Ethernet and from digital and analog inputs, and posts it to a web server, with local storage for recovery.',b:['RS485 and Ethernet field bus','Digital, analog and PT100 inputs with relay outputs','Local storage for data recovery'],t:['RS485','Ethernet','DI / AI'],s:[['Field bus','RS485, Ethernet'],['Inputs','Digital, analog, PT100 [confirm count]'],['Outputs','2 relays (R1, R2) [confirm]'],['Ports seen on unit','LAN, USB, SIM card slot'],['Power supply','9–32 V DC (label on unit)'],['Upstream','Posts data to a web server'],['Storage','Local, for recovery'],['Operating temperature',T]],a:['Plant data acquisition','Solar plant logging','Utility metering'],scene:'gen-solar'},
 'modbus-data-logger':{n:'Modbus Data Logger',f:'data-logging-gateways',l:'Polls serial Modbus RTUs at regular intervals, time-stamps each reading with an inbuilt RTC and archives it as CSV files you download over the web interface.',b:['Scheduled Modbus RTU polling','Inbuilt RTC time-stamps','CSV archives over an Ethernet web interface'],t:['Modbus RTU','RTC','CSV'],s:[['Field protocol','Modbus RTU (serial)'],['Clock','Inbuilt RTC'],['Data format','CSV files'],['Configuration','Web interface over Ethernet'],['Power supply',T],['Storage',T]],a:['Energy and process logging','Audit trails for meters','Retrofit data capture']},
 'power-meter-gateway':{n:'Power Meter Gateway',f:'data-logging-gateways',l:'Reads energy meters or any Modbus RTU device at configured intervals and posts data over HTTP, buffering locally during server downtime.',b:['Up to 500 parameters','4 GB micro SD buffer','HTTP server posting'],t:['Modbus RTU','HTTP','500 params'],s:[['Field protocol','Modbus RTU'],['Parameters','Up to 500'],['Storage','4 GB micro SD'],['Upstream','HTTP server communication'],['Power supply',T]],a:['Energy management systems','Tenant sub-metering','Utility dashboards']},
 'pmg-gprs':{n:'PMG GPRS',f:'data-logging-gateways',l:'Low-power cellular gateway that reads Modbus RTU energy meters and posts data to local or internet servers.',b:['Low-power design','Up to 500 parameters','Cellular posting'],t:['Modbus RTU','GPRS','Low power'],s:[['Field protocol','Modbus RTU'],['Parameters','Up to 500'],['Network','GPRS'],['Relationship to Power Meter Gateway','[confirm if separate product]'],['Power supply',T]],a:['Remote meter reading','Sites without wired internet']},
 'web-io-module':{n:'Industrial Web IO Module',f:'data-logging-gateways',l:'Internet-enabled I/O device with HTTP, SMTP and SNMP support, four relay outputs and remote firmware updates.',b:['HTTP, SMTP and SNMP','Four relay outputs','Remote firmware updates'],t:['HTTP','SMTP','SNMP','4 relays'],s:[['Protocols','HTTP, SMTP, SNMP'],['Outputs','4 relays'],['Storage','Local'],['Updates','Remote firmware'],['Power supply',T]],a:['Remote switching','Equipment-room monitoring','Email alerts from I/O']},
 'cold-storage-watchdog':{n:'Cold Storage Watchdog',f:'monitoring-protection',l:'Monitors temperature, fire, smoke and humidity in cold storage and raises voice alarms, SMS and calls.',b:['Temperature, fire, smoke and humidity','Voice, SMS and call alarms','Configurable signals'],t:['Temperature','Humidity','Voice / SMS'],s:[['Sensors','Temperature, fire, smoke, humidity'],['Alerts','Voice alarm, SMS, voice call'],['Signals','Configurable'],['Power supply',T]],a:['Cold chain warehouses','Pharma storage','Food processing']},
 'server-watchdog':{n:'Server Watchdog',f:'monitoring-protection',l:'Watches servers, IP devices and the server-room environment, and alerts the team by voice call and email.',b:['Server and IP device checks','Environment sensors','Voice call and email alerts'],t:['IP monitoring','Environment','Email'],s:[['Monitors','Servers, IP devices, room environment'],['Sensors','Temperature, fire, smoke, humidity'],['Alerts','Voice call, email'],['Power supply',T]],a:['Server rooms','Network closets','Data-centre edges']},
 'plant-analyzer':{n:'Plant Analyzer',f:'industrial-software',l:'Predicts when plant parameters will reach alarm or critical levels by monitoring rate of change, using PI/OSI (OPC) interfaces.',b:['Predictive alarm insight','PI and OPC connectivity','Localised voice alerts'],t:['OPC','PI','Predictive'],s:[['Data sources','PI / OPC'],['Method','Rate-of-change monitoring'],['Alerts','Localised voice'],['Deployment',T]],a:['Boiler and turbine trends','Process upsets','Operator early warning']},
 'lvs-annunciation':{n:'LVS Annunciation System',f:'industrial-software',l:'Replaces hard-wired annunciation with a smart, OPC-connected alarm panel that prioritises, colour-codes and groups alarms on operator screens.',b:['OPC connectivity','Alarm banding and colour coding','Buzzer with mute'],t:['OPC','Alarm panel','Colour coding'],s:[['Connectivity','OPC'],['Display','Alarm banding, colour coding'],['Audible','Buzzer with mute'],['Deployment',T]],a:['Power-plant control rooms','Substation alarm walls']},
 'e-log-book':{n:'E-Log Book',f:'industrial-software',l:'Digital control-room logging: enter daily shift logs, view archives, export to Excel and manage follow-ups across locations.',b:['Shift log entry and archive','Excel export','Centralised database'],t:['Shift logs','Excel export','Database'],s:[['Records','Daily shift logs'],['Export','Excel'],['Storage','Centralised database'],['Deployment',T]],a:['Control-room shift handover','Compliance records']},
 'dms':{n:'DMS',f:'industrial-software',l:'Web-based document management with versioning, approvals, permissions, audit trails and advanced search.',b:['Approval workflow','Role and permission management','Audit trails'],t:['Web','Approvals','Audit trail'],s:[['Access','Web-based'],['Workflow','Versioning and approvals'],['Security','Roles and permissions'],['Records','Audit trails'],['Deployment',T]],a:['Engineering drawings control','Quality documents','Plant SOPs']}
};
Object.keys(PROD).forEach(k => { if(!PROD[k].photo){ PROD[k].photo = 'prod-'+k; PROD[k].gen = 1; } });
const CASES = [
 {slug:'solar-4g-iot-logger',n:'Solar 4G IoT Logger',sol:'industrial-automation-iot',ind:'Solar & renewables',img:'gen-solar',
  sum:'A cost-effective, customisable 4G IoT logger for rooftop solar plants, built on a Linux SoC.',
  m:[['500','+','installations in the field'],['400','MW','of rooftop solar monitored (approx.)']],
  ov:'A rooftop solar plant solutions provider serving industrial customers with large power consumption. Off-the-shelf IoT devices were costly and offered no customisation.',
  ch:['Develop a cost-effective, customisable 4G IoT logger specifically for solar rooftops.','Where plants run alongside diesel generators, adjust solar generation to load demand and avoid reverse flow to the DG.','For customers without grid export permission, generate only what the load requires.','Post data to the cloud, with digital and analog inputs, USB expansion, Ethernet and isolated RS485 ports, and multi-protocol communication with field inverters.'],
  ap:['Protocol decoding for field inverters and solar devices.','Linux board support package development and low-level system programming.','4G hardware design with proper antenna and signal reception.','Interfacing I/Os and RS485 ports with the Linux SoC in hardware and firmware.','Server communications and VPN for remote configuration.','DG synchronisation and load-following control of the solar plant.'],
  so:'Gauranga opted for a Linux SoC platform. Analog inputs, digital inputs and RS485 buses were integrated with the SoC, and a full-fledged running system was achieved in quick time.',
  out:['In production, with close to 500+ installations in the field.','The customer manages data from the office, with remote connectivity to each plant for debugging and configuration.','Data is used for plant performance analytics and to plan cleaning and maintenance.','Loggers monitor close to 400 MW of solar power across rooftop plants.'],
  tech:['Linux SoC','4G','RS485','Ethernet','USB','VPN','Digital & analog I/O'],prods:['intig','power-meter-gateway','polarix']},
 {slug:'25kva-inverter',n:'25kVA Inverter Control System',sol:'product-engineering',ind:'Railways & transport',img:'gen-rail',
  sum:'Redesign and validation of the control system for under-slung 25kVA inverters used in railway AC coaches.',
  m:[['25','kVA','under-slung inverter'],['RDSO','','test standards followed']],
  ov:'Under-slung inverters supply power to air-conditioning in railway coaches and must pass railway test standards.',
  ch:['Redesign the inverter control system for reliable operation under coach conditions.','Validate the control system against the customer\'s requirements and railway standards.'],
  ap:['Control-electronics and firmware redesign.','Validation of the control system to customer requirements.','Testing as per RDSO standards.'],
  so:'Gauranga redesigned the control system and supported its validation and testing to RDSO standards.',
  out:['Control system redesigned and validated for under-slung 25kVA inverters in railway AC coaches. [Further results to confirm]'],
  tech:['Power-electronics control','Firmware','RDSO testing'],prods:[]},
 {slug:'mvb-interface',n:'MVB Interface for 3x130kVA Converter',sol:'manufacturing-validation',ind:'Railways & transport',img:'gen-mvb',
  sum:'Implementing MVB message-data communication for a railway auxiliary converter.',
  m:[['3x130','kVA','auxiliary converter'],['MVB','','train communication bus']],
  ov:'A railway auxiliary converter had to exchange message data with the train over the Multifunction Vehicle Bus (MVB).',
  ch:['Implement MVB message-data communication for a 3x130kVA auxiliary converter.','Verify the bus traffic on real equipment in a railway lab.'],
  ap:['Protocol analysis with packet and serial-port monitoring.','Interface firmware for MVB message data.','Bench validation on client equipment.'],
  so:'Gauranga implemented the MVB message communication and verified it against live bus traffic.',
  out:['MVB message-data communication implemented for the converter. [Further results to confirm]'],
  tech:['MVB','Protocol analysis','Embedded firmware'],prods:[]},
 {slug:'alarm-multiplexor',n:'Alarm Multiplexor',sol:'industrial-automation-iot',ind:'Power & utilities',img:'gen-control-room',
  sum:'Alarms from five plant servers consolidated onto one control-room screen at a Mumbai power generation unit.',
  m:[['5','','plant servers consolidated'],['1','','control-room alarm view']],
  ov:'Operators at a Mumbai power generation unit watched alarms from five separate plant servers.',
  ch:['Consolidate alarms from five plant servers onto one control-room screen.','Keep alarm priority and timing intact across systems.'],
  ap:['Architecture of a Linux/ARM multiplexor box.','A Windows alarm server for the control room.','Alarm logic and operator display, commissioned on site.'],
  so:'Gauranga delivered a Linux/ARM multiplexor box and a Windows alarm server that bring every alarm onto one screen.',
  out:['One control-room view of alarms from five plant servers. [Further results to confirm]'],
  tech:['Linux / ARM','Windows alarm server','Alarm logic'],prods:['lvs-annunciation','sys-alert']},
 {slug:'ene-box-android-app',n:'ENE Box Android Application for Johnson Controls',sol:'product-engineering',ind:'Building automation',img:'gen-bms',
  sum:'An Android tablet energy-monitoring and reporting utility communicating with Metasys over BACnet.',
  m:[['BACnet','','building protocol'],['Android','','tablet utility']],
  ov:'Building teams needed energy monitoring and reporting on a tablet, connected to the Metasys building management system.',
  ch:['Read energy data from Metasys over BACnet.','Present monitoring and reports on an Android tablet.'],
  ap:['BACnet integration with Metasys.','Android application design and development.','Field testing in a building plant room.'],
  so:'Gauranga built an Android tablet utility that monitors and reports energy by communicating with Metasys over BACnet.',
  out:['Energy monitoring and reporting available on an Android tablet. [Further results to confirm]'],
  tech:['Android','BACnet','Metasys'],prods:[]},
 {slug:'lamination-machine-controller',n:'Lamination Machine Controller',sol:'product-engineering',ind:'Process & manufacturing',img:'gen-lamination',
  sum:'A controller with a touch operator panel and PID roller-temperature control for a laminator.',
  m:[['PID','','roller-temperature control'],['Touch','','operator panel']],
  ov:'A lamination machine needed precise roller-temperature control and a simpler operator interface.',
  ch:['Hold roller temperature steadily during lamination.','Give operators a touch interface for set-points and status.'],
  ap:['Controller hardware and firmware.','PID roller-temperature control loop.','Touch operator panel and on-machine trials.'],
  so:'Gauranga designed a controller with a touch panel and PID control of roller temperature.',
  out:['Laminator running on the new controller with touch operation. [Further results to confirm]'],
  tech:['Controller hardware','PID control','Touch HMI'],prods:[]}
];
const INDS = [['Power & utilities','Alarm multiplexing, energy-meter gateways and control-room alerts.'],['Solar & renewables','4G IoT loggers for rooftop and utility-scale plants.'],['Railways & transport','Power-electronics control and train-bus interfaces.'],['Building automation','BACnet and Modbus integration for BMS and HVAC.'],['Environmental compliance','CPCB/SPCB stack and effluent data reporting.'],['Process & manufacturing','Plant analytics, e-log books and machine controllers.']];
const ROLES = [
 {slug:'firmware-engineer',n:'Firmware Engineer',team:'Embedded Systems',loc:'Navi Mumbai',type:'Full-time',sum:'Senior Firmware Engineer responsible for design, development, and optimization of embedded firmware for IoT and embedded systems.'},
 {slug:'hardware-design-engineer',n:'Hardware Design Engineer',team:'Embedded Systems',loc:'Navi Mumbai',type:'Full-time',sum:'Senior Hardware Design Engineer responsible for end-to-end design and development of embedded hardware systems.'},
 {slug:'layout-design-engineer',n:'Layout Design Engineer',team:'Embedded Systems',loc:'Navi Mumbai',type:'Full-time',sum:'Location: Turbhe, Navi Mumbai. Experience: 1–4 Years (Flexible based on skill)'},
 {slug:'mechanical-engineer',n:'Mechanical Engineer',team:'Embedded Systems',loc:'Navi Mumbai',type:'Full-time',sum:'Mechanical Engineer responsible for designing and developing mechanical enclosures and structures for embedded and IoT devices.'},
 {slug:'software-developer',n:'Software Developer',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'Senior Software Developer responsible for designing, developing, and maintaining scalable software applications.'},
 {slug:'software-tester',n:'Software Tester',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'Software Tester responsible for ensuring quality and reliability of software applications through systematic testing.'},
 {slug:'support-technical-engineer',n:'Support Technical Engineer',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'Support Technical Engineer responsible for configuration, troubleshooting, maintenance, and day-to-day support of IoT devices and related systems.'},
 {slug:'hardware-technician',n:'Hardware Technician',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'Senior Hardware Technician responsible for advanced-level hardware assembly, troubleshooting, repair, and maintenance.'},
 {slug:'system-administrator',n:'System Administrator',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'System Administrator responsible for managing, maintaining, and supporting the organization\'s IT infrastructure, including servers and networks.'},
 {slug:'hr-generalist-recruiter',n:'HR Generalist & Recruiter',team:'General',loc:'Navi Mumbai',type:'Full-time',sum:'We are looking for a proactive and people-oriented HR Generalist & Recruiter with around 0–2 years of experience to manage end-to-end recruitment.'},
 {slug:'sales-officer',n:'Sales Officer',team:'General',loc:'Navi Mumbai',type:'Full-time',pending:1,sum:'The product is related to Software, Hardware, Embedded and complete Turn Key product development Sales.'},
 {slug:'ui-ux-designer',n:'UI/UX Designer',team:'Design & Digital',loc:'Madurai',type:'Full-time',sample:1,sum:'Research and design for web, mobile and HMI interfaces.'},
 {slug:'full-stack-developer',n:'Full-stack Developer',team:'Design & Digital',loc:'Madurai',type:'Full-time',sample:1,sum:'Websites, web apps, admin panels and IoT dashboards.'},
 {slug:'social-media-designer',n:'Social Media Designer',team:'Design & Digital',loc:'Madurai',type:'Full-time',sample:1,sum:'Posts, campaigns and launch content for B2B brands.'}
];
const FW_JD = {
 resp:['Develop and maintain firmware for embedded systems and IoT devices','Design and implement drivers, middleware and application-level code','Work on microcontrollers and RTOS-based systems','Handle communication protocols (UART, SPI, I2C, CAN, MQTT, HTTP and others)','Debug and troubleshoot firmware issues at system level','Optimise code for performance, memory and power consumption','Collaborate with the hardware team on board bring-up and integration','Perform firmware testing, validation and release management','Implement OTA firmware updates and version control','Analyse field issues and provide timely fixes'],
 skills:['Strong C/C++ for embedded systems','Microcontrollers (ARM, ESP, AVR and others)','RTOS concepts and implementation','Communication protocols and networking basics','Debugging tools such as JTAG and logic analysers','Version control (Git, SVN)'],
 edu:'Bachelor\'s or Master\'s degree in Electronics, Computer Engineering or a related field.',
 exp:'2+ years in embedded firmware development; IoT firmware experience preferred.'
};
const OFFICES = [
 ['HQ · India','Navi Mumbai, Maharashtra','Gauranga Technologies','Plot D3, Unit No A-403 & 404, Everest Nivara Infotech Park, MIDC, TTC Industrial Area, Turbhe, Navi Mumbai 400705','+91 90290 97823'],
 ['Design studio · India','Madurai, Tamil Nadu','Gauranga Design Studio [confirm name]','[Address to confirm]','']
];
const CLIENTS = ['Tata Power','Johnson Controls','Siemens','Larsen & Toubro','TÜV NORD','Hind Rectifiers','Amplus Solar','Trident','Aveo Engineering'];
const QUOTES = [
 {q:'The Solutions that Gauranga Soft-Tech Private Limited have implemented in Tata Power are fully functional and are being currently in use.',w:'Sachin Gurao',r:'Group Head – Automation Engineering · The Tata Power Company Limited',k:'Tata Power'},
 {q:'It\u2019s been a great experience working with Gauranga Group. We are happy with the Quality of their products and the support extended by the team.',w:'Ankur Gupta',r:'VP, New Products & Technologies · Amplus KN One Power Private Limited',k:'Amplus'},
 {q:'During our working with Gauranga, we found them technically competent, sincere, committed, innovative, sensitive to the requirements, and highly cooperative.',w:'Christian R Neilsen',r:'Owner · Strojkov Engineering',k:'Strojkov'}
];
const LAYERS = [
 ['A1','Enclosure & mechanical design','Industrial enclosures, mounting and thermal fit, designed by our mechanical engineers.'],
 ['A2','Hardware & PCB','Schematics, component selection and multi-layer PCB layout for field conditions.'],
 ['A3','Firmware & protocol stack','MCU, RTOS and embedded Linux firmware speaking Modbus, MQTT, OPC and BACnet.'],
 ['A4','Cloud & application software','Dashboards, alarm management, Android apps and APIs that turn data into action.']
];

/* ================= HELPERS ================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const solBy = s => SOL.find(x => x.slug === s);
const famBy = s => FAM.find(x => x.slug === s);
const caseBy = s => CASES.find(x => x.slug === s);
const ARR = '<svg class="arr" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;
const FULLLOGO = 'images/logo-full.png';
const IMG = n => `images/${n}.webp`;
const media = (src, alt, cls='', tag='') => `<div class="media rv ${cls}"><img src="${src}" alt="${esc(alt)}" loading="lazy" data-par>${tag?`<span class="tagline">${tag}</span>`:''}</div>`;

const ICONS = {
 chip:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3"/></svg>',
 net:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="2.6"/><circle cx="4.5" cy="5" r="2"/><circle cx="19.5" cy="5" r="2"/><circle cx="4.5" cy="19" r="2"/><circle cx="19.5" cy="19" r="2"/><path d="M6 6.4l4.2 3.8M18 6.4l-4.2 3.8M6 17.6l4.2-3.8M18 17.6l-4.2-3.8"/></svg>',
 factory:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 21h20M4 21V11l5 3v-3l5 3v-3l5 3v7"/><path d="M15 6l2 2 4-4.5"/></svg>',
 pen:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 7l3 3"/><path d="M3 4h7"/></svg>',
 bolt:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
 sun:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M12 1.5v1.5M5.5 8H4M20 8h-1.5M7.2 3.2l1 1M16.8 3.2l-1 1M3 22l3-8h12l3 8zM9 14l-1 8M15 14l1 8M4.5 18h15"/></svg>',
 rail:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="5" y="2.5" width="14" height="15" rx="3"/><path d="M5 10.5h14M8.5 21l-2 1.5M15.5 21l2 1.5M8.5 17.5V21h7v-3.5"/><circle cx="9" cy="14" r=".8"/><circle cx="15" cy="14" r=".8"/></svg>',
 bldg:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 22h18M5 22V6l7-4 7 4v16M9 9h1.5M13.5 9H15M9 13h1.5M13.5 13H15M9 17h1.5M13.5 17H15"/></svg>',
 leaf:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 22V11h4.5v11M10 22V4h4.5v18M16 22v-7h4.5v7M2 22h20"/><path d="M12.5 1c1.6.8 1.6 2.2 0 3"/></svg>',
 gear:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3.6"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>',
 check:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3.5 9.5l3.5 3.5 7.5-8"/></svg>',
 down:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 2.5v9M4 8l4 4 4-4M2.5 14h11"/></svg>',
 chev:'<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 4.5l3 3 3-3"/></svg>',
 alert:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="7" cy="7" r="6"/><path d="M7 4v3.5M7 10h.01"/></svg>'
};
const INDICON = ['bolt','sun','rail','bldg','leaf','gear'];
const ERR = msg => `<span class="err">${ICONS.alert}${msg}</span>`;

/* device illustrations: white line-art on the drafting grid, one look per family */
function devArt(kind, label, cap=true, no=''){
  const L = esc(label).slice(0,18);
  const S = '#8a827a', I = '#1d1a17', R = '#9c3824', Y = '#f0a428', G = '#1e7a4c', W = '#ffffff', B = '#f7f4f0';
  let g = '';
  if(kind==='alert') g = `<rect x="40" y="44" width="160" height="106" rx="10" fill="${W}" stroke="${S}" stroke-width="1.5"/><rect x="40" y="44" width="160" height="20" rx="10" fill="${B}" stroke="${S}" stroke-width="1.5"/><g fill="${B}" stroke="${S}"><rect x="52" y="132" width="12" height="14"/><rect x="70" y="132" width="12" height="14"/><rect x="88" y="132" width="12" height="14"/><rect x="106" y="132" width="12" height="14"/></g><circle cx="178" cy="54" r="4" fill="${G}"/><circle cx="164" cy="54" r="4" fill="${Y}"/><g stroke="${R}" stroke-width="2" fill="none"><path d="M150 96c8-8 8-22 0-30"/><path d="M162 104c14-14 14-38 0-52"/></g><rect x="58" y="76" width="66" height="34" rx="4" fill="${B}" stroke="${S}"/><text x="91" y="97" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="${I}">${L}</text><path d="M200 72V40" stroke="${S}" stroke-width="3"/><circle cx="200" cy="36" r="5" fill="${S}"/>`;
  else if(kind==='logger') g = `<rect x="34" y="52" width="172" height="96" rx="12" fill="${W}" stroke="${S}" stroke-width="1.5"/><path d="M46 52h48v96H46a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12z" fill="${Y}"/><text x="64" y="104" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="11" fill="${I}" transform="rotate(-90 64 100)">${L}</text><g fill="${B}" stroke="${S}"><rect x="108" y="126" width="16" height="14" rx="2"/><rect x="130" y="126" width="16" height="14" rx="2"/><rect x="152" y="126" width="22" height="14" rx="2"/><rect x="180" y="126" width="16" height="14" rx="2"/></g><circle cx="112" cy="66" r="3.5" fill="${G}"/><circle cx="124" cy="66" r="3.5" fill="${Y}"/><circle cx="136" cy="66" r="3.5" fill="${R}"/><rect x="108" y="80" width="88" height="32" rx="4" fill="${B}" stroke="${S}"/><path d="M114 104l10-8 10 4 10-10 10 6 10-6 10 8 10-4" fill="none" stroke="${R}" stroke-width="1.8"/><path d="M196 52V24" stroke="${S}" stroke-width="3"/><circle cx="196" cy="20" r="5" fill="${S}"/>`;
  else if(kind==='watch') g = `<rect x="58" y="34" width="124" height="132" rx="14" fill="${W}" stroke="${S}" stroke-width="1.5"/><circle cx="120" cy="88" r="34" fill="${B}" stroke="${S}"/><path d="M92 88a28 28 0 0 1 56 0" fill="none" stroke="${Y}" stroke-width="4" stroke-linecap="round"/><path d="M120 88l18-14" stroke="${R}" stroke-width="3" stroke-linecap="round"/><circle cx="120" cy="88" r="4" fill="${R}"/><text x="120" y="148" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="${I}">${L}</text><g fill="${S}"><circle cx="76" cy="50" r="3"/><circle cx="164" cy="50" r="3"/></g>`;
  else g = `<rect x="26" y="40" width="188" height="124" rx="10" fill="${W}" stroke="${S}" stroke-width="1.5"/><rect x="26" y="40" width="188" height="20" rx="10" fill="${B}" stroke="${S}" stroke-width="1.5"/><g fill="${S}"><circle cx="40" cy="50" r="3"/><circle cx="50" cy="50" r="3"/><circle cx="60" cy="50" r="3"/></g><rect x="38" y="70" width="44" height="82" rx="4" fill="${B}"/><g fill="${S}" opacity=".5"><rect x="44" y="78" width="32" height="5" rx="2"/><rect x="44" y="90" width="26" height="5" rx="2"/><rect x="44" y="102" width="30" height="5" rx="2"/></g><rect x="90" y="70" width="112" height="40" rx="4" fill="${B}"/><path d="M98 100l14-12 14 6 14-14 14 8 14-6 14 10" fill="none" stroke="${R}" stroke-width="2"/><rect x="90" y="116" width="54" height="36" rx="4" fill="${B}"/><rect x="148" y="116" width="54" height="36" rx="4" fill="${B}"/><rect x="96" y="124" width="22" height="8" rx="2" fill="${G}"/><rect x="154" y="124" width="30" height="8" rx="2" fill="${Y}"/><text x="146" y="66" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="${I}">${L}</text>`;
  return `<div class="dev"><svg viewBox="0 0 240 190" role="img" aria-label="${esc(label)} illustration">${g}</svg>${no?`<span class="no">${no}</span>`:''}${cap?'<span class="cap">Illustration · photo pending</span>':''}</div>`;
}

/* ================= SHELL ================= */
function buildNav(){
  const solItems = SOL.map(s => `<a class="pi" href="#sol-${s.slug}"><b>${esc(s.name)}${s.studio?' <span class="new">NEW</span>':''}</b><span>${esc(s.short)}</span></a>`).join('');
  const prodCols = FAM.map(f => `<div class="pcol"><h4><a href="#fam-${f.slug}">${esc(f.name)}</a></h4><ul>${f.items.map(p => `<li><a href="#product-${p}">${esc(PROD[p].n)}</a></li>`).join('')}</ul></div>`).join('');
  $('#nav').innerHTML = `
   <a href="#home" data-route="home">Home</a>
   <div class="dd" data-dd><button aria-expanded="false" aria-haspopup="true" data-route="sol">Solutions ${ICONS.chev}</button>
     <div class="panel panel-sol">${solItems}<div class="panel-foot"><a class="link" href="#solutions">View all solutions</a><a class="link" href="#contact">Talk to an engineer →</a></div></div></div>
   <div class="dd" data-dd><button aria-expanded="false" aria-haspopup="true" data-route="prod">Products ${ICONS.chev}</button>
     <div class="panel panel-prod">${prodCols}<a class="feat" href="#product-polarix"><span class="new" style="align-self:flex-start">NEW</span><b style="font-family:var(--f-display);font-stretch:112%;font-size:20px">POLARIX</b><span style="font-size:13px;color:var(--muted);line-height:1.45">CPCB/SPCB pollution-monitoring data logger</span><span class="link" style="font-size:13.5px;margin-top:auto">View product →</span></a>
     <div class="panel-foot" style="grid-column:1/-1"><a class="link" href="#products">View all 16 products</a><a class="link" href="#quote">Request a quote →</a></div></div></div>
   <a href="#case-studies" data-route="case">Case Studies</a>
   <a href="#about" data-route="about">About Us</a>
   <a href="#careers" data-route="careers">Careers</a>
   <a href="#contact" data-route="contact">Contact</a>`;
  $$('[data-dd]').forEach(dd => {
    const b = dd.querySelector('button');
    let t;
    const open = v => { dd.classList.toggle('open', v); b.setAttribute('aria-expanded', v); };
    b.addEventListener('click', e => { e.stopPropagation(); const v = !dd.classList.contains('open'); closeDD(); open(v); });
    dd.addEventListener('mouseenter', () => { if(fine){ clearTimeout(t); $$('[data-dd]').forEach(o => o!==dd && o.classList.remove('open')); open(true); }});
    dd.addEventListener('mouseleave', () => { if(fine){ t = setTimeout(() => open(false), 160); }});
  });
  document.addEventListener('click', e => { if(!e.target.closest('[data-dd]')) closeDD(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape'){ closeDD(); closeM(); }});

  const acc = (id, label, links) => `<button class="ml" aria-expanded="false" aria-controls="${id}" data-acc>${label} ${ICONS.chev}</button><div class="macc" id="${id}">${links}</div>`;
  $('#mnav').innerHTML = `<div class="mnav-top"><a class="logo" href="#home" aria-label="Gauranga Technologies home"><img src="${FULLLOGO}" alt="Gauranga"></a><button class="burger" style="display:inline-flex" id="mclose" aria-label="Close menu"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16"/></svg></button></div>
   ${acc('m-sol','Solutions', `<a href="#solutions">All solutions</a>`+SOL.map(s=>`<a href="#sol-${s.slug}">${esc(s.name)}</a>`).join(''))}
   ${acc('m-prod','Products', `<a href="#products">All 16 products</a>`+FAM.map(f=>`<a href="#fam-${f.slug}">${esc(f.name)}</a>`).join(''))}
   <a class="ml" href="#case-studies">Case Studies</a><a class="ml" href="#home">Home</a><a class="ml" href="#about">About Us</a><a class="ml" href="#careers">Careers</a><a class="ml" href="#contact">Contact</a>
   <a class="btn btn-primary" href="#contact">Let’s Talk ${ARR}</a>`;
  $$('#mnav .ml').forEach((el,i) => el.style.animationDelay = (i*45+80)+'ms');
  $$('[data-acc]').forEach(b => b.addEventListener('click', () => { const p = document.getElementById(b.getAttribute('aria-controls')); const v = !p.classList.contains('open'); p.classList.toggle('open', v); b.setAttribute('aria-expanded', v); }));
  $('#burger').addEventListener('click', () => { $('#mnav').classList.add('open'); $('#burger').setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; setTimeout(()=>$('#mclose').focus(),50); });
  $('#mclose').addEventListener('click', closeM);
  $('#mnav').addEventListener('click', e => { if(e.target.closest('a')) closeM(); });
}
function closeDD(){ $$('[data-dd]').forEach(o => { o.classList.remove('open'); o.querySelector('button').setAttribute('aria-expanded','false'); }); }
function closeM(){ const m = $('#mnav'); if(!m.classList.contains('open')) return; m.classList.remove('open'); $('#burger').setAttribute('aria-expanded','false'); document.body.style.overflow=''; }

function buildFooter(){
  const ph = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 2h3l1.5 3.5L5.8 6.6a8 8 0 0 0 3.6 3.6l1.1-1.7L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1z"/></svg>';
  const ml = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="1.5"/><path d="M2 4l6 5 6-5"/></svg>';
  const li = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M2 5.5h2.6V14H2zM3.3 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM6.2 5.5h2.5v1.2h.1c.4-.7 1.2-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1V14H12v-4c0-1 0-2.2-1.3-2.2s-1.6 1-1.6 2.1V14H6.2z"/></svg>';
  $('#ftr').innerHTML = `<div class="wrap"><div class="frame x">
  <div class="ftr-cta"><div style="display:flex;flex-direction:column;gap:12px;max-width:620px"><h2 class="h2 rv">Have an engineering <span class="hl">challenge?</span></h2><p class="lead rv">Tell us about your product, plant or project. Our engineering team will get back to you.</p></div>
    <div class="ctas"><a class="btn btn-sun mag" href="#contact">Let’s Talk ${ARR}</a><a class="btn btn-outline mag" href="#case-studies">See our work</a></div></div>
  <div class="ftr-grid">
    <div><span class="flogo"><img src="${FULLLOGO}" alt="Gauranga logo"></span>
      <p class="fdesc" style="font-size:14px;max-width:36ch;margin-top:16px">Design and development of embedded systems, application software and complete turnkey product solutions for industry. ISO 9001:2015 certified.</p>
      <div class="fcontact"><a href="tel:+919029097823">${ph}+91 90290 97823</a><a href="mailto:info@gaurangatech.com">${ml}info@gaurangatech.com</a><a href="https://www.linkedin.com/company/gauranga-soft-tech" target="_blank" rel="noopener">${li}LinkedIn</a></div></div>
    <div><h4>Solutions</h4>${SOL.map(s=>`<a href="#sol-${s.slug}">${esc(s.name)}</a>`).join('')}</div>
    <div><h4>Products</h4>${FAM.map(f=>`<a href="#fam-${f.slug}">${esc(f.name)}</a>`).join('')}<a href="#products">All products</a></div>
    <div><h4>Company</h4><a href="#case-studies">Case Studies</a><a href="#about">About Us</a><a href="#resources">Resources</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div>
  </div>
  <div class="legal"><span>© 2026 Gauranga Soft-Tech Pvt. Ltd. All rights reserved.</span><span style="display:flex;gap:18px"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms and Conditions</a></span></div>
  </div></div>`;
}

/* ================= SHARED BLOCKS ================= */
const S = (inner, cls='', attrs='') => `<section class="band ${cls}" ${attrs}><div class="wrap"><div class="frame x">${inner}</div></div></section>`;
const DEF_SLIDES = ['gen-lab','site-pcb-blue','gen-control-room'];
const CAPS = {'site-pcb-gold':'Embedded hardware design','site-pcb-blue':'PCB design and layout','site-chip-neon':'Chip-level design','gen-lab':'Product engineering lab','gen-control-room':'Plant control room','gen-manufacturing':'Manufacturing & V&V','gen-solar':'Rooftop solar monitoring','gen-rail':'Railway power electronics','gen-mvb':'Train communication bus','gen-bms':'Building automation','gen-lamination':'Machine controllers','gen-stack':'Environmental monitoring','gen-team':'The Navi Mumbai team','gen-studio':'Madurai design studio','studio-web':'B2B website design','studio-dashboard':'IoT dashboard UI','studio-social':'Social media campaigns','studio-mobile':'Mobile app UX','studio-brand':'Brand launch kits','studio-admin':'Admin panel builds','photo-polarix':'POLARIX · product photo','photo-intig':'INTIG · product photo','about-iso-cert':'ISO 9001:2015 certificate'};
const capOf = n => CAPS[n] || (n.startsWith('prod-') && PROD[n.slice(5)] ? PROD[n.slice(5)].n : 'Gauranga Technologies');
const normSlides = a => a.map(x => typeof x === 'string' ? {img:x, cap:capOf(x)} : x);
const hcBg = sl => `<div class="hc" aria-hidden="true">${sl.map((x,i)=>`<div class="hc-s${i?'':' on'}${x.fit?' fit':''}"${x.op?` style="--op:${x.op}"`:''}><img src="${IMG(x.img)}" alt="${x.alt?esc(x.alt):''}"${i?' loading="lazy"':' fetchpriority="high"'}></div>`).join('')}</div>`;
const hcUI = (sl, label='Banner') => sl.length < 2 ? '' : `<div class="hc-ui"><div class="hc-cap"><b class="hc-n">01 / ${String(sl.length).padStart(2,'0')}</b><span class="hc-c">${sl.map((x,i)=>`<span class="${i?'':'on'}">${esc(x.cap)}</span>`).join('')}</span></div><div class="hc-ctl"><div class="hc-dots" role="group" aria-label="${label} slides">${sl.map((x,i)=>`<button type="button" class="hc-dot" aria-label="Slide ${i+1}: ${esc(x.cap)}" aria-current="${i===0}"><i></i><span class="hc-l" aria-hidden="true">${esc(x.cap)}</span></button>`).join('')}</div><button type="button" class="hc-btn" data-hc="-1" aria-label="Previous slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg></button><button type="button" class="hc-btn" data-hc="1" aria-label="Next slide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg></button></div></div>`;
const pageHero = (crumbs, pill, title, lead, extra='', slides=DEF_SLIDES) => { const sl = normSlides(slides); return `
 <section class="phero hc-on" data-hcroot>${hcBg(sl)}<div class="hero-glow" aria-hidden="true"></div><div class="wrap"><div class="frame">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a>${crumbs.map(c => `<span class="sep">/</span>${c[1]?`<a href="#${c[1]}">${esc(c[0])}</a>`:`<span aria-current="page" style="color:var(--ink)">${esc(c[0])}</span>`}`).join('')}</nav>
  ${pill?`<span class="specpill">${pill}</span>`:''}
  <h1 class="h1" style="font-size:clamp(38px,5vw,68px);max-width:20ch">${title}</h1>
  ${lead?`<p class="lead">${lead}</p>`:''}${extra}
  ${hcUI(sl)}
 </div></div></section>`; };
const prodCard = p => { const d = PROD[p], f = famBy(d.f); return `<a class="card tilt fade-item" href="#product-${p}" data-fam="${d.f}" data-q="${esc((d.n+' '+d.l+' '+d.t.join(' ')).toLowerCase())}" data-cur="view">${d.gen?`<div class="media"><img src="${IMG(d.photo)}" alt="${esc(d.n)}" loading="lazy"><span class="tagline">Representative image</span></div>`:`<div class="media photo"><img src="${IMG(d.photo)}" alt="${esc(d.n)} product photo" loading="lazy"></div>`}<div class="card-top"><span class="eyebrow" style="font-size:11px">${esc(f.name)}</span>${d.isNew?'<span class="new">NEW</span>':''}</div><h3>${esc(d.n)}</h3><p>${esc(d.l)}</p><div class="tags">${d.t.slice(0,3).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><span class="go">View product ${ARR}</span></a>`; };
const caseCard = c => `<a class="card tilt fade-item" href="#case-${c.slug}" data-ind="${esc(c.ind)}" data-sol="${c.sol}" data-cur="view"><div class="media"><img src="${IMG(c.img)}" alt="" loading="lazy"><span class="tagline">Representative image</span></div><div class="tags"><span class="tag">${esc(c.ind)}</span><span class="tag">${esc(solBy(c.sol).name)}</span></div><h3>${esc(c.n)}</h3><p>${esc(c.sum)}</p><div style="display:flex;align-items:baseline;gap:8px;margin-top:6px"><b style="font-family:var(--f-display);font-stretch:112%;font-size:34px;letter-spacing:-.03em;color:var(--rust)">${esc(c.m[0][0])}${esc(c.m[0][1])}</b><span class="mono muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.06em">${esc(c.m[0][2])}</span></div><span class="go">Read case study ${ARR}</span></a>`;
const ctaBand = (h, p, btn, href) => S(`<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:28px"><div style="max-width:640px;display:flex;flex-direction:column;gap:12px"><h2 class="h2 rv" style="font-size:clamp(28px,3.2vw,44px)">${h}</h2><p class="lead rv">${p}</p></div><a class="btn btn-primary mag" href="#${href}">${btn} ${ARR}</a></div>`, 'alt');

/* POLARIX technical drawing (hero) */
const heroDrawing = () => `
 <figure class="drawing tilt" aria-label="POLARIX technical drawing with sample readout" style="margin:0">
  <div class="drawing-top"><span>POLARIX · Stack-01</span><span>Sample readout</span></div>
  <svg viewBox="0 0 500 330" aria-hidden="true">
   <defs><pattern id="dg" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#e7e1da" stroke-width="1"/></pattern></defs>
   <rect width="500" height="330" fill="url(#dg)"/>
   <!-- isometric enclosure -->
   <g fill="none" stroke="#1d1a17" stroke-width="1.4" stroke-linejoin="round">
    <path class="draw-in" d="M120 150 L250 85 L380 150 L250 215 Z"/>
    <path class="draw-in" d="M120 150 L120 205 L250 270 L250 215"/>
    <path class="draw-in" d="M380 150 L380 205 L250 270"/>
   </g>
   <path d="M120 150 L250 85 L380 150 L250 215 Z" fill="#ffffff" opacity=".7"/>
   <path d="M120 150 L120 205 L250 270 L250 215 Z" fill="#f0a428" opacity=".9"/>
   <path d="M380 150 L380 205 L250 270 L250 215 Z" fill="#efeae4"/>
   <g stroke="#1d1a17" stroke-width="1.4" fill="none"><path d="M120 150 L250 85 L380 150 L250 215 Z M120 150 V205 L250 270 V215 M380 150 V205 L250 270"/></g>
   <!-- display window -->
   <path d="M205 140 L275 105 L330 132 L260 167 Z" fill="#f7f4f0" stroke="#8a827a"/>
   <path d="M222 140 L238 132 L250 136 L264 126 L278 130 L292 120 L308 126" fill="none" stroke="#9c3824" stroke-width="2"/>
   <!-- terminal blocks on the saffron face -->
   <g fill="#ffffff" stroke="#1d1a17" stroke-width="1"><path d="M140 182 l14 7 v12 l-14 -7z"/><path d="M162 193 l14 7 v12 l-14 -7z"/><path d="M184 204 l14 7 v12 l-14 -7z"/><path d="M206 215 l14 7 v12 l-14 -7z"/></g>
   <!-- antenna -->
   <path d="M360 140 V70" stroke="#1d1a17" stroke-width="3"/><circle cx="360" cy="66" r="5" fill="#1d1a17"/>
   <!-- LEDs -->
   <circle cx="300" cy="165" r="4" fill="#1e7a4c"/><circle cx="314" cy="158" r="4" fill="#f0a428"/><circle cx="328" cy="151" r="4" fill="#9c3824"/>
   <!-- data traces -->
   <path class="trace" d="M60 300 H150 V240" fill="none" stroke="#9c3824" stroke-width="2"/>
   <path class="trace" d="M440 300 H360 V230" fill="none" stroke="#f0a428" stroke-width="2"/>
   <!-- callouts -->
   <g font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#665e57">
    <path d="M360 70 H420" stroke="#8a827a" stroke-dasharray="3 3"/><text x="424" y="73">4G / LTE</text>
    <path d="M168 196 L90 236" stroke="#8a827a" stroke-dasharray="3 3"/><text x="24" y="250">MODBUS · RS485</text>
    <path d="M300 120 L400 112" stroke="#8a827a" stroke-dasharray="3 3"/><text x="404" y="115">MQTT · REST</text>
    <text x="40" y="318">IN</text><text x="446" y="318">OUT</text>
   </g>
  </svg>
  <div class="live"><div><span><i class="pulse"></i>Modbus RTU · RS485</span><span class="ok">polling</span></div><div><span>MQTT → cloud</span><span class="ok">publishing</span></div><div><span>HTTPS / REST → SPCB</span><span class="ok">synced</span></div></div>
  <div class="drawing-foot"><span>Drawing no. <b>GT/PLX-01</b></span><span>Scale 1:2</span></div>
 </figure>`;

/* exploded A1–A4 figure */
const anatomyFig = () => {
  const layer = (i, y, fill) => `<g class="layer" data-layer="${i}" style="transform:translateY(0)"><polygon class="top" points="80,${y} 260,${y-70} 440,${y} 260,${y+70}" fill="${fill}" stroke="#8a827a" stroke-width="1.3"/><path d="M80 ${y} V${y+14} L260 ${y+84} L440 ${y+14} V${y} M260 ${y+70} V${y+84}" fill="none" stroke="#8a827a" stroke-width="1.3"/><text x="455" y="${y+6}" font-family="IBM Plex Mono, monospace" font-size="13" fill="#665e57">${LAYERS[i][0]}</text></g>`;
  return `<svg viewBox="0 0 520 470" role="img" aria-label="Four layers of a Gauranga device, exploded"><g stroke="#e7e1da" stroke-dasharray="4 5"><path d="M80 80 V420M440 80 V420M260 10 V480"/></g>${layer(0,90,'#ffffff')}${layer(1,190,'#f7f4f0')}${layer(2,290,'#fef6e7')}${layer(3,390,'#ffffff')}
   <g class="l-details" font-family="IBM Plex Mono, monospace" font-size="10" fill="#8a827a"><text x="200" y="94">ENCLOSURE · IP / THERMAL</text><text x="214" y="194">PCB · COMPONENTS</text><text x="206" y="294">MODBUS · MQTT · OPC</text><text x="204" y="394">DASHBOARD · API</text></g></svg>`;
};

/* ================= PAGES ================= */
const P = {};
const HOME_SLIDES = [
 {img:'gen-control-room', cap:'Industrial automation & IoT', eb:'Embedded · Industrial IoT · Product Engineering', h:'Engineering intelligent <span class="hl">solutions for industry.</span>', p:'We design embedded systems, industrial IoT devices and application software — and partner as an OEM to take your product from concept to production.', c:[['Explore Our Solutions','solutions',1],['View Our Products','products',0]]},
 {img:'gen-stack', cap:'New · POLARIX data logger', eb:'New · Data Logging & Gateways', h:'POLARIX, built for <span class="hl">CPCB/SPCB compliance.</span>', p:'Industrial-grade IoT data logger designed for pollution monitoring and compliance reporting, with Modbus, MQTT, HTTPS and REST.', c:[['View POLARIX','product-polarix',1],['Browse all 16 products','products',0]]},
 {img:'gen-solar', cap:'Case study · Solar 4G IoT Logger', eb:'Proven in the field', h:'500+ installations. <span class="hl">~400 MW monitored.</span>', p:'A cost-effective, customisable 4G IoT logger for rooftop solar plants, built on a Linux SoC.', c:[['View Case Study','case-solar-4g-iot-logger',1],['All case studies','case-studies',0]]},
 {img:'gen-manufacturing', cap:'Manufacturing & V&V', eb:'Manufacturing & V&V', h:'From prototype boards <span class="hl">to production.</span>', p:'Prototyping, OEM and contract manufacturing, with validation against your requirements.', c:[['Explore solution','sol-manufacturing-validation',1],['Let’s Talk','contact',0]]},
 {img:'gen-studio', cap:'New · Madurai design studio', eb:'New · Madurai studio', h:'Design and digital, <span class="hl">from our Madurai studio.</span>', p:'Social media design, UI/UX and full-stack development for industrial and B2B brands, with engineers one call away.', c:[['See the studio','sol-digital-design-development',1],['Talk to our studio','studio-enquiry',0]]}
];
const CAPS_HOME = [['chip','Embedded hardware','Schematics, PCB layout and component selection for industrial devices.'],['gear','Firmware','Microcontroller, RTOS and Linux SoC firmware with industrial protocols.'],['pen','Application software','Plant operations, alarm management, Android and web applications.'],['net','Industrial connectivity','Modbus, RS485, OPC, BACnet, MQTT, 4G and more across our work.'],['factory','Manufacturing','Prototyping, OEM and contract manufacturing for your products.'],['check','Validation','Lab, field and standards-based testing built into every project.']];
P.home = () => `
 <section class="phero hc-on home" data-hcroot>${hcBg(HOME_SLIDES)}<div class="hero-glow" aria-hidden="true"></div>
  <div class="wrap"><div class="frame x"><div class="hc-texts">${HOME_SLIDES.map((x,i)=>`<div class="hc-t${i?'':' on'}" aria-hidden="${i?'true':'false'}"><span class="eyebrow">${x.eb}</span>${i?`<h2 class="h1">${x.h}</h2>`:`<h1 class="h1">${x.h}</h1>`}<p class="lead">${x.p}</p><div class="ctas">${x.c.map(b=>`<a class="btn ${b[2]?'btn-primary':'btn-outline'} mag" href="#${b[1]}"${i?' tabindex="-1"':''}>${b[0]}${b[2]?' '+ARR:''}</a>`).join('')}</div></div>`).join('')}</div>
  ${hcUI(HOME_SLIDES,'Home banner')}</div></div></section>
 <section class="hstats"><div class="wrap"><div class="frame">
   <div class="stat"><b><span class="count" data-to="10">10</span>+</b><span>Years in the industry</span></div>
   <div class="stat"><b><span class="count" data-to="500">500</span>+</b><span>Man-years of team experience</span></div>
   <div class="stat"><b>ISO 9001:2015</b><span>Certified quality management</span></div>
 </div></div></section>
 <section style="background:var(--band);border-bottom:1px solid var(--line)"><div class="wrap"><div class="frame" style="padding-block:22px"><div class="trust"><span>Trusted by organisations including</span>
  <div class="marq" aria-label="Clients"><div class="marq-track">${[...CLIENTS,...CLIENTS].map((c,i)=>`<span ${i>=CLIENTS.length?'aria-hidden="true"':''}>${esc(c)}</span>`).join('')}</div></div>
  <span class="isob">${ICONS.check} ISO 9001:2015</span></div></div></div></section>

 ${S(`<div class="sec-head"><div><span class="eyebrow rv">What we do</span><h2 class="h2 rv">Three ways we <span class="hl">help industry</span></h2><p class="lead rv">From the first schematic to field-proven devices and plant software.</p></div><a class="btn btn-outline mag" href="#solutions">All solutions ${ARR}</a></div>
  <div class="grid g3 sol3">${SOL.filter(x=>!x.studio).map((x,i)=>`<a class="card tilt rv" href="#sol-${x.slug}" data-cur="view"><div class="media"><img src="${IMG(x.img)}" alt="" loading="lazy" data-par></div><span class="num">0${i+1}</span><h3 style="font-size:clamp(22px,2.2vw,28px)">${esc(x.name)}</h3><p>${esc(x.short)}</p><span class="go">Explore solution ${ARR}</span></a>`).join('')}</div>`)}

 ${S(`<div class="studio rv">${media(IMG('gen-studio'),'Designers working on interface and social media layouts','', '')}<div><span class="eyebrow">New · Madurai studio</span><h2 class="h2" style="font-size:clamp(28px,3.4vw,46px)">Design and digital, <span class="hl">from our Madurai studio.</span></h2><p class="lead">Social media design, UI/UX and full-stack development for industrial and B2B brands, with engineers one call away.</p><div class="tags"><span class="tag">Social media</span><span class="tag">UI/UX</span><span class="tag">Full-stack</span></div></div><a class="btn btn-primary mag" href="#sol-digital-design-development">See the studio ${ARR}</a></div>`)}

 ${S(`<div class="sec-head"><div><span class="eyebrow rv">Products</span><h2 class="h2 rv">Featured <span class="hl">products</span></h2><p class="lead rv">Data loggers, gateways, alert modules and plant software designed and built by Gauranga.</p></div><a class="btn btn-outline mag" href="#products">Browse all 16 products ${ARR}</a></div>
  <div class="grid g4">${['polarix','intig','sys-alert','modbus-data-logger'].map(prodCard).join('')}</div>`, 'alt')}

 ${S(`<div style="display:flex;flex-wrap:wrap;gap:48px">
  <div style="flex:1 1 360px;min-width:0;display:flex;flex-direction:column;gap:18px"><span class="eyebrow rv">Engineering capabilities</span><h2 class="h2 rv">One team across hardware, firmware <span class="hl">and software.</span></h2><p class="lead rv">Our team brings over 500 man-years of experience, delivering cost-effective, high-quality software, hardware and complete turnkey product development.</p><a class="btn btn-outline mag" href="#about" style="align-self:flex-start">About Gauranga ${ARR}</a><div class="media rv" style="aspect-ratio:16/10"><img src="${IMG('site-pcb-gold')}" alt="Close-up of a printed circuit board" loading="lazy" data-par></div></div>
  <div class="caps" style="flex:999 1 520px;min-width:0;align-self:flex-start">${CAPS_HOME.map(c=>`<div class="rv"><span class="icn">${ICONS[c[0]]}</span><b>${c[1]}</b><p>${c[2]}</p></div>`).join('')}</div></div>`)}

 ${S(`<div class="sec-head"><div><span class="eyebrow rv">Case studies</span><h2 class="h2 rv">Proven <span class="hl">in the field</span></h2><p class="lead rv">Selected projects across power, railways, solar and building automation.</p></div><a class="btn btn-outline mag" href="#case-studies">All case studies ${ARR}</a></div>
  <div class="grid g3">${['solar-4g-iot-logger','25kva-inverter','alarm-multiplexor'].map(c=>caseCard(caseBy(c))).join('')}</div>`, 'alt')}

 ${S(`<div style="display:flex;flex-wrap:wrap;gap:48px;align-items:flex-start">
  <div style="flex:1 1 380px;min-width:0;display:flex;flex-direction:column;gap:18px"><span class="eyebrow rv">Why Gauranga Technologies</span><h2 class="h2 rv">Driven by technology <span class="hl">and ethics.</span></h2><p class="lead rv">Meeting our customers’ and partners’ expectations is our key priority. We have been in the industry for over 10 years, and we are committed to delivering the best value to all our stakeholders.</p>
   <blockquote class="rv" style="margin:6px 0 0;border-left:3px solid var(--sun);padding:6px 0 6px 18px;font-family:var(--f-display);font-stretch:108%;font-size:20px;font-weight:600;line-height:1.4;color:var(--ink)">“Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.”<span style="display:block;margin-top:8px;font-family:var(--f-body);font-size:13.5px;font-weight:500;color:var(--muted)">Ramanan Nagarajan, CEO &amp; Co-founder</span></blockquote></div>
  <div class="tcards" style="flex:1 1 440px;min-width:0">${QUOTES.map(q=>`<figure class="tcard rv" style="margin:0"><svg width="26" height="20" viewBox="0 0 44 34" fill="#f0a428" aria-hidden="true"><path d="M0 34V20C0 9 6 2 17 0l2 5c-6 2-9 6-9 11h8v18H0zm25 0V20c0-11 6-18 17-20l2 5c-6 2-9 6-9 11h8v18H25z"/></svg><q>${esc(q.q)}</q><figcaption class="who"><b>${esc(q.w)}</b>, ${esc(q.r)}</figcaption><a class="link" href="#resources" style="font-size:14px;font-weight:600">View reference letter →</a></figure>`).join('')}</div></div>`, 'alt')}

 ${S(`<div class="sec-head"><div><span class="eyebrow rv">Global presence</span><h2 class="h2 rv">India</h2></div><a class="btn btn-outline mag" href="#contact">Office details ${ARR}</a></div>
  <div class="grid g4">${OFFICES.map(o=>`<div class="card tilt rv"><span class="eyebrow" style="font-size:11px">${esc(o[0])}</span><h3 style="font-size:20px">${esc(o[1])}</h3><p style="font-size:14px">${esc(o[2])}</p></div>`).join('')}</div>`)}`;

P.solutions = () => pageHero([['Solutions']], 'Solutions', 'Engineering solutions <span class="hl">for industry</span>', 'From the first schematic to field-proven devices and plant software.', '', ['site-pcb-gold','gen-control-room','gen-manufacturing','gen-studio']) +
 S(`<div class="grid g2 sol3">${SOL.map((x,i)=>`<a class="card tilt rv" href="#sol-${x.slug}" data-cur="view" style="${x.studio?'background:var(--sun-50);border-color:var(--sun-100)':''}"><div class="media" style="aspect-ratio:16/8"><img src="${IMG(x.img)}" alt="" loading="lazy" data-par></div><div class="card-top"><span class="num">0${i+1}</span><span class="icn">${ICONS[x.icon]}</span></div><h3 style="font-size:28px">${esc(x.name)} ${x.studio?'<span class="new" style="vertical-align:middle">NEW</span>':''}</h3><p>${esc(x.short)}</p><div class="tags">${x.services.slice(0,4).map(v=>`<span class="tag">${esc(v[0])}</span>`).join('')}</div><span class="go">Explore solution ${ARR}</span></a>`).join('')}</div>`, 'alt') + ctaBand('Have an engineering challenge?','Tell us about your product, plant or project. Our engineering team will get back to you.','Let’s Talk','contact');

P.sol = slug => { const s = solBy(slug); if(!s) return null; const studio = s.studio;
 return pageHero([['Solutions','solutions'],[s.name]], 'Solution', esc(s.name), esc(s.hero), `<div class="ctas"><a class="btn btn-primary mag" href="${studio?'#studio-enquiry':'#contact'}">${studio?'Talk to our studio':'Talk to an engineer'} ${ARR}</a>${studio?'<a class="btn btn-outline mag" href="#careers">Join the studio</a>':''}</div>`, s.slides) +
 S(`<div class="split"><div class="t"><span class="eyebrow rv">Overview</span><h2 class="h2 rv" style="font-size:clamp(28px,3.2vw,44px)">${esc(s.short)}</h2>${s.body.map(p=>`<p class="lead rv">${esc(p)}</p>`).join('')}${s.vv?`<div class="rv"><span class="eyebrow">Verification &amp; validation · documented in our case studies</span><ul class="list" style="margin-top:14px">${s.vv.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></div>`:''}</div>${media(IMG(s.img), s.name, '', 'Representative image')}</div>`) +
 S(`<div class="sec-head"><div><span class="eyebrow rv">Services</span><h2 class="h2 rv">${studio?'Three services, <span class="hl">one studio.</span>':'What this practice <span class="hl">delivers.</span>'}</h2></div></div>
  <div class="grid g3">${s.services.map((v,i)=>`<article class="card tilt rv"><span class="corner">S-0${i+1}</span><h3 style="margin-top:22px;max-width:85%">${esc(v[0])}</h3><p>${esc(v[1])}</p><div class="tags" style="margin-top:auto">${v[2].map(t=>`<span class="tag">${esc(t)}</span>`).join('')}${v[3]?'<span class="new">NEW</span>':''}</div></article>`).join('')}</div>
  ${s.services.some(v=>v[3]) && !studio?'<p class="muted" style="margin-top:20px;font-size:13.5px">Services marked NEW are proposed additions awaiting confirmation from Gauranga.</p>':''}`, 'alt') +
 (studio ?
  S(`<div class="sec-head"><div><span class="eyebrow rv">Process</span><h2 class="h2 rv">Discover, design, <span class="hl">build, launch.</span></h2></div></div>
   <div class="proc">${[['Discover','Audience, goals and the product behind the brand.'],['Design','Wireframes, visual design and a reusable design system.'],['Build','Front end, back end and integrations, tested on real devices.'],['Launch','Deployment, content calendar and measured iteration.']].map((x,i)=>`<div class="card rv"><span class="corner">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`) +
  S(`<div class="sec-head"><div><span class="eyebrow rv">Portfolio</span><h2 class="h2 rv">Selected work</h2><p class="lead rv">Concept visuals shown until the studio shares approved client projects.</p></div></div>
   <div class="grid g3">${[['studio-social','Social media campaign'],['studio-web','B2B website redesign'],['studio-dashboard','IoT dashboard UI'],['studio-mobile','Mobile app UX'],['studio-brand','Brand launch kit'],['studio-admin','Admin panel build']].map(x=>`<div class="card tilt rv" data-cur="view"><div class="media" style="aspect-ratio:16/10"><img src="${IMG(x[0])}" alt="${x[1]} concept" loading="lazy" data-par><span class="tagline">Concept · replace with client work</span></div><h3 style="font-size:19px">${x[1]}</h3></div>`).join('')}</div>`, 'alt') +
  S(`<div class="sec-head"><div><span class="eyebrow rv">Why an engineering-backed studio</span><h2 class="h2 rv">Designers who can <span class="hl">ask the firmware team.</span></h2></div></div>
   <div class="grid g3">${[['Real product knowledge','Interfaces and content come from people who understand the hardware and data behind them.'],['Design to deployment','One team handles UI, front end, back end and hosting, so nothing is lost in hand-off.'],['B2B and industrial focus','Content and UX written for engineers, plant managers and procurement teams.']].map(x=>`<div class="card rv"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`)
 :
  S(`<div class="sec-head"><div><span class="eyebrow rv">Related products</span><h2 class="h2 rv">Products from <span class="hl">this practice</span></h2></div><a class="btn btn-outline mag" href="#products">All products ${ARR}</a></div>
   <div class="grid g3">${s.products.slice(0,6).map(prodCard).join('')}</div>`) +
  S(`<div class="sec-head"><div><span class="eyebrow rv">Case studies</span><h2 class="h2 rv">Where we have <span class="hl">done this before</span></h2></div></div>
   <div class="grid g3">${s.cases.map(c=>caseCard(caseBy(c))).join('')}</div>`, 'alt')) +
 S(`<div style="display:flex;flex-wrap:wrap;gap:20px 48px;align-items:center"><h2 class="h3" style="flex:0 0 220px">Tools and technologies</h2><div class="tags" style="flex:1 1 500px">${s.tech.map(t=>`<span class="tag" style="font-size:13px;padding:7px 11px">${esc(t)}</span>`).join('')}</div></div>`) +
 ctaBand(studio?'Have a brand, product or platform to build?':'Have a project in this area?', studio?'Tell the studio what you need. We reply within [response time to confirm].':'Tell us about it. An engineer replies within [response time to confirm].', studio?'Talk to our studio':'Talk to an engineer', studio?'studio-enquiry':'contact');
};

P.products = () => pageHero([['Products']], 'Products <i></i> 16 products', 'Product <span class="hl">catalogue</span>', 'Data loggers, gateways, alert modules and plant software designed and built by Gauranga.', '', [{img:'gen-stack',cap:'POLARIX · Data Logging & Gateways'},{img:'prod-power-meter-gateway',cap:'Power Meter Gateway · Data Logging & Gateways'},{img:'prod-cold-storage-watchdog',cap:'Cold Storage Watchdog · Monitoring & Protection'},{img:'prod-lvs-annunciation',cap:'LVS Annunciation · Industrial Software'}]) +
 S(`<div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:center;margin-bottom:24px">
   <label class="search" for="psearch"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="8" cy="8" r="5.5"/><path d="M12.5 12.5L16 16"/></svg><input id="psearch" type="search" placeholder="e.g. Modbus, logger" aria-label="Search products"></label>
   <div class="chips" role="group" aria-label="Filter by family"><button class="chip" aria-pressed="true" data-f="all">All</button>${FAM.map(f=>`<button class="chip" aria-pressed="false" data-f="${f.slug}">${esc(f.name)}</button>`).join('')}</div>
  </div>
  <p class="muted mono" id="pcount" style="font-size:12.5px;margin-bottom:16px" aria-live="polite">Showing 16 of 16</p>
  <div class="grid g4" id="pgrid">${Object.keys(PROD).map(prodCard).join('')}</div>
  <div class="empty" id="pempty" hidden>No products match. Try another word or <a class="link" href="#contact">ask an engineer</a>.</div>`, 'alt') + ctaBand('Need a product configured for your site?','Tell us the devices and protocols on site and we will recommend a setup.','Request a quote','quote');

P.fam = slug => { const f = famBy(slug); if(!f) return null; const s = solBy(f.sol);
 return pageHero([['Products','products'],[f.name]], `Family <i></i> ${f.items.length} products`, esc(f.name), esc(f.desc), '', ({'industrial-alert-systems':[['gen-control-room','Control-room alarm escalation'],['prod-lvs-annunciation','Alarm annunciation'],['gen-solar','Unmanned remote sites']],'data-logging-gateways':[['gen-stack','POLARIX · stack monitoring'],['prod-power-meter-gateway','Power Meter Gateway'],['gen-solar','Solar plant logging']],'monitoring-protection':[['prod-cold-storage-watchdog','Cold Storage Watchdog'],['prod-server-watchdog','Server Watchdog']],'industrial-software':[['prod-plant-analyzer','Plant Analyzer'],['prod-lvs-annunciation','LVS Annunciation System'],['prod-e-log-book','E-Log Book'],['prod-dms','DMS']]}[f.slug]||[['gen-control-room','Gauranga products']]).map(x=>({img:x[0],cap:x[1]}))) +
 S(`<div class="grid g3">${f.items.map(prodCard).join('')}</div>
  <div style="margin-top:40px;display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:24px"><span class="muted">Part of <a class="link" href="#sol-${s.slug}">${esc(s.name)}</a></span><a class="link" href="#products">Back to all 16 products →</a></div>`, 'alt') + ctaBand(`Pricing for ${esc(f.name.toLowerCase())}`,'Tell us quantities and site conditions; we send a written quotation.','Request a quote','quote');
};

P.product = slug => { const d = PROD[slug]; if(!d) return null; const f = famBy(d.f); const s = solBy(f.sol);
 const rel = f.items.filter(x=>x!==slug).slice(0,3); while(rel.length<3){ const extra = Object.keys(PROD).find(k=>k!==slug && !rel.includes(k) && PROD[k].f!==d.f); rel.push(extra); }
 const usedIn = CASES.filter(c=>c.prods.includes(slug));
 const no = 'GT/' + d.n.replace(/[^A-Z0-9]/gi,'').slice(0,3).toUpperCase() + '-01';
 return `<section class="phero" style="border-bottom:0"><div class="wrap"><div class="frame" style="padding-bottom:0"><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span class="sep">/</span><a href="#products">Products</a><span class="sep">/</span><a href="#fam-${f.slug}">${esc(f.name)}</a><span class="sep">/</span><span aria-current="page" style="color:var(--ink)">${esc(d.n)}</span></nav></div></div></section>
 ${S(`<div class="pd">
  <div class="gal" data-hcroot>${(()=>{ const gs = [{img:d.photo, cap:d.gen?'Representative image':'Product photo', fit:!d.gen, alt:d.n+(d.gen?' representative image':' product photo')}, {img:d.scene||s.img, cap:'In application · representative'}, ...rel.slice(0,2).map(p=>({img:PROD[p].photo, cap:'Related · '+PROD[p].n, fit:!PROD[p].gen}))]; return `<div class="hcbox" data-cur="view">${hcBg(gs)}</div>${hcUI(gs, d.n+' gallery')}`; })()}</div>
  <div class="sum"><a class="specpill" href="#fam-${f.slug}">${esc(f.name)}${d.isNew?' <i></i> New':''}</a>
   <h1 class="h1" style="font-size:clamp(42px,5vw,72px)">${esc(d.n)}</h1>
   <p style="font-size:19px;line-height:1.55;color:var(--ink-7)">${esc(d.l)}</p>
   <ul class="checks">${d.b.map(b=>`<li>${ICONS.check}<span>${esc(b)}</span></li>`).join('')}</ul>
   <div class="tags">${d.t.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
   <div class="ctas" style="margin-top:6px"><a class="btn btn-primary mag" href="#quote-${slug}">Request a quote ${ARR}</a><button class="btn btn-outline mag" data-goto="downloads">${ICONS.down} ${d.brochure?'Brochure (PDF)':'Datasheet'}</button></div>
   <p class="muted" style="font-size:14px">Integration question? <a class="link" href="#contact">Talk to an engineer</a></p>
  </div></div>`)}
 <nav class="tabbar" aria-label="On this page"><div class="wrap"><div class="frame">${['Overview','Specifications','Applications','Downloads','Related'].map((t,i)=>`<button data-goto="${t.toLowerCase()}" aria-current="${i===0}">${t}</button>`).join('')}</div></div></nav>
 ${S(`<div style="display:flex;flex-wrap:wrap;gap:48px">
  <div style="flex:1 1 320px;min-width:0;display:flex;flex-direction:column;gap:16px"><span class="eyebrow">Overview</span><h2 class="h2" style="font-size:clamp(26px,2.8vw,38px)">${esc(d.b[0])}.</h2><p class="lead">${esc(d.long||d.l)}</p>${d.feats?`<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px">${d.feats.map(g=>`<div><span class="eyebrow">${g[0]}</span><ul class="list" style="margin-top:10px">${g[1].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div>`:''}<p class="muted" style="font-size:14px;border:1px solid var(--line);border-radius:12px;padding:14px 16px;background:#fff">Values marked <span class="tbc">TBC</span> are waiting for confirmation from Gauranga engineering before publication.</p></div>
  <div id="sec-specifications" style="flex:999 1 520px;min-width:0;display:flex;flex-direction:column;gap:16px"><span class="eyebrow">The spec sheet</span>
   <div class="tblbox"><table class="spec"><caption>${esc(d.n)} — key specifications</caption><tbody>${d.s.map(r=>`<tr><th scope="row">${esc(r[0])}</th><td>${r[1]===T?'<span class="tbc">TBC</span>':esc(r[1])}</td></tr>`).join('')}</tbody></table></div></div>
 </div>`, 'alt', 'id="sec-overview"')}
 ${S(`<span class="eyebrow">Applications</span><h2 class="h2 rv" style="font-size:clamp(26px,2.8vw,38px);margin:16px 0 32px">Where ${esc(d.n)} <span class="hl">is used</span></h2>
  ${d.scene?`<div class="band-img rv media" style="aspect-ratio:auto;min-height:clamp(260px,34vw,420px);margin-bottom:16px"><img src="${IMG(d.scene)}" alt="" data-par="0.1"><div class="over"><span class="facts"><span>Representative scene</span></span></div></div>`:''}
  <div class="grid g4">${d.a.map((a,i)=>`<div class="card rv"><span class="corner">0${i+1}</span><h3 style="font-size:19px;margin-top:24px">${esc(a)}</h3></div>`).join('')}</div>`, '', 'id="sec-applications"')}
 ${S(`<div style="display:flex;flex-wrap:wrap;gap:40px">
  <div style="flex:1 1 280px"><span class="eyebrow">Downloads</span><h2 class="h2" style="font-size:clamp(26px,2.8vw,38px);margin-top:16px">Documents for <span class="hl">your evaluation</span></h2></div>
  <div style="flex:999 1 520px;display:flex;flex-direction:column;gap:12px">
   ${d.brochure?`<button class="dl" data-toast="The brochure PDF will be attached here once the live file is supplied."><span><b style="display:block;font-size:16px">${esc(d.n)} brochure</b><span class="mono muted" style="font-size:12px">PDF · on current website</span></span><span class="hl" style="font-weight:600;font-size:14px">Download ↓</span></button>`:''}
   <div class="dl pending"><span><b style="display:block;font-size:16px;color:var(--ink)">Technical datasheet</b><span class="mono" style="font-size:12px">PDF · awaiting from engineering</span></span><span style="font-size:14px">Coming soon</span></div>
   <a class="dl" href="#resources"><span><b style="display:block;font-size:16px">ISO 9001:2015 certificate</b><span class="mono muted" style="font-size:12px">Company-wide · in Resources</span></span><span class="hl" style="font-weight:600;font-size:14px">Open →</span></a>
  </div></div>`, 'alt', 'id="sec-downloads"')}
 ${S(`<div class="sec-head" style="margin-bottom:28px"><div><span class="eyebrow">Related</span><h2 class="h2" style="font-size:clamp(26px,2.8vw,38px)">Related products</h2></div><a class="link" href="#fam-${f.slug}">All in ${esc(f.name)} →</a></div>
  <div class="grid g3">${rel.map(prodCard).join('')}</div>
  <p style="margin-top:28px" class="muted">Part of <a class="link" href="#sol-${s.slug}">${esc(s.name)}</a>${usedIn.length?` · Used in <a class="link" href="#case-${usedIn[0].slug}">${esc(usedIn[0].n)}</a> <span class="tbc">confirm</span>`:''}</p>`, '', 'id="sec-related"')}
 <section class="ink-band"><div class="wrap"><div class="frame x" style="padding-block:56px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:24px"><h2 class="h2" style="font-size:clamp(26px,3.2vw,44px);max-width:20ch">Get ${esc(d.n)} pricing <span class="hl">for your site.</span></h2><a class="btn btn-sun mag" href="#quote-${slug}">Request a quote ${ARR}</a></div></div></section>`;
};

P['case-studies'] = () => pageHero([['Case Studies']], 'Case studies <i></i> 6 projects', 'Proven <span class="hl">in the field</span>', 'Selected projects across power, railways, solar and building automation.', '', CASES.slice(0,5).map(c=>({img:c.img, cap:c.n}))) +
 S(`<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:28px">
   <div class="chips" role="group" aria-label="Filter by industry"><button class="chip" aria-pressed="true" data-ci="all">All industries</button>${[...new Set(CASES.map(c=>c.ind))].map(i=>`<button class="chip" aria-pressed="false" data-ci="${esc(i)}">${esc(i)}</button>`).join('')}</div>
   <div class="chips" role="group" aria-label="Filter by solution"><button class="chip" aria-pressed="true" data-cs="all">All solutions</button>${SOL.filter(s=>!s.studio).map(s=>`<button class="chip" aria-pressed="false" data-cs="${s.slug}">${esc(s.name)}</button>`).join('')}</div>
  </div>
  <div class="grid g3" id="cgrid">${CASES.map(caseCard).join('')}</div>
  <div class="empty" id="cempty" hidden>No case study matches both filters. <button class="link" style="border:0;background:none;cursor:pointer;font:inherit" id="creset">Clear filters</button></div>`, 'alt') + ctaBand('Have an engineering challenge?','Tell us about your product, plant or project. Our engineering team will get back to you.','Let’s Talk','contact');

P.case = slug => { const c = caseBy(slug); if(!c) return null; const s = solBy(c.sol);
 const ul = a => `<ul class="list">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
 return pageHero([['Case Studies','case-studies'],[c.n]], `${esc(c.ind)} <i></i> ${esc(s.name)}`, esc(c.n), esc(c.sum), `<div class="metrics" style="max-width:640px;margin-top:8px">${c.m.map(m=>`<div><b>${/^\d+$/.test(m[0])?`<span class="count" data-to="${m[0]}">${m[0]}</span>`:esc(m[0])}${m[1]?(m[1]==='+'?'+':' '+esc(m[1])):''}</b><span>${esc(m[2])}</span></div>`).join('')}</div>`, [{img:c.img, cap:c.n+' · representative'}, {img:solBy(c.sol).img, cap:solBy(c.sol).name}, {img:'gen-team', cap:'Delivered by the Navi Mumbai team'}]) +
 S(`<div class="band-img rv media" style="aspect-ratio:auto"><img src="${IMG(c.img)}" alt="" data-par="0.12"><div class="over"><span class="facts"><span>Representative image</span></span></div></div>`) +
 S(`<div class="cs-body">
  <aside><div class="kv"><span>Industry</span><b>${esc(c.ind)}</b></div><div class="kv"><span>Solution</span><a class="link" href="#sol-${s.slug}">${esc(s.name)}</a></div><div class="kv"><span>Client</span><b>Named only with approval <span class="tbc">confirm</span></b></div><div class="kv"><span>Technologies used</span><div class="tags rv" style="margin-top:6px">${c.tech.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div></aside>
  <article>
   <div class="rv"><span class="eyebrow">Project overview</span><h3 style="margin-top:10px">The context</h3><p>${esc(c.ov)}</p></div>
   <div class="rv"><span class="eyebrow">Customer challenge</span><h3 style="margin-top:10px">What needed solving</h3>${ul(c.ch)}</div>
   <div class="rv"><span class="eyebrow">Engineering approach</span><h3 style="margin-top:10px">How we did it</h3>${ul(c.ap)}</div>
   <div class="rv"><span class="eyebrow">Solution delivered</span><h3 style="margin-top:10px">What we built</h3><p>${esc(c.so)}</p></div>
   <div class="rv"><span class="eyebrow">Outcomes</span><h3 style="margin-top:10px">What changed</h3>${ul(c.out)}</div>
  </article></div>`, 'alt') +
 (c.prods.length? S(`<div class="sec-head" style="margin-bottom:28px"><div><span class="eyebrow">Related products</span><h2 class="h2" style="font-size:clamp(26px,2.8vw,38px)">Products in this space <span class="tbc">confirm mapping</span></h2></div></div><div class="grid g3">${c.prods.map(prodCard).join('')}</div>`, 'alt'):'') +
 S(`<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px">${(()=>{const i=CASES.indexOf(c);const pv=CASES[(i+CASES.length-1)%CASES.length],nx=CASES[(i+1)%CASES.length];return `<a class="link" href="#case-${pv.slug}">← ${esc(pv.n)}</a><a class="link" href="#case-${nx.slug}">${esc(nx.n)} →</a>`;})()}</div>`) +
 ctaBand('Have a similar project?','An engineer will walk you through how we would approach it.','Talk to an engineer','contact');
};

P.about = () => pageHero([['About Us']], 'About us', 'Driven by technology <span class="hl">and ethics</span>', 'We are a uniquely innovative company offering cost-effective, high-quality solutions for software, hardware and complete turnkey product development projects.', '', ['gen-team','gen-lab','gen-manufacturing','gen-studio']) +
 S(`<div style="display:flex;flex-wrap:wrap;gap:48px;align-items:flex-start">
  <div style="flex:1 1 380px;min-width:0;display:flex;flex-direction:column;gap:16px"><span class="eyebrow rv">About Gauranga</span><h2 class="h2 rv">Our <span class="hl">expertise</span></h2><p class="lead rv">We have very strong expertise in the design and development of embedded systems, application software, and end-to-end aesthetic product solutions. We are capable of developing solutions and partnering as OEM for any customer-specific requirements or projects.</p><p class="lead rv">With over 500+ man-years of experience, we've got a well-seasoned team at the helm.</p>
   <blockquote class="rv" style="margin:8px 0 0;border-left:3px solid var(--sun);padding:6px 0 6px 18px;font-family:var(--f-display);font-stretch:108%;font-size:19px;font-weight:600;line-height:1.4;color:var(--ink)">“Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.”<span style="display:block;margin-top:8px;font-family:var(--f-body);font-size:13.5px;font-weight:500;color:var(--muted)">Ramanan Nagarajan, CEO &amp; Co-founder</span></blockquote></div>
  <div style="flex:1 1 440px;min-width:0;display:flex;flex-direction:column;gap:16px"><div class="grid g2">${[['about-ramanan','Ramanan Nagarajan','CEO, Co-founder'],['about-navaneeth','Navaneethakrishnan Padmanaban','CTO, Co-founder']].map(p=>`<div class="card founder tilt rv" data-cur="view"><div class="media"><img src="${IMG(p[0])}" alt="${p[1]}" loading="lazy"></div><h3 style="font-size:19px">${p[1]}</h3><p style="font-size:14px">${p[2]}</p></div>`).join('')}</div><p class="muted rv" style="font-size:14px">Directors: Prasanna Venkatesan · Valliappan Solaiyappan (Ram)</p></div>
 </div>`, 'alt') +
 S(`<div style="display:flex;flex-wrap:wrap;gap:48px;align-items:center">
  <div style="flex:1 1 420px;min-width:0;display:flex;flex-direction:column;gap:16px"><span class="eyebrow rv">Quality &amp; certifications</span><h2 class="h2 rv" style="font-size:clamp(28px,3.2vw,44px)">ISO 9001:2015 <span class="hl">certified.</span></h2><p class="lead rv">Gauranga Tech is an ISO 9001:2015 certified organization, demonstrating our commitment to quality management, operational excellence, and customer satisfaction.</p><a class="btn btn-primary mag" href="#resources" style="align-self:flex-start">Open Resources ${ARR}</a></div>
  <div style="flex:1 1 300px;min-width:0;display:flex;justify-content:center"><div class="cert rv media" data-cur="view"><img src="${IMG('about-iso-cert')}" alt="ISO 9001:2015 certificate of registration" loading="lazy" style="transform:none"></div></div>
 </div>`) +
 S(`<div class="sec-head"><div><span class="eyebrow rv">Location</span><h2 class="h2 rv">Visit Our Office</h2></div></div>
  <div class="map rv" id="mapbox" style="aspect-ratio:21/9;min-height:360px">
   <iframe 
     title="Gauranga Technologies Location" 
     src="https://maps.google.com/maps?q=Everest%20Nivara%20Infotech%20Park,%20TTC%20Industrial%20Area,%20Turbhe,%20Navi%20Mumbai%20400705&t=&z=15&ie=UTF8&iwloc=&output=embed" 
     width="100%" 
     height="100%" 
     style="border:0;display:block;width:100%;height:100%" 
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade">
   </iframe>
  </div>
  <div class="grid g4" style="margin-top:20px">${OFFICES.map((o,i)=>`<div class="card tilt rv"><span class="eyebrow" style="font-size:11px">${esc(o[0])}</span><h3 style="font-size:20px">${esc(o[1])}</h3><p style="font-size:14px">${esc(o[2])}</p><p class="addr">${esc(o[3])}</p>${o[4]?`<span class="phone">${esc(o[4])}</span>`:''}</div>`).join('')}</div>`, 'alt') + ctaBand('Have an engineering challenge?','Tell us about your product, plant or project. Our engineering team will get back to you.','Let’s Talk','contact');

P.resources = () => pageHero([['About','about'],['Resources']], 'Resources <i></i> Documents', 'Datasheets, certificates <span class="hl">and references.</span>', 'Documents for procurement and technical evaluation. Files will be attached as Gauranga supplies the latest versions.', '', ['about-iso-cert','photo-polarix','gen-lab']) +
 S(`<div class="chips" role="group" aria-label="Filter by type" style="margin-bottom:28px">${['All','Brochures & datasheets','Certificates','Reference letters'].map((x,i)=>`<button class="chip" aria-pressed="${i===0}" data-rf="${x}">${x}</button>`).join('')}</div>
  <div class="grid g3" id="rgrid">
   ${[['Brochures & datasheets','POLARIX brochure','PDF · available on current site',1],...Object.keys(PROD).filter(k=>k!=='polarix').slice(0,5).map(k=>['Brochures & datasheets',PROD[k].n+' datasheet','PDF · awaiting from engineering',0]),['Certificates','ISO 9001:2015 certificate','PDF · company-wide',1],['Reference letters','Tata Power reference letter','Signed letter',1],['Reference letters','Amplus reference letter','Signed letter',1],['Reference letters','Strojkov Engineering reference letter','Signed letter',1]].map(r=>`<div class="card fade-item rv" data-rt="${r[0]}"><span class="eyebrow" style="font-size:11px">${r[0]}</span><h3 style="font-size:19px">${esc(r[1])}</h3><p style="font-size:14px">${r[2]}</p>${r[3]?`<button class="go" style="border:0;background:none;cursor:pointer;padding:0;font:inherit;font-weight:600;color:var(--rust)" data-toast="The file will be attached once Gauranga supplies the approved version.">Download ↓</button>`:'<span class="tbc" style="align-self:flex-start;margin-top:auto">Coming soon</span>'}</div>`).join('')}
  </div>`, 'alt') + ctaBand('Need a document that is not listed?','Ask for drawings, test reports or compliance documents.','Request a document','contact');

P.careers = () => pageHero([['Careers']], `Careers <i></i> ${ROLES.length} open roles`, 'Build industrial technology <span class="hl">with us</span>', 'We have a team of talented, enthusiastic and highly motivated professionals. Explore our current openings.', '', ['gen-team','gen-lab','gen-manufacturing','gen-studio']) +
 S(`<div class="band-img rv media" style="aspect-ratio:auto"><img src="${IMG('gen-team')}" alt="Engineers discussing a prototype board around a laptop" data-par="0.12"><div class="over"><h2 class="h2" style="font-size:clamp(26px,3.2vw,42px)">Your work ships to plants, rail coaches and solar sites.</h2><span class="facts"><span>Representative image</span></span></div></div>`) +
 S(`<div class="grid g3" style="margin-bottom:56px">${[['Real products','Your work ships to plants, rail coaches and solar sites, not slide decks.'],['End-to-end exposure','Hardware, firmware, software and manufacturing sit under one roof.'],['Growth','Benefits and learning programme details to be confirmed by Gauranga.']].map((x,i)=>`<div class="card rv"><span class="corner">0${i+1}</span><h3 style="margin-top:22px">${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>
  <div class="sec-head" style="margin-bottom:22px"><div><span class="eyebrow">Open roles</span><h2 class="h2" style="font-size:clamp(26px,2.8vw,38px)" id="rolecount">${ROLES.length} open roles</h2></div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px">
   <div class="chips" role="group" aria-label="Filter by team"><button class="chip" aria-pressed="true" data-jt="all">All teams</button>${[...new Set(ROLES.map(r=>r.team))].map(t=>`<button class="chip" aria-pressed="false" data-jt="${t}">${t}</button>`).join('')}</div>
   <div class="chips" role="group" aria-label="Filter by location"><button class="chip" aria-pressed="true" data-jl="all">All locations</button>${[...new Set(ROLES.map(r=>r.loc))].map(t=>`<button class="chip" aria-pressed="false" data-jl="${t}">${t}</button>`).join('')}</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px" id="jgrid">${ROLES.map(r=>`<a class="card job fade-item" href="#role-${r.slug}" data-team="${r.team}" data-loc="${r.loc}"><div style="display:flex;flex-direction:column;gap:8px;max-width:720px"><h3 style="font-size:20px">${esc(r.n)}</h3><p style="font-size:14.5px">${esc(r.sum)}</p><div class="meta"><span class="tag">${r.team}</span><span class="tag">${r.loc}</span><span class="tag">${r.type}</span>${r.sample?'<span class="tbc">sample listing</span>':''}${r.pending?'<span class="tbc">new JD needed</span>':''}</div></div><span class="go" style="margin:0">View role ${ARR}</span></a>`).join('')}</div>`, 'alt');

P.role = slug => { const r = ROLES.find(x=>x.slug===slug); if(!r) return null; const studio = r.loc==='Madurai';
 const fw = slug==='firmware-engineer';
 const resp = fw ? FW_JD.resp : [r.sum];
 return pageHero([['Careers','careers'],[r.n]], `${r.team} <i></i> ${r.loc}`, esc(r.n), esc(r.sum), `<div class="tags">${[r.team,r.loc,r.type,'Experience: [confirm]'].map(t=>`<span class="tag">${t}</span>`).join('')}${r.sample?'<span class="tbc">sample listing</span>':''}</div>`) +
 S(`<div style="display:flex;flex-wrap:wrap;gap:48px">
  <div style="flex:1 1 380px;min-width:0;display:flex;flex-direction:column;gap:24px"><div><span class="eyebrow">${fw?'Key responsibilities':'About the role'}</span><ul class="checks" style="margin-top:16px">${resp.map(x=>`<li>${ICONS.check}<span>${x}</span></li>`).join('')}</ul></div>
   ${fw?`<div><span class="eyebrow">Required skills</span><ul class="list" style="margin-top:14px">${FW_JD.skills.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="kv"><span>Education</span><p style="margin:0">${FW_JD.edu}</p></div><div class="kv"><span>Experience</span><p style="margin:0">${FW_JD.exp}</p></div>`:`<div><span class="eyebrow">Skills</span><p class="muted" style="margin-top:12px">Full job description to be published from the current careers page.</p></div>`}
   <a class="link" href="#careers">← All open roles</a></div>
  <form class="form-card" id="apply" style="flex:1 1 440px;min-width:0" novalidate>
   <h2 class="h3">Apply for ${esc(r.n)}</h2>
   <div class="fields">
    <label class="fld" for="a-name">Full name<input id="a-name" name="name" autocomplete="name" required>${ERR('Enter your full name.')}</label>
    <label class="fld" for="a-email">Email<input id="a-email" name="email" type="email" autocomplete="email" required>${ERR('Enter a valid email, like name@company.com.')}</label>
    <label class="fld" for="a-phone">Phone<input id="a-phone" name="phone" type="tel" autocomplete="tel" required>${ERR('Enter a phone number.')}</label>
    <label class="fld" for="a-li">LinkedIn <small>Optional</small><input id="a-li" name="linkedin" type="url" placeholder="https://"></label>
    <label class="fld full" for="a-cv">Résumé <small>PDF or DOCX</small><input id="a-cv" name="cv" type="file" accept=".pdf,.doc,.docx" required style="padding-top:12px">${ERR('Attach your résumé.')}</label>
    <label class="fld full" for="a-note">Note <small>Optional</small><textarea id="a-note" name="note" rows="4"></textarea></label>
   </div>
   <label class="consent" for="a-ok"><input type="checkbox" id="a-ok" required>I agree that Gauranga may store my details to assess this application, as described in the <a class="link" href="#privacy">privacy policy</a>.</label>
   <div class="form-foot"><span class="muted" style="font-size:13.5px">We reply to every applicant.</span><button class="btn btn-primary" type="submit"><span class="spin" aria-hidden="true"></span>Submit application</button></div>
  </form></div>`, 'alt');
};

function contactPage(tab, prod, service){
 const isQ = tab==='quote';
 const sel = 'font:inherit;font-size:15px;border:1px solid var(--ctl);border-radius:10px;padding:0 14px;min-height:50px;background:#fff;color:var(--ink);max-width:100%';
 return pageHero([['Contact']], 'Contact', 'Let’s talk about <span class="hl">your project</span>', 'Tell us about your requirements and our team will get back to you.', '', ['gen-control-room','gen-lab','gen-team']) +
 S(`<div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start">
  <form class="form-card" id="cform" style="flex:999 1 600px;min-width:0" novalidate>
   <div class="seg" role="group" aria-label="Enquiry type"><button type="button" aria-pressed="${isQ}" data-tab="quote">Request a quote</button><button type="button" aria-pressed="${!isQ}" data-tab="engineer">Talk to an engineer</button></div>
   <div class="fields">
    <div class="full" data-for="quote" ${isQ?'':'hidden'}><div class="fld"><label for="c-prod">Product of interest</label><select id="c-prod" style="${sel}"><option value="">Choose a product</option>${FAM.map(f=>`<optgroup label="${esc(f.name)}">${f.items.map(p=>`<option value="${p}" ${p===prod?'selected':''}>${esc(PROD[p].n)}</option>`).join('')}</optgroup>`).join('')}<option value="multiple">Several products / not sure</option></select>${prod?'<small>Pre-selected from the product page you came from.</small>':''}${ERR('Choose a product.')}</div></div>
    <label class="fld" for="c-qty" data-for="quote" ${isQ?'':'hidden'}>Quantity <small>Optional</small><input id="c-qty" type="number" min="1" inputmode="numeric" placeholder="e.g. 10"></label>
    <label class="fld" for="c-date" data-for="quote" ${isQ?'':'hidden'}>Required by <small>Optional</small><input id="c-date" type="month"></label>
    <label class="fld full" for="c-svc" data-for="engineer" ${isQ?'hidden':''}>Area of interest<select id="c-svc">${SOL.map(s=>`<option value="${s.slug}" ${s.slug===service?'selected':''}>${esc(s.name)}</option>`).join('')}<option value="unsure">Not sure yet</option></select></label>
    <label class="fld" for="c-stage" data-for="engineer" ${isQ?'hidden':''}>Project stage<select id="c-stage"><option>Idea or requirements</option><option>Design in progress</option><option>Prototype ready</option><option>Ready for production</option></select></label>
    <label class="fld" for="c-model" data-for="engineer" ${isQ?'hidden':''}>Engagement model<select id="c-model"><option>Turnkey development</option><option>Dedicated team</option><option>Build-to-print</option><option>Help me decide</option></select></label>
    <label class="fld" for="c-name">Full name<input id="c-name" autocomplete="name" required>${ERR('Enter your full name.')}</label>
    <label class="fld" for="c-email">Work email<input id="c-email" type="email" autocomplete="email" required>${ERR('Enter a valid email, like name@company.com.')}</label>
    <label class="fld" for="c-co">Company name<input id="c-co" autocomplete="organization" required>${ERR('Enter your company name.')}</label>
    <label class="fld" for="c-country">Country<select id="c-country"><option>India</option><option>United States</option><option>Australia</option><option>United Arab Emirates</option><option>Other</option></select></label>
    <label class="fld" for="c-phone">Phone number <small>Optional</small><input id="c-phone" type="tel" autocomplete="tel"></label>
    <label class="fld full" for="c-msg"><span id="c-msg-l">${isQ?'Site and integration details':'Project requirements'}</span><textarea id="c-msg" rows="5" required></textarea>${ERR('Add a few lines so the right engineer can reply.')}</label>
   </div>
   <label class="consent" for="c-ok"><input type="checkbox" id="c-ok" required>I agree that Gauranga may store these details to respond to my enquiry, as described in the <a class="link" href="#privacy">privacy policy</a>.</label>
   <div class="form-foot"><span class="muted" style="font-size:13.5px">Typical reply: [response time to confirm] · Mon–Sat IST</span><button class="btn btn-primary" type="submit"><span class="spin" aria-hidden="true"></span><span id="c-submit">${isQ?'Request quote':'Send to an engineer'}</span></button></div>
  </form>
  <aside style="flex:1 1 320px;min-width:0;display:flex;flex-direction:column;gap:16px">
   <div class="card" style="background:var(--ink);border-color:var(--ink);color:var(--inv)"><span class="eyebrow" style="color:var(--sun)">What happens next</span>
    <ol style="list-style:none;padding:0;margin:8px 0 0;display:flex;flex-direction:column;gap:16px">${['We route your request to sales or engineering.','A short call to confirm requirements and site conditions.','You receive a written quotation or project proposal.'].map((x,i)=>`<li style="display:flex;gap:14px"><span class="mono" style="font-size:13px;width:22px;flex:none;color:var(--sun)">0${i+1}</span><span style="font-size:15px">${x}</span></li>`).join('')}</ol></div>
   <div class="card"><span class="eyebrow">Offices</span>${OFFICES.map(o=>`<div style="border-top:1px solid var(--line);padding-top:12px;display:flex;flex-direction:column;gap:4px"><b style="font-size:15px;display:block">${esc(o[1])}</b><span class="muted" style="font-size:13.5px">${esc(o[2])}</span><span class="addr">${esc(o[3])}</span>${o[4]?`<span class="phone">${esc(o[4])}</span>`:''}${o[1].startsWith('Boronia')?'<span class="phone">Mob: +61 427 720 703</span>':''}${o[3].startsWith('[')?'':`<a class="link" style="font-size:13.5px;font-weight:600" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o[3])}" target="_blank" rel="noopener">Open in Maps ↗</a>`}</div>`).join('')}
    <div style="border-top:1px solid var(--line);padding-top:12px;display:flex;flex-direction:column;gap:6px"><span class="mono" style="font-size:13.5px">info@gaurangatech.com <button type="button" class="copybtn l" data-copy="info@gaurangatech.com">Copy</button></span><span class="mono" style="font-size:13.5px">+91 90290 97823 <button type="button" class="copybtn l" data-copy="+91 90290 97823">Copy</button></span></div></div>
  </aside></div>`, 'alt');
}

P['thank-you'] = () => pageHero([['Contact','contact'],['Thank you']], 'Enquiry received', `Thanks${lastName?', '+esc(lastName):''}. <span class="hl">Your enquiry is in.</span>`, 'The right team will reply within [response time to confirm]. In a live build, a confirmation email with a reference number goes to your inbox.', `<div class="ctas"><a class="btn btn-primary mag" href="#case-studies">Read case studies ${ARR}</a><a class="btn btn-outline mag" href="#products">Browse products</a></div>`);
P.applied = () => pageHero([['Careers','careers'],['Application sent']], 'Application received', 'Thanks for applying. <span class="hl">We will be in touch.</span>', 'The hiring team reviews every application. In a live build, a confirmation email goes to the address you gave.', `<div class="ctas"><a class="btn btn-primary mag" href="#careers">See other roles ${ARR}</a><a class="btn btn-outline mag" href="#about">About Gauranga</a></div>`);
P.privacy = () => pageHero([['Privacy']], 'Legal', 'Privacy policy', '') + S(`<div class="prose"><p><b style="color:var(--ink)">[Legal text from client.]</b> This page will explain what data the contact, quote and careers forms collect, why, how long it is kept and how to ask for it to be deleted.</p><h3>Data the forms collect</h3><p>Name, work email, company, country, phone (optional), project or site details, and for job applications a résumé.</p><h3>Contact</h3><p>Questions about privacy: info@gaurangatech.com</p></div>`, 'alt');
P.terms = () => pageHero([['Terms']], 'Legal', 'Terms of use', '') + S(`<div class="prose"><p><b style="color:var(--ink)">[Legal text from client.]</b> Terms of use for this website, including the use of downloads, product information and trademarks.</p></div>`, 'alt');
P.notfound = () => pageHero([['Page not found']], 'Error <i></i> 404', 'This page has moved or does not exist.', 'Old links from the previous website now point to new pages. Try one of these:', `<div class="ctas"><a class="btn btn-primary mag" href="#home">Home ${ARR}</a><a class="btn btn-outline mag" href="#solutions">Solutions</a><a class="btn btn-outline mag" href="#products">Products</a><a class="btn btn-outline mag" href="#contact">Contact</a></div>`);

/* ================= ROUTER ================= */
let lastName = '';
let pendingInd = null;
function resolve(h){
  if(!h || h==='home') return {html:P.home(), nav:'home'};
  const simple = {solutions:'sol', products:'prod', 'case-studies':'case', about:'about', resources:'about', careers:'careers', 'thank-you':'contact', applied:'careers', privacy:'', terms:''};
  if(h in simple && P[h]) return {html:P[h](), nav:simple[h]};
  if(h==='contact') return {html:contactPage('engineer'), nav:'contact'};
  if(h==='studio-enquiry') return {html:contactPage('engineer', null, 'digital-design-development'), nav:'contact'};
  if(h==='quote') return {html:contactPage('quote'), nav:'contact'};
  if(h.startsWith('quote-') && PROD[h.slice(6)]) return {html:contactPage('quote', h.slice(6)), nav:'contact'};
  const pre = [['sol-','sol','sol'],['fam-','fam','prod'],['product-','product','prod'],['case-','case','case'],['role-','role','careers']];
  for(const [p,fn,nav] of pre){ if(h.startsWith(p)){ const out = P[fn](h.slice(p.length)); if(out) return {html:out, nav}; } }
  return {html:P.notfound(), nav:''};
}
let first = true;
function route(){
  const h = decodeURIComponent((location.hash||'').slice(1));
  const r = resolve(h);
  const main = $('#main');
  const swap = () => {
    teardown();
    main.innerHTML = r.html;
    $$('#nav [data-route]').forEach(a => a.classList.toggle('on', a.dataset.route===r.nav));
    $$('#nav a[data-route]').forEach(a => a.dataset.route===r.nav ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'));
    const t = main.querySelector('h1');
    document.title = (h && h!=='home' && t ? t.textContent.trim().slice(0,60)+' · ' : '') + 'Gauranga Technologies';
    window.scrollTo(0,0);
    $('#hdr').classList.remove('hide');
    init();
    main.classList.remove('out');
    if(!first) main.focus({preventScroll:true});
    first = false;
  };
  if(first || reduce){ swap(); } else { main.classList.add('out'); setTimeout(swap, 220); }
  closeM(); closeDD();
}

/* ================= INTERACTIONS ================= */
let cleanups = [];
const on = (el, ev, fn, opt) => { if(!el) return; el.addEventListener(ev, fn, opt); cleanups.push(() => el.removeEventListener(ev, fn, opt)); };
function teardown(){ cleanups.forEach(f => f()); cleanups = []; }
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2600); }

function init(){
  const main = $('#main');
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
  if(!reduce) $$('.rv').forEach(el => { el.classList.remove('in'); io.observe(el); });
  cleanups.push(() => io.disconnect());
  const co = new IntersectionObserver(es => es.forEach(e => { if(!e.isIntersecting) return; co.unobserve(e.target); const el = e.target, to = +el.dataset.to; if(reduce){ el.textContent = to; return; } const t0 = performance.now(), d = 1400; const step = t => { const k = Math.min(1,(t-t0)/d); el.textContent = Math.round(to*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(step); }; requestAnimationFrame(step); }), {threshold:.4});
  $$('.count', main).forEach(el => co.observe(el));
  cleanups.push(() => co.disconnect());
  // stagger siblings that reveal together
  const groups = new Map();
  $$('.rv', main).forEach(el => { const p = el.parentElement; if(!groups.has(p)) groups.set(p, []); groups.get(p).push(el); });
  groups.forEach(list => { if(list.length > 1) list.forEach((el,i) => { if(!el.style.animationDelay) el.style.animationDelay = Math.min(i*90, 540)+'ms'; }); });
  $$('.tags.rv', main).forEach(t => [...t.children].forEach((c,i) => c.style.animationDelay = (i*45)+'ms'));
  // eyebrow scramble on first view
  if(false){
    const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·+-';
    const so = new IntersectionObserver(es => es.forEach(e => { if(!e.isIntersecting) return; so.unobserve(e.target); const el = e.target, final = el.textContent; if(el.children.length || final.length > 48) return; const t0 = performance.now(), d = 650; const step = t => { const k = Math.min(1,(t-t0)/d), n = Math.floor(final.length*k); el.textContent = final.slice(0,n) + final.slice(n).replace(/[^\s]/g, () => CH[Math.floor(Math.random()*CH.length)]); if(k<1) requestAnimationFrame(step); else el.textContent = final; }; requestAnimationFrame(step); }), {threshold:.6});
    $$('.eyebrow', main).forEach(el => so.observe(el));
    cleanups.push(() => so.disconnect());
  }
  // parallax images
  const pars = $$('img[data-par]', main);
  if(pars.length && !reduce){
    const upd = () => { const vh = innerHeight; pars.forEach(img => { const r = img.parentElement.getBoundingClientRect(); if(r.bottom < -100 || r.top > vh + 100) return; const k = parseFloat(img.dataset.par) || .06; const off = ((r.top + r.height/2) - vh/2) * -k; const inBand = img.parentElement.classList.contains('band-img'); img.style.transform = `translateY(${off.toFixed(1)}px)` + (inBand ? '' : ' scale(1.12)'); }); };
    upd(); on(window,'scroll',upd,{passive:true}); on(window,'resize',upd);
  }
  // spotlight + tilt
  $$('.card, .drawing', main).forEach(c => {
    on(c, 'pointermove', e => { const r = c.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top; c.style.setProperty('--mx', x+'px'); c.style.setProperty('--my', y+'px');
      if(false){ const rx = ((y/r.height)-.5)*-5, ry = ((x/r.width)-.5)*5; c.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`; } });
    on(c, 'pointerleave', () => { c.style.transform = ''; });
  });
  if(false) $$('.mag').forEach(b => {
    on(b, 'pointermove', e => { const r = b.getBoundingClientRect(); const x = (e.clientX - r.left - r.width/2)/r.width, y = (e.clientY - r.top - r.height/2)/r.height; b.style.transform = `translate(${(x*14).toFixed(1)}px,${(y*10).toFixed(1)}px)`; });
    on(b, 'pointerleave', () => { b.style.transform = ''; });
  });
  $$('.hero, .phero', main).forEach(h => { const g = h.querySelector('.hero-glow'); if(!g) return; on(h, 'pointermove', e => { const r = h.getBoundingClientRect(); g.style.setProperty('--gx', (e.clientX-r.left)+'px'); g.style.setProperty('--gy', (e.clientY-r.top)+'px'); }); });
  if($('#field', main)) startField($('#field'));
  // banner + gallery carousels
  $$('[data-hcroot]', main).forEach(root => {
    const ss = $$('.hc-s', root), ts = $$('.hc-t', root), ds = $$('.hc-dot', root), cs = $$('.hc-c > span', root), nEl = $('.hc-n', root);
    if(ss.length < 2) return;
    let i = 0;
    const pad = n => String(n).padStart(2,'0');
    const go = k => { i = (k + ss.length) % ss.length;
      ss.forEach((x,j) => x.classList.toggle('on', j===i));
      ts.forEach((x,j) => { x.classList.toggle('on', j===i); x.setAttribute('aria-hidden', j===i ? 'false' : 'true'); $$('a,button', x).forEach(a => j===i ? a.removeAttribute('tabindex') : a.setAttribute('tabindex','-1')); });
      ds.forEach((d,j) => { d.setAttribute('aria-current', j===i); const f = d.firstElementChild; f.style.animation = 'none'; void f.offsetWidth; f.style.animation = ''; });
      cs.forEach((x,j) => x.classList.toggle('on', j===i));
      if(nEl) nEl.textContent = pad(i+1) + ' / ' + pad(ss.length);
      const nx = ss[(i+1) % ss.length].querySelector('img'); if(nx) nx.loading = 'eager';
    };
    ds.forEach((d,j) => { on(d, 'click', () => go(j)); on(d.firstElementChild, 'animationend', () => { if(j===i && !reduce) go(i+1); }); });
    $$('[data-hc]', root).forEach(b => on(b, 'click', () => go(i + (+b.dataset.hc))));
    if(fine){ on(root, 'pointerenter', () => root.classList.add('hc-pause')); on(root, 'pointerleave', () => root.classList.remove('hc-pause')); }
    on(root, 'focusin', () => root.classList.add('hc-pause')); on(root, 'focusout', e => { if(!root.contains(e.relatedTarget)) root.classList.remove('hc-pause'); });
    on(root, 'keydown', e => { if(e.target.closest('.hc-ui') && (e.key==='ArrowRight' || e.key==='ArrowLeft')){ e.preventDefault(); go(i + (e.key==='ArrowRight'?1:-1)); } });
    let x0 = null, y0 = 0;
    on(root, 'pointerdown', e => { if(e.pointerType !== 'mouse'){ x0 = e.clientX; y0 = e.clientY; } });
    on(root, 'pointerup', e => { if(x0 === null) return; const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null; if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(i + (dx < 0 ? 1 : -1)); });
    const vo = new IntersectionObserver(es => es.forEach(e => root.classList.toggle('hc-off', !e.isIntersecting)), {threshold:.15});
    vo.observe(root); cleanups.push(() => vo.disconnect());
  });
  // anatomy
  if($('#anatfig', main)){
    const setL = i => { $$('.anat-item', main).forEach(b => b.setAttribute('aria-pressed', b.dataset.l==i)); $$('#anatfig .layer').forEach((g,k) => { g.classList.toggle('on', k==i); g.style.transform = reduce ? '' : `translateY(${(k - i) * 10}px)`; }); };
    setL(2);
    $$('.anat-item', main).forEach(b => { on(b,'click',() => setL(+b.dataset.l)); on(b,'pointerenter',() => setL(+b.dataset.l)); on(b,'focus',() => setL(+b.dataset.l)); });
  }
  // accordion
  $$('.acc-h', main).forEach(h => on(h,'click',() => { const open = h.getAttribute('aria-expanded')!=='true'; $$('.acc-h', main).forEach(x => { x.setAttribute('aria-expanded','false'); $('#'+x.getAttribute('aria-controls')).classList.remove('open'); }); if(open){ h.setAttribute('aria-expanded','true'); $('#'+h.getAttribute('aria-controls')).classList.add('open'); } }));
  // testimonials
  if($('#qbox', main)){ const show = i => { const q = QUOTES[i]; $('#qbox').innerHTML = `<blockquote class="quote">${esc(q.q)}</blockquote><div class="qmeta"><div><b style="font-size:15.5px">${esc(q.w)}</b><div class="muted" style="font-size:14px">${esc(q.r)}</div></div><a class="link" href="#resources">Read the reference letter →</a></div>`; $$('[data-q]', main).forEach(b => b.setAttribute('aria-pressed', b.dataset.q==i)); }; show(0); $$('[data-q]', main).forEach(b => on(b,'click',() => show(+b.dataset.q))); }
  const pl = $('#procline', main);
  if(pl && !reduce){ const line = pl.querySelector('i'); const upd = () => { const r = pl.getBoundingClientRect(), vh = innerHeight; const p = Math.min(1, Math.max(0, (vh*0.9 - r.top)/(vh*0.6))); line.style.setProperty('--p', p.toFixed(3)); }; upd(); on(window,'scroll',upd,{passive:true}); }
  $$('[data-ind-link]', main).forEach(a => on(a,'click',() => { pendingInd = a.dataset.indLink; }));
  if($('#pgrid', main)){ let fam = 'all', q = ''; const apply = () => { let n = 0; $$('#pgrid > a').forEach(c => { const ok = (fam==='all' || c.dataset.fam===fam) && (!q || c.dataset.q.includes(q)); c.classList.toggle('gone', !ok); if(ok) n++; }); $('#pcount').textContent = `Showing ${n} of 16`; $('#pempty').hidden = n>0; };
    $$('[data-f]', main).forEach(b => on(b,'click',() => { fam = b.dataset.f; $$('[data-f]', main).forEach(x => x.setAttribute('aria-pressed', x===b)); apply(); }));
    on($('#psearch'),'input', e => { q = e.target.value.trim().toLowerCase(); apply(); }); }
  if($('#cgrid', main)){ let ind = pendingInd || 'all', sol = 'all'; pendingInd = null; if(ind!=='all' && !$$('[data-ci]', main).some(x=>x.dataset.ci===ind)) ind = 'all';
    const apply = () => { let n = 0; $$('#cgrid > a').forEach(c => { const ok = (ind==='all'||c.dataset.ind===ind) && (sol==='all'||c.dataset.sol===sol); c.classList.toggle('gone',!ok); if(ok) n++; }); $('#cempty').hidden = n>0; $$('[data-ci]', main).forEach(x => x.setAttribute('aria-pressed', x.dataset.ci===ind)); $$('[data-cs]', main).forEach(x => x.setAttribute('aria-pressed', x.dataset.cs===sol)); };
    $$('[data-ci]', main).forEach(b => on(b,'click',() => { ind = b.dataset.ci; apply(); }));
    $$('[data-cs]', main).forEach(b => on(b,'click',() => { sol = b.dataset.cs; apply(); }));
    on($('#creset'),'click',() => { ind='all'; sol='all'; apply(); }); apply(); }
  if($('#rgrid', main)) $$('[data-rf]', main).forEach(b => on(b,'click',() => { $$('[data-rf]', main).forEach(x => x.setAttribute('aria-pressed', x===b)); $$('#rgrid > .card').forEach(c => c.classList.toggle('gone', b.dataset.rf!=='All' && c.dataset.rt!==b.dataset.rf)); }));
  if($('#jgrid', main)){ let tm='all', lc='all'; const apply = () => { let n=0; $$('#jgrid > a').forEach(c => { const ok=(tm==='all'||c.dataset.team===tm)&&(lc==='all'||c.dataset.loc===lc); c.classList.toggle('gone',!ok); if(ok) n++; }); $('#rolecount').textContent = `${n} open role${n===1?'':'s'}`; };
    $$('[data-jt]', main).forEach(b => on(b,'click',() => { tm=b.dataset.jt; $$('[data-jt]', main).forEach(x=>x.setAttribute('aria-pressed',x===b)); apply(); }));
    $$('[data-jl]', main).forEach(b => on(b,'click',() => { lc=b.dataset.jl; $$('[data-jl]', main).forEach(x=>x.setAttribute('aria-pressed',x===b)); apply(); })); }
  $$('[data-goto]', main).forEach(b => on(b,'click',() => { const t = document.getElementById('sec-'+b.dataset.goto); if(!t) return; window.scrollTo({top:t.getBoundingClientRect().top + scrollY - 130, behavior: reduce?'auto':'smooth'}); }));
  const tabs = $$('.tabbar [data-goto]', main);
  if(tabs.length){ const secs = tabs.map(b => document.getElementById('sec-'+b.dataset.goto)); const spy = () => { let cur = 0; secs.forEach((s,i) => { if(s && s.getBoundingClientRect().top < 200) cur = i; }); tabs.forEach((b,i) => b.setAttribute('aria-current', i===cur)); }; on(window,'scroll',spy,{passive:true}); }
  $$('[data-thumb]', main).forEach(b => on(b,'click',() => { $$('[data-thumb]', main).forEach(x=>x.setAttribute('aria-pressed',x===b)); const cap = $('#gmain .cap'); if(cap) cap.textContent = b.dataset.thumb+' view · photo pending'; }));
  $$('[data-toast]').forEach(b => on(b,'click',() => toast(b.dataset.toast)));
  $$('[data-copy]').forEach(b => on(b,'click',() => { const v = b.dataset.copy; try{ navigator.clipboard.writeText(v).then(() => toast('Copied '+v), () => toast(v)); }catch(e){ toast(v); } }));
  const cform = $('#cform', main);
  if(cform){
    const setTab = t => { $$('[data-tab]', cform).forEach(b => b.setAttribute('aria-pressed', b.dataset.tab===t)); $$('[data-for]', cform).forEach(el => el.hidden = el.dataset.for!==t); $('#c-msg-l').textContent = t==='quote'?'Site and integration details':'Describe your project'; $('#c-submit').textContent = t==='quote'?'Request quote':'Send to an engineer'; cform.dataset.tab = t; };
    cform.dataset.tab = $('[data-tab][aria-pressed="true"]', cform).dataset.tab;
    $$('[data-tab]', cform).forEach(b => on(b,'click',() => setTab(b.dataset.tab)));
    on(cform,'submit', e => { e.preventDefault(); if(validate(cform, cform.dataset.tab==='quote' ? ['c-prod'] : [])) return; lastName = $('#c-name').value.trim().split(' ')[0]; busy(cform, () => { location.hash = 'thank-you'; }); });
  }
  const apply = $('#apply', main);
  if(apply) on(apply,'submit', e => { e.preventDefault(); if(validate(apply, [])) return; busy(apply, () => { location.hash = 'applied'; }); });
  if($('#mapc', main)){ requestAnimationFrame(drawMap); const ro = new ResizeObserver(drawMap); ro.observe($('#mapc')); cleanups.push(() => ro.disconnect()); }
  cursorTargets();
}
function validate(form, extra){
  let firstBad = null;
  $$('[required]', form).concat(extra.map(id => document.getElementById(id))).forEach(el => {
    if(!el || el.closest('[hidden]')) return;
    let ok = el.type==='checkbox' ? el.checked : el.type==='file' ? el.files.length>0 : el.value.trim()!=='';
    if(ok && el.type==='email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    const wrap = el.type==='checkbox' ? el.closest('.consent') : el.closest('.fld');
    if(wrap) wrap.classList.toggle('bad', !ok);
    el.setAttribute('aria-invalid', !ok);
    if(!ok && !firstBad) firstBad = el;
    if(!el._v){ el._v = 1; const clr = () => { wrap && wrap.classList.remove('bad'); el.removeAttribute('aria-invalid'); }; el.addEventListener('input', clr); el.addEventListener('change', clr); }
  });
  if(firstBad){ firstBad.focus(); return true; }
  return false;
}
function busy(form, done){ const b = form.querySelector('[type="submit"]'); b.classList.add('busy'); b.disabled = true; setTimeout(done, 900); }

/* cursor */
const dot = $('.cur-dot'), ring = $('.cur-ring');
let mx = -100, my = -100, rx = -100, ry = -100;
function cursorTargets(){
  return;
  $$('a, button, [data-cur], select, input[type="checkbox"]').forEach(el => {
    if(el._cur) return; el._cur = 1;
    el.addEventListener('pointerenter', () => { if(el.dataset.cur==='view' || el.closest('[data-cur="view"]')){ ring.classList.add('view'); ring.textContent = 'VIEW'; } else ring.classList.add('hov'); });
    el.addEventListener('pointerleave', () => { ring.classList.remove('hov','view'); ring.textContent = ''; });
  });
}
if(false){
  document.documentElement.classList.add('cur-on');
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; }, {passive:true});
  let vx = 0, vy = 0;
  const loop = () => { vx = (vx + (mx-rx)*.15)*.7; vy = (vy + (my-ry)*.15)*.7; rx += vx; ry += vy; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); };
  loop();
  document.addEventListener('mouseout', e => { if(!e.relatedTarget){ mx = my = -200; } });
}

/* header */
let lastY = 0;
addEventListener('scroll', () => { const y = scrollY; const h = $('#hdr'); const max = document.documentElement.scrollHeight - innerHeight; $('#prog').style.transform = `scaleX(${max > 0 ? (y/max).toFixed(4) : 0})`; h.style.boxShadow = y > 10 ? '0 6px 20px -14px rgba(29,26,23,.4)' : ''; if(y > lastY + 6 && y > 240 && !$('.dd.open')) h.classList.add('hide'); else if(y < lastY - 6) h.classList.remove('hide'); lastY = y; }, {passive:true});

/* ================= HERO CIRCUIT FIELD (light) ================= */
let fieldStop = null;
function startField(cv){
  if(fieldStop) fieldStop();
  const ctx = cv.getContext('2d');
  let W, H, traces = [], pulses = [], visible = true, raf;
  const G = 48; let pm = {x:-999, y:-999};
  function build(){
    const dpr = Math.min(2, devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight; cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    traces = []; const cols = Math.ceil(W/G)+1, rows = Math.ceil(H/G)+1;
    let seed = 11; const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
    const n = Math.round(cols*rows/8);
    for(let i=0;i<n;i++){
      let x = Math.floor(rnd()*cols), y = Math.floor(rnd()*rows); const pts = [[x*G,y*G]]; let dir = Math.floor(rnd()*4); const len = 3 + Math.floor(rnd()*6);
      for(let j=0;j<len;j++){ if(rnd()<.35) dir = (dir + (rnd()<.5?1:3))%4; x+=[1,0,-1,0][dir]; y+=[0,1,0,-1][dir]; pts.push([x*G,y*G]); }
      let L = 0; const seg = []; for(let k=1;k<pts.length;k++){ const l = Math.hypot(pts[k][0]-pts[k-1][0], pts[k][1]-pts[k-1][1]); seg.push(l); L+=l; }
      traces.push({pts, seg, L});
    }
  }
  function posAt(t, d){ let acc = 0; for(let k=0;k<t.seg.length;k++){ if(acc + t.seg[k] >= d){ const f = (d-acc)/t.seg[k]; const a=t.pts[k], b=t.pts[k+1]; return [a[0]+(b[0]-a[0])*f, a[1]+(b[1]-a[1])*f]; } acc += t.seg[k]; } return t.pts[t.pts.length-1]; }
  function spawn(nearMouse){
    let t;
    if(nearMouse && pm.x > -900){ const near = traces.filter(tr => Math.hypot(tr.pts[0][0]-pm.x, tr.pts[0][1]-pm.y) < 260); if(near.length) t = near[Math.floor(Math.random()*near.length)]; }
    if(!t) t = traces[Math.floor(Math.random()*traces.length)];
    pulses.push({t, d:0, v:1.2 + Math.random()*1.8, hot: Math.random() < .6});
  }
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(let x=0;x<W+G;x+=G) for(let y=0;y<H+G;y+=G){ const dm = Math.hypot(x-pm.x, y-pm.y); ctx.fillStyle = dm < 200 ? `rgba(156,56,36,${(.5 - dm/400).toFixed(3)})` : 'rgba(138,130,122,.22)'; ctx.fillRect(x-1,y-1,2,2); }
    ctx.lineWidth = 1;
    for(const t of traces){ const dm = Math.hypot(t.pts[0][0]-pm.x, t.pts[0][1]-pm.y); ctx.strokeStyle = dm < 240 ? `rgba(156,56,36,${(.28 - dm/1100).toFixed(3)})` : 'rgba(138,130,122,.12)'; ctx.beginPath(); t.pts.forEach((p,i) => i ? ctx.lineTo(p[0],p[1]) : ctx.moveTo(p[0],p[1])); ctx.stroke(); }
    for(let i=pulses.length-1;i>=0;i--){ const p = pulses[i]; p.d += p.v; if(p.d > p.t.L){ pulses.splice(i,1); continue; }
      const col = p.hot ? '240,164,40' : '156,56,36';
      for(let k=0;k<9;k++){ const q = posAt(p.t, Math.max(0, p.d - k*4)); ctx.fillStyle = `rgba(${col},${((1-k/9)*.8).toFixed(3)})`; ctx.beginPath(); ctx.arc(q[0], q[1], 2.4 - k*.2, 0, 7); ctx.fill(); } }
    if(pulses.length < 34 && Math.random() < .45) spawn(Math.random() < .55);
    raf = requestAnimationFrame(loop);
  }
  function loop(){ if(visible) frame(); else raf = requestAnimationFrame(loop); }
  build();
  const hero = cv.parentElement;
  const mv = e => { const r = cv.getBoundingClientRect(); pm.x = e.clientX - r.left; pm.y = e.clientY - r.top; };
  const lv = () => { pm.x = pm.y = -999; };
  hero.addEventListener('pointermove', mv); hero.addEventListener('pointerleave', lv);
  const ro = new ResizeObserver(() => build()); ro.observe(cv);
  const vo = new IntersectionObserver(es => { visible = es[0].isIntersecting; }); vo.observe(cv);
  if(reduce){ for(let i=0;i<24;i++){ spawn(false); pulses[i].d = Math.random()*pulses[i].t.L; } frame(); cancelAnimationFrame(raf); }
  else { for(let i=0;i<18;i++) spawn(false); raf = requestAnimationFrame(loop); }
  fieldStop = () => { cancelAnimationFrame(raf); ro.disconnect(); vo.disconnect(); hero.removeEventListener('pointermove', mv); hero.removeEventListener('pointerleave', lv); fieldStop = null; };
  cleanups.push(() => fieldStop && fieldStop());
}

function drawMap(){
  const cv = $('#mapc'); if(!cv) return;
  const ctx = cv.getContext('2d'), dpr = Math.min(2, devicePixelRatio||1), W = cv.clientWidth, H = cv.clientHeight;
  cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
  const land = [[.2,.3,.13,.16],[.27,.62,.06,.17],[.5,.3,.07,.1],[.53,.56,.08,.17],[.66,.3,.17,.15],[.69,.48,.035,.08],[.79,.52,.05,.06],[.87,.74,.07,.08],[.35,.14,.05,.06]];
  const s = Math.max(6, W/90);
  ctx.fillStyle='rgba(138,130,122,.45)';
  for(let x=s/2;x<W;x+=s) for(let y=s/2;y<H;y+=s){ const u=x/W, v=y/H; if(land.some(l => ((u-l[0])/l[2])**2 + ((v-l[1])/l[3])**2 < 1)){ ctx.beginPath(); ctx.arc(x,y,1.4,0,7); ctx.fill(); } }
  ctx.strokeStyle='rgba(156,56,36,.5)'; ctx.setLineDash([3,5]); ctx.lineWidth=1.2;
  const hq=[.685*W,.44*H]; [[.22,.37],[.9,.76],[.706,.52]].forEach(p => { ctx.beginPath(); ctx.moveTo(hq[0],hq[1]); const ex=p[0]*W, ey=p[1]*H; ctx.quadraticCurveTo((hq[0]+ex)/2, Math.min(hq[1],ey)-H*.12, ex, ey); ctx.stroke(); });
}

/* ================= BOOT ================= */
buildNav(); buildFooter();
addEventListener('hashchange', route);
route();
})();
