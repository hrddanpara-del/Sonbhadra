// Database Payload holding comprehensive regional entities
const dataNodes = [
    { name: "Anpara Thermal Power Station", category: "industry", tag: "Power Generation", desc: "Anpara Thermal Power Station is located at Anpara in Sonbhadra district in the Indian state of Uttar Pradesh, about 180 km (110 mi) from Varanasi on the Varanasi–Shakti Nagar route. It has a total power-generation capacity of 3850 MW using 9 units. There are in total nine operational units, all of which are coal-fired thermal power stations. The machinery for the UPRVUNL's Anpara A (3 units of 210 MW each) are from Bharat Heavy Electricals Limited. UPRVUNL'S Anpara B (two units of 500 MW each) from Toshiba Corporation, Japan. Machinery for Anpara C was sourced by Lanco power from Dongfang Electric Company (China). Machinery for UPRVUNL'S Anpara D (2 units of 500 MW Each) is sourced from BHEL." },
    { name: "Obra Thermal Power Hub", category: "industry", tag: "Power Generation", desc: "Obra Thermal Power Station, Obra is located in Sonbhadra district in the Indian state of Uttar Pradesh, about 13 km (8.1 mi) from Chopan Railway Station and about 125 km (78 mi) from Varanasi. The power plant holds the distinction of being the first 200 MW unit of India. It is owned and operated by Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited. There are thirteen functioning units, all of which are coal-fired thermal power stations. The machinery for most of the units are from Bharat Heavy Electricals Limited. The last unit of 200 MW was commissioned in 1982. Obra Thermal Power Station has a generating capacity of 1288 MW and an auxiliary bus charged from 3*33 mW hydro power plant. Constructions have been underway to add two units of 660 MW each to the power plant." },
    { name: "Hindalco Renukoot Plant", category: "industry", tag: "Aluminium Factory", desc: "Hindalco's Renukoot plant in Uttar Pradesh (Sonbhadra district) is the flagship, fully integrated aluminum facility of the Aditya Birla Group, commissioned in 1962. It is one of the largest manufacturing complexes of its kind in India, transforming raw bauxite into high-quality value-added aluminum products. Hindalco, Renukoot, is one of the largest integrated primary producers of aluminium in Asia, with a pan-Indian presence encompassing the entire gamut of operations, from bauxite mining and alumina refining to aluminium smelting and downstream processes such as rolling, wire rod production, and extrusions. Our journey began in 1958 in Renukoot, Uttar Pradesh, as the first integrated aluminium plant in independent India." },
    { name: "Renusagar Captive Power", category: "industry", tag: "Captive Energy", desc: "An isolated private 840 MW coal plant running explicitly to deliver constant high-voltage electricity to the Renukoot Smelter. Renusagar Power Division, a part of Hindalco Industries Limited, is a coal-based thermal power plant located in Renukoot, Uttar Pradesh. Established in 1964 as a captive power plant for Hindalco's Renukoot operations with 10 turbo-generator sets and 11 steam generators. The plant plays a crucial role in providing uninterrupted power to Hindalco's aluminum plant in Renukoot." },
    { name: "MEIL/Lanco Power Station", category: "industry", tag: "Private Generation", desc: "The MEIL/Lanco power station, now officially known as MEIL Anpara Energy Limited (formerly Lanco Anpara Power Limited), is a 1,200 MW coal-fired thermal power plant located near Anpara in the Sonbhadra district of Uttar Pradesh. The Anpara-C power station, built by Lanco, adjoins the existing Anpara power station operated by UPRVUNL. The power station is located near Anpara in Uttar Pradesh, India. Both units were commissioned in November 2011 according to the Ministry of Power. In January 2025, the power station’s Environmental Clearance (EC) was transferred to MEIL Anpara Energy Limited. In December 2025, MEIL Anpara Energy sought an EC amendment for an exemption from installing flue gas desulfurization equipment at the power station. The proposal was returned to the company for lack of sufficient details." },
    { name: "Rihand Hydroelectric Plant", category: "industry", tag: "Hydro Ecosystem", desc: "The Rihand Hydroelectric Plant, commissioned in 1962, is a premier renewable energy facility located in Pipri, Sonbhadra district, Uttar Pradesh. Operated by Uttar Pradesh Jal Vidyut Nigam Ltd (UPJVNL), this conventional storage power station balances the regional grid and supplies vital water to local industries.<br><b>Key Specifications: </b><br> Capacity: 300 MW via six 50 MW generating units.Technology: Medium-head Francis turbines driven by water pressure.Dam Structure: A concrete gravity dam standing 91.44 meters high and 934.45 meters long.<br><b>The Reservoir</b><br>The dam creates the Govind Ballabh Pant Sagar, India’s largest artificial lake by surface area. It spans 466 square kilometers and holds 10.6 billion cubic meters of water. This massive reservoir acts as a critical cooling water source for nearby thermal power plants and heavy industries in the Singrauli-Anpara industrial belt, while also aiding downstream agricultural irrigation." },
    { name: "Salkhan Fossils Park", category: "tourism", tag: "Geology Site", desc: "Houses globally significant petrified tree stromatolite algae matrices tracing back 1.4 billion years—five times older than dinosaurs. Salkhan Fossils Park, officially known as Sonbhadra Fossils Park, is a fossil park in Uttar Pradesh, India. It is located 12 km from Robertsganj, near Salkhan village on state highway SH5A in Sonbhadra district. The fossils in the park are estimated to be nearly 1.4 billion years old. The fossils appear as rings on the boulders and are scattered in Fossil rings on boulders in the park which is spread over an area of about 25 hectares in the Kaimoor Wildlife range." },
    { name: "Vijaygarh Fort", category: "tourism", tag: "Medieval Heritage", desc: "High altitude fortress holding ancient stone architecture. Renowned universally as the setting for the epic novel Chandrakanta.Vijaygarh Fort is a historic hill fort located near Mau Kalan village in the Chatra block of Sonbhadra district, Uttar Pradesh, India. The fort is situated approximately 30 kilometres southeast of Robertsganj near the Dhandhraul Dam on the Chatra–Siltham road. Located within the rugged terrain of the Kaimur Range, the fort is known for its archaeological remains, rock inscriptions, perennial ponds, temples, cave paintings, and its association with the Hindi fantasy novel Chandrakanta by Devaki Nandan Khatri." },
    { name: "Mukkha Fall", category: "tourism", tag: "Eco Picnic Spot", desc: "A stunning seasonal water cascade falling gracefully over deep sandstone blocks on the Belan River basin near Ghorawal. Mukkha Fall is situated on the Robertsganj to Ghorawal road, approximately 50 kilometres (31 mi) to the west of Robertsganj and 15 kilometres (9.3 mi) from Ghorawal, in the Sonbhadra district of Uttar Pradesh on the Belan River. It is a waterfall in Uttar Pradesh. The water body lies close to a Devi Mandir and Karia Tal or the lake on the Belan River. It is one of the most magnificent waterfalls in the district. It presents a breathtaking sight during the rainy season. There are rock paintings called Lakhaniya Cave Paintings near Mukkha Fall in the cave which were drawn by Early Man." },
    { name: "Lakhaniya Dari Waterfall", category: "tourism", tag: "Eco Picnic Spot", desc: "Requires a scenic 2 km forest trek alongside open valley boulders. Highly sought after by weekend adventurers. Lakhaniya Dari Waterfall is a picturesque 150-meter-high plunge waterfall located in the Mirzapur district of Uttar Pradesh, near Latifpur and Ahraura. Situated about 50 km from Varanasi, it is a popular destination for nature lovers, trekkers, and adventure enthusiasts seeking to escape the busy city life." },
    { name: "Shivdwar Temple", category: "tourism", tag: "Sacred Temple", desc: "Houses a masterful, highly unique 3-foot black stone standing carving depicting Lord Shiva and Goddess Parvati from the 11th century. The Shivdwar Temple, officially known as the Uma Maheshwar Temple, is an ancient 11th-century shrine located in the Sonbhadra district of Uttar Pradesh. It is famous for housing a rare 3-foot black-stone idol of Lord Shiva and Goddess Parvati in a procreation/divine embrace posture." },
    { name: "Jwala Devi Temple", category: "tourism", tag: "Sacred Temple", desc: "The Jwala Devi Temple (Jwala Ji) is a revered Hindu shrine in the Kangra district of Himachal Pradesh. Dedicated to the Goddess of Light, it is one of the 51 Shakti Peethas. Instead of an idol, devotees worship nine eternally burning, natural flames representing different forms of Goddess Durga." },
    { name: "The Northern Coalfields Limited (NCL)", category: "industry", tag: "Coal Fields", desc: "The Northern Coalfields Limited (NCL) operates several highly mechanized opencast coal mines across the border region of Sonbhadra district (Uttar Pradesh) and Singrauli district (Madhya Pradesh), forming a core part of the Singrauli Coalfield. These coal fields serve as the primary fuel source for major thermal power stations in the region, including the Anpara and Shaktinagar power plants. Open-cast Northern Coalfields Limited mines—Bina, Kakri, Krishnashila, and Khadia—are located in the Sonbhadra district and extract massive reserves of non-coking thermal coal to generate nearly 10% of India's electricity." },
    { name: "Robertsganj", category: "Place", tag: "Historical", desc: "Robertsganj is located in the south-eastern corner of the state. Robertsganj is the administrative headquarter of Sonbhadra District. The district Sonbhadra and Robertsganj as its district headquarter were created by carving off the southern part of the Mirzapur district on 4 March 1989. Son, Karmnasa, Chandra Prabha, Rihand, Kanhar, Renu, Ghagar and Belan Rivers drain this area. The city is named after Frederick Roberts, 1st Earl Roberts. Located between Vindhyan Range and Kaimur Range, this area had been the centre of activities of pre-historic man which is evident from the rock paintings (pre-historic cave art) found in abundance in this region."},
    { name: "Anpara", category: "Place", tag: "Industrial Hub", desc: "Anpara is a town in Sonbhadra district in the Indian state of Uttar Pradesh. It is located about 180 km (110 mi) from Varanasi on the Varanasi–Shakti Nagar route. Anpara is known for its thermal power station, which is one of the largest in India, with a total power-generation capacity of 3850 MW using 9 units. The town serves as a significant industrial hub in the region, contributing to the energy sector and providing employment opportunities." },
    { name: "Obra", category: "Place", tag: "Industrial Hub", desc: "Obra is a town in Sonbhadra district in the Indian state of Uttar Pradesh. It is located about 13 km (8.1 mi) from Chopan Railway Station and about 125 km (78 mi) from Varanasi. Obra is known for its thermal power station, which holds the distinction of being the first 200 MW unit of India. The town serves as a significant industrial hub in the region, contributing to the energy sector and providing employment opportunities." },
    { name: "Rihand", category: "Place", tag: "Industrial Hub", desc: "Rihand is a town in Sonbhadra district in the Indian state of Uttar Pradesh. It is located near the Rihand Dam, also known as the Govind Ballabh Pant Sagar Dam, which is a concrete gravity dam located at Pipri in the Sonbhadra district. The dam features India's largest artificial lake/reservoir by volume and plays a crucial role in providing water for irrigation and hydroelectric power generation in the region." },
    { name: "Renukoot", category: "Place", tag: "Industrial Hub", desc: "Renukoot is a town in Sonbhadra district in the Indian state of Uttar Pradesh. It is known for its industrial significance, particularly due to the presence of Hindalco's Renukoot plant, which is one of the largest integrated primary producers of aluminium in Asia. The town serves as a major industrial hub in the region, contributing to the manufacturing sector and providing employment opportunities." }
];

// Map Coordinate Configuration Directory
const mapPoints = {
    robertsganj: { coords: [24.6833, 83.0667], name: "Robertsganj (Sonbhadra Town)", text: "District Administrative Headquarters and primary economic highway gateway." },
    anpara: { coords: [24.2014, 82.7878], name: "Anpara Super Power Plant", text: "State-owned generation giant outputting 3,830 MW directly on the reservoir rim." },
    obra: { coords: [24.4161, 82.9739], name: "Obra Industrial Complex", text: "Hosting joint thermal systems and the 99 MW cascading hydro project." },
    rihand: { coords: [24.2086, 82.9991], name: "Rihand Dam (Govind Ballabh Pant Sagar)", text: "India's largest man-made lake by volume, storing 10.6 Billion Cubic Meters of water." },
    renukoot: { coords: [24.2415, 83.0335], name: "Hindalco Industrial Complex", text: "Major downstream manufacturing zone processing raw bauxite metal products." },
    fossils: { coords: [24.6212, 83.0983], name: "Salkhan Fossils Reserve", text: "25-hectare protected geological zone holding 1.4-billion-year-old structures." },
    vijaygarh: { coords: [24.5428, 83.1364], name: "Vijaygarh Hill Fort", text: "Historic stronghold sitting 30 km south of Robertsganj tracking local folk legends." }
};

// Initializing Directory Cards Functionality
function displayCards(filter = "all") {
    const grid = document.getElementById("destinations-grid");
    grid.innerHTML = "";
    
    const elements = filter === "all" ? dataNodes : dataNodes.filter(n => n.category === filter);
    
    elements.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-header">
                <span>${item.name}</span>
                <span class="card-tag ${item.category === 'tourism' ? 'tourism-tag' : ''}">${item.tag}</span>
            </div>
            <div class="card-body">
                <p>${item.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Interlocking Tab Layout Event Processing
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".tab-btn.active").classList.remove("active");
        e.target.classList.add("active");
        displayCards(e.target.getAttribute("data-tab"));
    });
});

// Carousel Sliding Algorithm
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

document.getElementById("nextBtn").addEventListener("click", () => changeSlide(1));
document.getElementById("prevBtn").addEventListener("click", () => changeSlide(-1));
setInterval(() => changeSlide(1), 6000); // Auto rotating every 6 seconds

// Leaflet Map Orchestration & Integration Setup
let map;
function initializeMap() {
    // Initializing center map target point on Sonbhadra district context
    map = L.map('map').setView([24.4500, 83.0000], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Iterating markers on map layout directly
    Object.keys(mapPoints).forEach(key => {
        const markerInfo = mapPoints[key];
        const marker = L.marker(markerInfo.coords).addTo(map);
        marker.bindPopup(`<b>${markerInfo.name}</b><br>${markerInfo.text}`);
    });
}

// Dropdown synchronization logic focusing geographic framework
const selector = document.getElementById("locationSelect");
const detailsBox = document.getElementById("location-details");

function handleLocationChange() {
    const selectionKey = selector.value;
    const target = mapPoints[selectionKey];
    
    if (target) {
        map.flyTo(target.coords, 12, { animate: true, duration: 1.5 });
        detailsBox.innerHTML = `
            <h4>${target.name}</h4>
            <p style="margin-top:0.5rem; font-size:0.9rem; color:#4b5563;">${target.text}</p>
            <small style="display:block; margin-top:0.5rem; color:#9ca3af;">Coordinates: ${target.coords.join(', ')}</small>
        `;
    }
}

selector.addEventListener("change", handleLocationChange);

// Document OnLoad Execution Setup
window.addEventListener("DOMContentLoaded", () => {
    displayCards("all");
    initializeMap();
    handleLocationChange(); // Trigger initial sidebar rendering
});